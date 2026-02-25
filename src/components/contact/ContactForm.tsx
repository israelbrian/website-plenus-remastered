import EnvelopeIcon from "@heroicons/react/24/solid/EnvelopeIcon";
import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
    const email = "plenusplanejados@gmail.com";
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

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
        <>
            <div className="bg-color-white p-8 rounded-2xl shadow-lg border border-color-border/20 hover:shadow-xl transition-all sm:col-span-2 flex flex-col h-full">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 h-full w-full">
                    <div className="flex flex-col h-full flex-1">
                        <EnvelopeIcon className="w-10 h-10 text-color-accent mb-4" />
                        <h3 className="font-family-title font-bold text-color-primary text-xl mb-2">E-mail</h3>
                        <p className="font-family-body text-color-muted text-sm mb-6 sm:mb-0">Ideal para envio de projetos e plantas.</p>
                    </div>
                    <button
                        onClick={() => setIsEmailModalOpen(true)}
                        className="mt-auto sm:mt-0 inline-block w-full sm:w-auto text-center bg-color-primary text-color-white font-family-title font-bold px-8 py-3 rounded-lg hover:bg-color-accent hover:text-color-primary transition-colors"
                    >
                        Enviar Mensagem
                    </button>
                </div>
            </div>

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
        </>
    );
}