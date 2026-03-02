import InstagramIcon from "@/components/icons/InstagramIcon";
import Link from "next/link";

export default function InstagramCard() {
    return (
        <div className="p-8 hover:bg-black/[0.02] transition-colors duration-300 flex flex-col h-full">
            <InstagramIcon className="w-10 h-10 text-color-instagram mb-4" />
            <h3 className="font-family-title font-bold text-color-primary text-xl mb-2">Instagram</h3>
            <p className="font-family-body text-color-muted text-sm mb-6">Confira nossas fotos oficiais dos projetos realizados.</p>
            <Link
                href="https://instagram.com/plenusplanejados"
                target="_blank"
                className="mt-auto flex items-center justify-center w-full h-12 bg-color-primary text-color-white font-family-title font-bold text-sm lg:text-base rounded-lg hover:bg-color-accent hover:text-color-primary transition-colors whitespace-nowrap px-2"
            >
                Ver Projetos
            </Link>
        </div>
    );
}    