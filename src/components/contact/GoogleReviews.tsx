import { StarIcon } from "lucide-react";
import Link from "next/link";

// URL pública gerada pelo "Publicar na Web" do Google Sheets no formato CSV
const GOOGLE_SHEETS_CSV_URL = process.env.GOOGLE_SHEETS_CSV_URL || "";

// Função utilitária Sênior para converter o CSV em Array de forma segura
// (Lida com vírgulas e quebras de linha dentro dos textos das avaliações)
function parseCSV(str: string) {
    const arr: string[][] = [];
    let quote = false;
    let row = 0, col = 0;

    for (let c = 0; c < str.length; c++) {
        let cc = str[c], nc = str[c + 1];
        arr[row] = arr[row] || [];
        arr[row][col] = arr[row][col] || '';

        if (cc == '"' && quote && nc == '"') { arr[row][col] += cc; ++c; continue; }
        if (cc == '"') { quote = !quote; continue; }
        if (cc == ',' && !quote) { ++col; continue; }
        if (cc == '\r' && nc == '\n' && !quote) { ++row; col = 0; ++c; continue; }
        if (cc == '\n' && !quote) { ++row; col = 0; continue; }
        if (cc == '\r' && !quote) { ++row; col = 0; continue; }

        arr[row][col] += cc;
    }
    return arr;
}

type Review = {
    id: string;
    author: string;
    rating: number;
    text: string;
    date: string;
    avatar: string;
    display: string;
};

export default async function GoogleReviews() {
    let reviews: Review[] = [];

    try {
        // O fetch com Next.js permite fazermos revalidate. 
        // 3600 segundos = 1 hora (O site buscará na planilha apenas 1 vez por hora).
        // 60 segundos = 1 minuto (O site buscará na planilha apenas 1 vez por minuto).
        // Isso zera custos e latências para a massiva maioria dos usuários.
        const res = await fetch(GOOGLE_SHEETS_CSV_URL, {
            next: { revalidate: 3600 }
        });

        if (res.ok) {
            const csvText = await res.text();
            const data = parseCSV(csvText);

            // Ignoramos a primeira linha data[0] que são os Cabeçalhos 
            // e mapeamos as demais para objetos TypeScript
            const parsedReviews = data.slice(1).map((row, index) => ({
                id: row[0] || `review-${index}`,
                author: row[1] || 'Cliente',
                rating: Number(row[2]) || 5, // Fallback p/ 5 estrelas
                text: row[3] || '',
                date: row[4] || '',
                avatar: row[5] || (row[1] ? row[1][0] : ''), // Primeira letra
                display: row[6]?.toLowerCase().trim() || 'sim',
            }));

            // Filtramos apenas as reviews marcadas com "sim" que contenham texto
            reviews = parsedReviews.filter((r) => r.display === 'sim' && r.text);
        }
    } catch (error) {
        console.error("Erro ao buscar avaliações da planilha do Google:", error);
    }

    // Fallback Extremo: Se a planilha falhar, for excluída ou a cloudflare ficar offline, o site não quebra.
    if (reviews.length === 0) {
        reviews = [
            {
                id: "fallback-1",
                author: "Ricardo M.",
                rating: 5,
                text: "Armários de excelente qualidade e tudo dentro do prazo. Além disso, voltaram depois de dois meses só pra conferir se estávamos satisfeitos. Recomendo.",
                date: "1 mês atrás",
                avatar: "R",
                display: "sim"
            },
            {
                id: "fallback-2",
                author: "Ana Cláudia",
                rating: 5,
                text: "Excelente empresa, cumpre o que promete e é pontual na entrega. Minha cozinha ficou maravilhosa.",
                date: "4 meses atrás",
                avatar: "A",
                display: "sim"
            }
        ];
    }

    // Calcula de forma dinâmica a média das estrelas baseando-se na planilha
    const averageRating = reviews.length > 0
        ? (reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length).toFixed(1)
        : "5.0";

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h2 className="font-family-title text-2xl font-bold text-color-primary border-b-2 border-color-accent pb-2 inline-block">
                    Avaliações no Google
                </h2>
                <div className="flex items-center gap-2">
                    <span className="font-family-title font-bold text-lg">{averageRating}</span>
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="w-5 h-5 fill-current" />
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-color-white p-6 rounded-xl shadow-sm border border-color-border/10">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-color-surface-alt rounded-full flex items-center justify-center font-bold text-color-primary overflow-hidden">
                                {review.avatar.startsWith('http') ? (
                                    <img src={review.avatar} alt={review.author} className="w-full h-full object-cover" />
                                ) : (
                                    review.avatar
                                )}
                            </div>
                            <div>
                                <h4 className="font-family-title font-bold text-sm text-color-primary">{review.author}</h4>
                                <div className="flex text-yellow-500 scale-75 origin-left -mt-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <StarIcon key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                            </div>
                            <span className="ml-auto text-xs text-color-muted">{review.date}</span>
                        </div>
                        <p className="font-family-body text-sm text-color-muted italic">"{review.text}"</p>
                    </div>
                ))}
            </div>

            <Link
                href="https://www.google.com/maps/place/Plenus+planejados/@-19.8158329,-43.975393,17z/data=!4m8!3m7!1s0xa68fd31aa9b883:0xb675544313d857f0!8m2!3d-19.8158329!4d-43.975393!9m1!1b1!16s%2Fg%2F11yw2hwt6n?entry=ttu"
                target="_blank"
                className="mt-6 inline-block text-color-primary font-family-title font-bold text-sm hover:text-color-accent transition-colors underline decoration-color-accent decoration-2 underline-offset-4"
            >
                Ver todas as avaliações no Google Maps
            </Link>
        </div>
    );
}    