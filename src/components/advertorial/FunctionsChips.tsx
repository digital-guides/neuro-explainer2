const FunctionsChips = () => {
  const functions = [
    "regulación emocional",
    "tono de voz y reactividad",
    "percepción de amenaza",
    "tensión muscular",
    "vínculo madre-hija",
    "límites y comunicación",
  ];

  return (
    <section className="py-4 px-4">
      <div className="max-w-2xl mx-auto">
        <h3 className="font-serif text-xl md:text-2xl text-primary text-center mb-3">
          Funciones afectadas
        </h3>
        
        <div className="flex flex-wrap justify-center gap-2">
          {functions.map((func, index) => (
            <span
              key={index}
              className="inline-block px-5 py-2.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 transition-all hover:bg-primary/20"
            >
              {func}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionsChips;
