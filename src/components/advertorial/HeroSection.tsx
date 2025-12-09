import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="py-6 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary leading-tight mb-3">
          <span className="italic">Cuando escuché mi voz saliendo de su boca,</span>
          <br />
          <span className="relative inline-block mt-1">
            entendí todo.
            <span className="absolute bottom-0 left-0 w-full h-2 bg-salmon -z-10"></span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl mx-auto">
          Una explicación basada en neurociencia sobre cómo los patrones emocionales pueden transmitirse sin darnos cuenta.
        </p>

        {/* Hero Image */}
        <div className="max-w-2xl mx-auto">
          <img 
            src={heroImage} 
            alt="Madre e hija - patrones emocionales heredados" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
