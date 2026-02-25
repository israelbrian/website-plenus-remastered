import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import Link from "next/link";

export default function WhatsAppCard() {
    const phone = "3185697977";
    const whatsappMsg = encodeURIComponent("Olá! Estava navegando no site plenusplanejados.com.br e gostaria de solicitar um orçamento pessoal.");

    return (
        <div className="bg-color-white p-8 rounded-2xl shadow-lg border border-color-border/20 hover:shadow-xl transition-all group flex flex-col h-full">
            <WhatsAppIcon className="w-10 h-10 text-[#25D366] mb-4" />
            <h3 className="font-family-title font-bold text-color-primary text-xl mb-2">WhatsApp</h3>
            <p className="font-family-body text-color-muted text-sm mb-6">Resposta rápida para orçamentos e dúvidas.</p>
            <Link
                href={`https://wa.me/${phone}?text=${whatsappMsg}`}
                target="_blank"
                className="mt-auto inline-block w-full text-center bg-color-primary text-color-white font-family-title font-bold py-3 rounded-lg hover:bg-color-accent hover:text-color-primary transition-colors"
            >
                Fazer um orçamento
            </Link>
        </div>
    );
}    