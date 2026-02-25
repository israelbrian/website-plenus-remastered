import { ClockIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function InstagramCard() {
    return (
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
    );
}    