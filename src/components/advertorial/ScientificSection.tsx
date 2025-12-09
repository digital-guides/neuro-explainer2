const ScientificSection = () => {
  const effects = [
    "hiperactivar la alerta",
    "aprender a anticipar conflictos",
    "desarrollar respuestas de complacencia o congelamiento",
    "mantener tonos emocionales heredados",
  ];

  return (
    <section className="py-10 px-4 bg-soft-gray">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-primary text-center mb-8">
          🧠 La ciencia detrás de los patrones heredados
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Los estudios de <strong className="text-primary">Stephen Porges</strong> (Teoría Polivagal) muestran que el sistema nervioso aprende patrones de seguridad y amenaza a través de las relaciones tempranas.
          </p>

          <p>
            Cuando un niño crece en ambientes donde hay tensión, imprevisibilidad o alto estrés emocional, el sistema nervioso puede:
          </p>

          <ul className="space-y-2 pl-4">
            {effects.map((effect, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>{effect}</span>
              </li>
            ))}
          </ul>

          <p>
            La psicóloga <strong className="text-primary">Lisa Feldman Barrett</strong> demuestra que las emociones se construyen a partir de predicciones del cerebro basadas en experiencias previas.
          </p>

          <p>
            Y <strong className="text-primary">Bessel van der Kolk</strong>, en <em>The Body Keeps the Score</em>, explica que el cuerpo almacena memorias emocionales que pueden aparecer años después.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScientificSection;
