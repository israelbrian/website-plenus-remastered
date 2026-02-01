export default function Header() {
  const caracteristicas = [
    '100% MDF',
    'Decoração',
    'Projetos',
    'Junco Sintético',
    'Junco Natural',
    'Rústicos',
    'Estofamento',
    'Garantia',
    'Pontualidade',
  ];

  return (
    <header className="bg-color-dark-bege border-b border-color-tertiary">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Título */}
          <div className="text-center md:text-left">
            <h1 className="font-family-primary text-3xl md:text-4xl font-bold text-color-quaternary">
              Plenus Planejados
            </h1>
          </div>

          {/* Grid de Características */}
          <div className="w-full md:w-auto">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-3">
              {caracteristicas.map((caracteristica, index) => (
                <div
                  key={index}
                  className="bg-color-secondary px-3 py-2 rounded-lg text-center"
                >
                  <span className="font-family-secondary text-xs md:text-sm font-medium text-color-primary">
                    {caracteristica}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
