import { StarIcon } from "lucide-react";
import Link from "next/link";
import fallbackReviewsData from "@/data/fallback-reviews.json";

type Review = {
    id: string;
    author: string;
    rating: number;
    text: string;
    date: string;
    avatar: string;
};

export default async function GoogleReviews() {
    // Escopo de Runtime: O Next.js lê essas variáveis no EXATO SEGUNDO que o usuário abre a página,
    // garantindo que elas capturem a chave "Secret" da Imagem 1 (Painel de Runtime) sem que o Webpack as apague.
    const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY || "";
    const GOOGLE_PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "";

    let reviews: Review[] = [];
    let averageRating = "5.0";

    // 🔴 KILL SWITCH DE DESENVOLVIMENTO:
    // Mude para "false" apenas no dia em que for fazer o Deploy Final para o cliente.
    // Enquanto estiver "true", o Next.js usará os dados falsos do JSON e NÃO FARÁ requisições ao Google.
    const DISABLE_API_DURING_DEV = true;

    try {
        if (!DISABLE_API_DURING_DEV && GOOGLE_PLACES_API_KEY && GOOGLE_PLACE_ID) {
            const GOOGLE_API_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews,rating&language=pt-BR&key=${GOOGLE_PLACES_API_KEY}`;

            // Revalida apenas a cada 15 dias (1.296.000 segundos).
            // O componente vira 99% Stático na Edge ajudando a zerar a cota de cobrança 
            // e os riscos bancários mensais do serviço Google Cloud do Cliente final
            const res = await fetch(GOOGLE_API_URL, {
                next: { revalidate: 1296000 }
            });

            if (res.ok) {
                const data = await res.json();

                if (data.status !== "OK") {
                    console.error("[CLOUDFLARE DEBUG] Google rejeitou a requisição:", data.status, data.error_message);
                }

                if (data.result && data.result.reviews) {
                    averageRating = data.result.rating ? data.result.rating.toFixed(1) : "5.0";

                    // O Google Maps devolve até 5 reviews recentes/relevantes
                    reviews = data.result.reviews.map((r: any, index: number) => ({
                        id: `place-review-${index}`,
                        author: r.author_name || 'Cliente',
                        rating: r.rating || 5,
                        text: r.text || '',
                        date: r.relative_time_description || '', // Ex: '2 meses atrás'
                        avatar: r.profile_photo_url || (r.author_name ? r.author_name[0] : 'C'),
                    }));
                } else {
                    console.error("[CLOUDFLARE DEBUG] JSON do Google não encontrou Array de Reviews:", JSON.stringify(data).substring(0, 100));
                }
            } else {
                console.error(`[CLOUDFLARE DEBUG] Fetch HTTP bloqueado internamente: Código ${res.status} - ${res.statusText}`);
            }
        } else {
            console.error(`[CLOUDFLARE DEBUG] Falha na injeção de Variáveis: API_KEY Existe? ${!!GOOGLE_PLACES_API_KEY} | PLACE_ID Existe? ${!!GOOGLE_PLACE_ID}`);
        }
    } catch (error: any) {
        console.error("[CLOUDFLARE DEBUG] Engine TryCatch Crítico (Network ou Timeout):", error.message);
    }

    // Fallback: Se as chaves não estiverem configuradas localmente, a API falhar, 
    // ou o Limite Acabar no painel, o site NÃO QUEBRA.
    if (reviews.length === 0) {
        reviews = fallbackReviewsData;
    }

    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-family-title text-xl font-bold text-color-primary flex items-center gap-2">
                    <StarIcon className="w-5 h-5 text-yellow-500 fill-current" />
                    Avaliações no Google
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
                            <div className="w-10 h-10 bg-color-surface-alt rounded-full flex items-center justify-center font-bold text-color-primary overflow-hidden shrink-0">
                                {review.avatar.startsWith('http') || review.avatar.startsWith('//') ? (
                                    <img
                                        src={review.avatar}
                                        alt={review.author}
                                        className="w-full h-full object-cover"
                                        referrerPolicy="no-referrer"
                                    />
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
                href={GOOGLE_PLACE_ID ? `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}` : "https://www.google.com/maps/search/Plenus+Planejados+Belo+Horizonte"}
                target="_blank"
                className="mt-6 inline-block text-color-primary font-family-title font-bold text-sm hover:text-color-accent transition-colors underline decoration-color-accent decoration-2 underline-offset-4"
            >
                Ver todas as avaliações no Google Maps
            </Link>
        </div>
    );
}    