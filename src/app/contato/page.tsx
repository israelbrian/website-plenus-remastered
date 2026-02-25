'use client';

import WhatsAppCard from '@/components/contact/WhatsAppCard';
import InstagramCard from '@/components/contact/InstagramCard';
import ContactForm from '@/components/contact/ContactForm';
import AdditionalInformation from '@/components/contact/AdditionalInformation';
import GoogleReviews from '@/components/contact/GoogleReviews';
import Maps from '@/components/contact/Maps';



export default function ContactPage() {

    return (
        <div className="bg-color-surface min-h-screen">
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

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <WhatsAppCard />
                                <InstagramCard />
                                <ContactForm />
                            </div>
                        </div>

                        <AdditionalInformation />

                    </div>

                    {/* Coluna 2: Google Reviews e Mapa */}
                    <div className="space-y-12">
                        <GoogleReviews />
                        <Maps />
                    </div>
                </div>
            </div>
        </div>
    );
}
