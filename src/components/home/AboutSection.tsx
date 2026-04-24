export default function AboutSection() {
  return (
    <section 
      className="py-16 md:py-24 bg-fixed bg-center bg-cover relative"
      style={{ backgroundImage: `url('/images/produtos/cozinha/area-gourmet.jpg')` }}
    >
      <div className="absolute inset-0 bg-color-primary/80 backdrop-blur-sm pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-color-surface/10 backdrop-blur-md p-8 md:p-14 rounded-3xl border border-color-white/20 shadow-2xl">
          <h2 className="font-family-solid-2 text-2xl md:text-4xl font-semibold text-color-white mb-6">
            Sobre a Plenus Planejados
          </h2>
          <div className="space-y-4 font-family-body text-base md:text-lg text-color-white/90">
            <p>
              A Plenus Planejados é especializada em móveis planejados 100% MDF,
              oferecendo soluções completas de decoração e projetos
              personalizados para todos os ambientes.
            </p>
            <p>
              Com anos de experiência no mercado, executamos projetos
              residenciais e comerciais, sempre priorizando qualidade,
              pontualidade e garantia em todos os nossos produtos.
            </p>
            <p>
              Oferecemos pagamentos facilitados e sem juros, além de executar
              projetos de decoradores. Nossos produtos incluem armários, cozinhas,
              quartos, escritórios e muito mais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
