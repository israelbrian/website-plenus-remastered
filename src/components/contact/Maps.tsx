'use client';

import { useEffect, useState } from 'react';

export default function Maps() {
    const [mapSrc, setMapSrc] = useState<string>('');

    useEffect(() => {
        // A MÁGICA PARA BURLAR O ERRO DO CLOUDFLARE/NEXT.JS:
        // Ao carregar a URL literal apenas no lado do cliente (no useEffect),
        // impedimos o servidor da Cloudflare ou do Next.js de tentar 
        // decodificar o '%3A' para ':' e quebrar o parâmetro maluco do 'pb' 
        // durante o build (SSR/SSG).
        const iframeUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1876.785241963515!2d-43.9770035!3d-19.8158004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa68fd31aa9b883%3A0xb675544313d857f0!2sPlenus%20planejados!5e0!3m2!1spt-BR!2sbr!4v1772240189674!5m2!1spt-BR!2sbr";

        setMapSrc(iframeUrl);
    }, []);

    return (
        <div className="rounded-2xl overflow-hidden shadow-sm border border-color-border/10 w-full h-full min-h-[300px] flex flex-col">
            {mapSrc ? (
                <iframe
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            ) : (
                <div className="w-full h-full bg-color-surface-alt animate-pulse flex items-center justify-center text-color-muted">
                    Carregando mapa...
                </div>
            )}
        </div>
    );
}