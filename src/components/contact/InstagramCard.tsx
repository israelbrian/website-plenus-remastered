import InstagramIcon from "@/components/icons/InstagramIcon";
import Link from "next/link";

export default function InstagramCard() {
    return (
        <div className="bg-color-white p-8 rounded-2xl shadow-lg border border-color-border/20 hover:shadow-xl transition-all flex flex-col h-full">
            <InstagramIcon className="w-10 h-10 text-color-primary mb-4" />
            <h3 className="font-family-title font-bold text-color-primary text-xl mb-2">Nosso Instagram</h3>
            <p className="font-family-body text-color-muted text-sm mb-6">Fotos de projetos.</p>
            <Link
                href="https://instagram.com/plenusplanejados"
                target="_blank"
                className="mt-auto inline-block w-full text-center bg-color-primary text-color-white hover:bg-color-accent hover:text-color-primary transition-all font-family-title font-bold py-3 rounded-lg"
            >
                Ver mais
            </Link>
        </div>
    );
}    