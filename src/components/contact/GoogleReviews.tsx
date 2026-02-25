import { StarIcon } from "lucide-react";
import Link from "next/link";

export default function InstagramCard() {

    const REVIEWS = [
    {
        id: 1,
        author: "Ricardo M.",
        rating: 5,
        text: "Armários de excelente qualidade e tudo dentro do prazo. Além disso, voltaram depois de dois meses só pra conferir se estávamos satisfeitos. Recomendo.",
        date: "1 mês atrás",
        avatar: "R"
    },
    {
        id: 2,
        author: "Ana Cláudia",
        rating: 5,
        text: "Excelente empresa, cumpre o que promete e é pontual na entrega. Minha cozinha ficou maravilhosa.",
        date: "4 meses atrás",
        avatar: "A"
    },
    {
        id: 3,
        author: "Luiz Fernando",
        rating: 5,
        text: "Atendimento diferenciado. O projeto 3D ajudou muito a visualizar como ficaria o escritório. Super satisfeito com o resultado final!",
        date: "6 meses atrás",
        avatar: "L"
    }
];

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h2 className="font-family-title text-2xl font-bold text-color-primary border-b-2 border-color-accent pb-2 inline-block">
                    Avaliações no Google
                </h2>
                <div className="flex items-center gap-2">
                    <span className="font-family-title font-bold text-lg">5.0</span>
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="w-5 h-5 fill-current" />
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                {REVIEWS.map((review) => (
                    <div key={review.id} className="bg-color-white p-6 rounded-xl shadow-sm border border-color-border/10">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-color-surface-alt rounded-full flex items-center justify-center font-bold text-color-primary">
                                {review.author[0]}
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