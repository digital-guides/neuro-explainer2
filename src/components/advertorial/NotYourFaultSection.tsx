const NotYourFaultSection = () => {
  const points = [
    "el cuerpo prioriza supervivencia antes que tranquilidad",
    "los patrones aprendidos pueden mantenerse incluso cuando ya no hay peligro",
    "el sistema nervioso reproduce tonos emocionales como forma de adaptación",
  ];

  return (
    <section className="py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-salmon-light rounded-xl p-6 md:p-8 border-l-4 border-salmon">
          <h2 className="font-serif text-2xl md:text-3xl text-primary italic mb-4">
            No es tu culpa
          </h2>
          
          <p className="text-lg text-foreground mb-6">
            No es tu culpa: tu sistema nervioso estaba haciendo su trabajo.
          </p>

          <p className="text-foreground mb-4">
            Los estudios de <strong className="text-primary">Porges</strong>, <strong className="text-primary">Van der Kolk</strong> y <strong className="text-primary">Barrett</strong> muestran que:
          </p>

          <ul className="space-y-3 mb-6">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-salmon/30 pt-4 mt-4">
            <p className="text-primary font-medium">
              Tu cuerpo no estaba fallando.
              <br />
              <span className="text-lg">Estaba protegiéndote.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotYourFaultSection;
