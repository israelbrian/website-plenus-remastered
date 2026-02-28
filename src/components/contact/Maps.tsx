export default function Maps() {
    // A chave pública importada do arquivo .env.local
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

    // Nome do local convertido para formato de URL seguro (substitui espaços por %20, etc)
    const query = encodeURIComponent("Plenus planejados, Belo Horizonte, MG");

    return (
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-color-white h-[300px]">
            {apiKey ? (
                <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            ) : (
                <div className="w-full h-full bg-color-surface-alt flex items-center justify-center text-color-muted">
                    Mapa indisponível no momento. Configure a chave de API.
                </div>
            )}
        </div>
    );
}