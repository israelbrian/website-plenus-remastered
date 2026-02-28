export default function Maps() {
    return (
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-color-white h-[300px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1876.785241963515!2d-43.9770035!3d-19.8158004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa68fd31aa9b883%3A0xb675544313d857f0!2sPlenus%20planejados!5e0!3m2!1spt-BR!2sbr!4v1772240189674!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}    