const FunctionsChips = () => {
  const functions = [
    { text: "regulación emocional", bg: "bg-salmon-light", border: "border-salmon/30" },
    { text: "tono de voz y reactividad", bg: "bg-soft-gray", border: "border-gray-300" },
    { text: "percepción de amenaza", bg: "bg-orange-100", border: "border-orange-200" },
    { text: "tensión muscular", bg: "bg-soft-gray", border: "border-gray-300" },
    { text: "vínculo madre-hija", bg: "bg-purple-100", border: "border-purple-200" },
    { text: "límites y comunicación", bg: "bg-soft-gray", border: "border-gray-300" },
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
              className={`inline-block px-5 py-2.5 rounded-full text-sm font-medium text-primary border transition-all hover:opacity-80 ${func.bg} ${func.border}`}
            >
              {func.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionsChips;
