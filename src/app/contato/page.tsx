'use client';

import { useState } from 'react';
import Link from 'next/link';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import { EnvelopeIcon, MapPinIcon, ClockIcon, StarIcon } from '@heroicons/react/24/solid';

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

export default function ContactPage() {
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

    const email = "plenusplanejados@gmail.com";
    const phone = "3185697977";
    const whatsappMsg = encodeURIComponent("Olá! Estava navegando no site plenusplanejados.com.br e gostaria de solicitar um orçamento pessoal.");

    const emailProviders = [
        {
            name: 'Gmail',
            url: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
            icon: 'G'
        },
        {
            name: 'Outlook / Hotmail',
            url: `https://outlook.office.com/mail/deeplink/compose?to=${email}`,
            icon: 'O'
        },
        {
            name: 'Aplicativo Padrão (Mailto)',
            url: `mailto:${email}`,
            icon: '@'
        }
    ];

    return (
        <div className="bg-color-surface min-h-screen">
            {/* Hero Section */}
            <section className="bg-color-primary py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-family-title text-4xl md:text-5xl font-bold text-color-white uppercase tracking-widest mb-4">
                        Contato
                    </h1>
                    <p className="font-family-accent text-2xl text-color-accent">
                        Estamos prontos para transformar seu espaço
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Coluna 1: Canais de Contato */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="font-family-title text-2xl font-bold text-color-primary mb-8 border-b-2 border-color-accent pb-2 inline-block">
                                Canais de Atendimento
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* WhatsApp Card */}
                                <div className="bg-color-white p-8 rounded-2xl shadow-lg border border-color-border/20 hover:shadow-xl transition-all group">
                                    <WhatsAppIcon className="w-10 h-10 text-[#25D366] mb-4" />
                                    <h3 className="font-family-title font-bold text-color-primary text-xl mb-2">WhatsApp</h3>
                                    <p className="font-family-body text-color-muted text-sm mb-6">Resposta rápida para orçamentos e dúvidas.</p>
                                    <Link
                                        href={`https://wa.me/${phone}?text=${whatsappMsg}`}
                                        target="_blank"
                                        className="inline-block w-full text-center bg-[#25D366] text-white font-family-title font-bold py-3 rounded-lg hover:bg-[#128C7E] transition-colors"
                                    >
                                        Fazer um orçamento
                                    </Link>
                                </div>

                                {/* Email Card */}
                                <div className="bg-color-white p-8 rounded-2xl shadow-lg border border-color-border/20 hover:shadow-xl transition-all">
                                    <EnvelopeIcon className="w-10 h-10 text-color-accent mb-4" />
                                    <h3 className="font-family-title font-bold text-color-primary text-xl mb-2">E-mail</h3>
                                    <p className="font-family-body text-color-muted text-sm mb-6">Ideal para envio de projetos e plantas.</p>
                                    <button
                                        onClick={() => setIsEmailModalOpen(true)}
                                        className="inline-block w-full text-center bg-color-primary text-color-white font-family-title font-bold py-3 rounded-lg hover:bg-color-accent hover:text-color-primary transition-colors"
                                    >
                                        Enviar Mensagem
                                    </button>
                                </div>

                                {/* Instagram Card */}
                                <div className="bg-color-white p-8 rounded-2xl shadow-lg border border-color-border/20 hover:shadow-xl transition-all sm:col-span-2">
                                    <div className="flex items-center gap-6">
                                        <InstagramIcon className="w-12 h-12 text-color-primary" />
                                        <div className="flex-1">
                                            <h3 className="font-family-title font-bold text-color-primary text-xl mb-1">Nosso Instagram</h3>
                                            <p className="font-family-body text-color-muted text-sm">Inspirações diárias e fotos de projetos concluídos.</p>
                                        </div>
                                        <Link
                                            href="https://instagram.com/plenusplanejados"
                                            target="_blank"
                                            className="bg-transparent border-2 border-color-primary text-color-primary hover:bg-color-primary hover:text-color-white font-family-title font-bold px-6 py-2 rounded-lg transition-all"
                                        >
                                            Ver mais
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Horário e Info */}
                        <div className="bg-color-primary/5 p-8 rounded-2xl border border-color-accent/20">
                            <h3 className="font-family-title font-bold text-color-primary mb-6">Informações Adicionais</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-color-muted">
                                    <ClockIcon className="w-6 h-6 text-color-accent" />
                                    <span className="font-family-body">Segunda a Sexta: 08:00 às 18:00</span>
                                </div>
                                <div className="flex items-center gap-4 text-color-muted">
                                    <MapPinIcon className="w-6 h-6 text-color-accent" />
                                    <span className="font-family-body">Rua Érico Veríssimo 1379, São João Batista - BH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coluna 2: Google Reviews e Mapa */}
                    <div className="space-y-12">
                        {/* Avaliações do Google */}
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="font-family-title text-2xl font-bold text-color-primary border-b-2 border-color-accent pb-2 inline-block">
                                    Avaliações no Google
                                </h2>
                                <div className="flex items-center gap-2">
                                    <span className="font-family-title font-bold text-lg">4.9</span>
                                    <div className="flex text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} className="w-5 h-5" />
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
                                                        <StarIcon key={i} className="w-4 h-4" />
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

                        {/* Mapa */}
                        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-color-white h-[300px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3752.6635336306564!2d-43.9779732240212!3d-19.815944781552544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa68fd31aa9b883%3A0xb675544313d857f0!2sPlenus%20planejados!5e0!3m2!1spt-BR!2sbr!4v1708730000000!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Email Provider Modal */}
            {isEmailModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-color-primary/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-color-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-300">
                        <h3 className="font-family-title text-2xl font-bold text-color-primary mb-2">Enviar E-mail</h3>
                        <p className="font-family-body text-color-muted text-sm mb-8">Escolha como prefere abrir o seu e-mail:</p>

                        <div className="space-y-4">
                            {emailProviders.map((provider) => (
                                <Link
                                    key={provider.name}
                                    href={provider.url}
                                    target={provider.name.includes('App') ? '_self' : '_blank'}
                                    onClick={() => setIsEmailModalOpen(false)}
                                    className="flex items-center gap-4 p-4 rounded-xl border-2 border-color-border/10 hover:border-color-accent hover:bg-color-accent/5 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-color-primary text-color-white flex items-center justify-center font-bold group-hover:bg-color-accent transition-colors">
                                        {provider.icon}
                                    </div>
                                    <span className="font-family-title font-bold text-color-primary">{provider.name}</span>
                                </Link>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsEmailModalOpen(false)}
                            className="mt-8 w-full py-3 font-family-title font-bold text-color-muted hover:text-color-primary transition-colors"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
