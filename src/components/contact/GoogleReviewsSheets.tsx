import { StarIcon } from "lucide-react";
import Link from "next/link";
import fallbackReviewsData from "@/data/fallback-reviews.json";

// URL pública gerada pelo "Publicar na Web" do Google Sheets no formato CSV
const GOOGLE_SHEETS_CSV_URL = process.env.GOOGLE_SHEETS_CSV_URL || "";

// Função utilitária Sênior para converter o CSV em Array de forma segura
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

export default async function GoogleReviewsSheets() {
    let reviews: Review[] = [];

    try {
        const res = await fetch(GOOGLE_SHEETS_CSV_URL, {
            next: { revalidate: 3600 }
        });

        if (res.ok) {
            const csvText = await res.text();
            const data = parseCSV(csvText);

            const parsedReviews = data.slice(1).map((row, index) => ({
                id: row[0] || `review-${index}`,
                author: row[1] || 'Cliente',
                rating: Number(row[2]) || 5,
                text: row[3] || '',
                date: row[4] || '',
                avatar: row[5] || (row[1] ? row[1][0] : ''),
                display: row[6]?.toLowerCase().trim() || 'sim',
            }));

            reviews = parsedReviews.filter((r) => r.display === 'sim' && r.text);
        }
    } catch (error) {
        console.error("Erro ao buscar avaliações da planilha do Google:", error);
    }

    if (reviews.length === 0) {
        reviews = fallbackReviewsData.map(r => ({ ...r, display: "sim" }));
    }

    const averageRating = reviews.length > 0
        ? (reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length).toFixed(1)
        : "5.0";

    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-family-title text-xl font-bold text-color-primary flex items-center gap-2">
                    <StarIcon className="w-5 h-5 text-yellow-500 fill-current" />
                    Avaliações no Google (Backup Planilha)
                </h3>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full">
                    <span className="font-family-title font-bold text-lg text-color-primary">{averageRating}</span>
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="w-4 h-4 fill-current" />
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-4 flex-grow w-full">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-color-surface-alt/20 hover:bg-black/[0.02] p-5 rounded-2xl border border-color-border/10 hover:shadow-md transition-shadow">
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
                href="https://www.google.com/maps/place/Plenus+planejados/@-19.8158329,-43.975393,17z"
                target="_blank"
                className="mt-6 inline-block text-color-primary font-family-title font-bold text-sm hover:text-color-accent transition-colors underline decoration-color-accent decoration-2 underline-offset-4"
            >
                Ver todas as avaliações no Google Maps
            </Link>
        </div>
    );
}
