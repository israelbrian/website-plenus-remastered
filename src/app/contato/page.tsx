'use client';

import { useState } from 'react';
import Link from 'next/link';
import WhatsAppCard from '@/components/contact/WhatsAppCard';
import InstagramCard from '@/components/contact/InstagramCard';
import { EnvelopeIcon, MapPinIcon, ClockIcon, StarIcon } from '@heroicons/react/24/solid';
import ContactForm from '@/components/contact/ContactForm';

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

    

    return (
        <div className="bg-color-surface min-h-screen">
            {/* Hero Section */}
            {/* <section className="bg-color-primary py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-family-title text-4xl md:text-5xl font-bold text-color-white uppercase tracking-widest mb-4">
                        Contato
                    </h1>
                    <p className="font-family-accent text-2xl text-color-accent">
                        Estamos prontos para transformar seu espaço
                    </p>
                </div>
            </section> */}

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Coluna 1: Canais de Contato */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="font-family-title text-2xl font-bold text-color-primary mb-8 border-b-2 border-color-accent pb-2 inline-block">
                                Canais de Atendimento
                            </h2>

                            Canais de Atendimento
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <WhatsAppCard />
                                <InstagramCard />
                                <ContactForm />
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
        </div>
    );
}
