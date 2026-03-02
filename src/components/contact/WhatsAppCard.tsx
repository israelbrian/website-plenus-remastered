import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import Link from "next/link";

export default function WhatsAppCard() {
    const phone = "3185697977";
    const whatsappMsg = encodeURIComponent("Olá! Estava navegando no site plenusplanejados.com.br e gostaria de solicitar um orçamento pessoal.");

    return (
        <div className="p-8 hover:bg-black/[0.02] transition-colors duration-300 group flex flex-col h-full">
            <WhatsAppIcon className="w-10 h-10 text-color-whatsapp mb-4" />
            <h3 className="font-family-title font-bold text-color-primary text-xl mb-2">WhatsApp</h3>
            <p className="font-family-body text-color-muted text-sm mb-6">Canal de atendimento rápido e pratico para orçamentos e dúvidas.</p>
            <Link
                href={`https://wa.me/${phone}?text=${whatsappMsg}`}
                target="_blank"
                className="mt-auto flex items-center justify-center w-full h-12 bg-color-primary text-color-white font-family-title font-bold text-sm lg:text-base rounded-lg hover:bg-color-accent hover:text-color-primary transition-colors whitespace-nowrap px-2"
            >
                Iniciar Conversa
            </Link>
        </div>
    );
}    