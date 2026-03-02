

import WhatsAppCard from '@/components/contact/WhatsAppCard';
import InstagramCard from '@/components/contact/InstagramCard';
import ContactForm from '@/components/contact/ContactForm';
import GoogleReviews from '@/components/contact/GoogleReviews';
import Maps from '@/components/contact/Maps';



export default function ContactPage() {

    return (
        <div className="bg-color-surface min-h-screen">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Coluna 1: Canais de Atendimento */}
                    <div className="flex flex-col h-full">
                        <div className="mb-8">
                            <h2 className="font-family-title text-2xl font-bold text-color-primary border-b-2 border-color-accent pb-2 inline-block">
                                Canais de Atendimento
                            </h2>
                        </div>

                        <div className="flex flex-col gap-6 flex-grow">
                            <div className="bg-color-white rounded-3xl shadow-lg border border-color-border/20 flex flex-col sm:flex-row overflow-hidden lg:h-[360px]">
                                <div className="flex-1">
                                    <WhatsAppCard />
                                </div>
                                {/* Divisor responsivo: linha horizontal no mobile, linha vertical no desktop */}
                                <div className="block sm:hidden h-px bg-color-border/20 mx-8"></div>
                                <div className="hidden sm:block w-px bg-color-border/20 my-8"></div>
                                <div className="flex-1">
                                    <InstagramCard />
                                </div>
                            </div>
                            <div className="flex-grow flex flex-col">
                                <ContactForm />
                            </div>
                        </div>
                    </div>

                    {/* Coluna 2: Google Reviews e Mapa */}
                    <div className="flex flex-col h-full">
                        <div className="mb-8">
                            <h2 className="font-family-title text-2xl font-bold text-color-primary border-b-2 border-color-accent pb-2 inline-block">
                                Nossa Localização e Reputação
                            </h2>
                        </div>

                        {/* Espaçador invisível para manter as white-boxes alinhadas horizontalmente no desktop */}
                        {/* <div className="mb-8 hidden lg:block opacity-0 select-none pointer-events-none">
                            <h2 className="font-family-title text-2xl font-bold border-b-2 pb-2 inline-block">
                                Alinhamento
                            </h2>
                        </div> */}

                        <div className="bg-color-white p-6 sm:p-8 rounded-3xl shadow-xl border border-color-border/10 flex flex-col space-y-10 flex-grow h-full">
                            {/* Mapa */}
                            <div className="w-full h-[300px] md:h-[320px] shrink-0">
                                <Maps />
                            </div>

                            {/* Avaliações */}
                            <div className="flex-grow w-full">
                                <GoogleReviews />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
