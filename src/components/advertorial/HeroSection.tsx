interface HeroSectionProps {
  heroImage1?: string;
  heroImage2?: string;
}

const HeroSection = ({ heroImage1, heroImage2 }: HeroSectionProps) => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary leading-tight mb-6">
          <span className="italic">Cuando escuché mi voz saliendo de su boca,</span>
          <br />
          <span className="relative inline-block mt-2">
            entendí todo.
            <span className="absolute bottom-0 left-0 w-full h-2 bg-salmon -z-10"></span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
          Una explicación basada en neurociencia sobre cómo los patrones emocionales pueden transmitirse sin darnos cuenta.
        </p>

        {/* Hero Images Placeholder */}
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          <div className="aspect-[3/4] bg-soft-gray rounded-lg overflow-hidden flex items-center justify-center">
            {heroImage1 ? (
              <img src={heroImage1} alt="Imagen emocional 1" className="w-full h-full object-cover" />
            ) : (
              <div className="text-muted-foreground text-sm text-center p-4">
                Imagen 1<br />(pendiente)
              </div>
            )}
          </div>
          <div className="aspect-[3/4] bg-soft-gray rounded-lg overflow-hidden flex items-center justify-center">
            {heroImage2 ? (
              <img src={heroImage2} alt="Imagen emocional 2" className="w-full h-full object-cover" />
            ) : (
              <div className="text-muted-foreground text-sm text-center p-4">
                Imagen 2<br />(pendiente)
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
