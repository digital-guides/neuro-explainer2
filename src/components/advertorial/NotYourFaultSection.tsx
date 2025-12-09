import notYourFaultImage from "@/assets/not-your-fault-image.jpg";

const NotYourFaultSection = () => {
  const points = [
    "el cuerpo prioriza supervivencia antes que tranquilidad",
    "los patrones aprendidos pueden mantenerse incluso cuando ya no hay peligro",
    "el sistema nervioso reproduce tonos emocionales como forma de adaptación",
  ];

  return (
    <section className="py-2 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Image above the section */}
        <div className="mb-3">
          <img 
            src={notYourFaultImage} 
            alt="Madre e hija - patrones emocionales" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="bg-salmon-light rounded-xl p-5 md:p-6 border-l-4 border-salmon">
          <h2 className="font-serif text-3xl md:text-4xl text-orange-600 italic mb-3">
            No es tu culpa
          </h2>

          <p className="text-foreground mb-2">
            Los estudios de <strong className="text-primary">Porges</strong>, <strong className="text-primary">Van der Kolk</strong> y <strong className="text-primary">Barrett</strong> muestran que:
          </p>

          <ul className="space-y-1 mb-3">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary font-bold text-lg">•</span>
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-salmon/30 pt-3">
            <p className="font-serif text-3xl md:text-4xl text-purple-600 italic">
              Tu cuerpo no estaba fallando.
              <br />
              Estaba protegiéndote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotYourFaultSection;
