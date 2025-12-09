const CTASection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-salmon-light rounded-2xl p-8 text-center">
          <a
            href="#test"
            className="inline-block bg-teal-cta hover:bg-teal-cta-hover text-primary-foreground font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
          >
            Haz el Test y descubre tu tipo de desregulación
          </a>

          <p className="text-sm text-muted-foreground mt-5">
            Este test está basado en modelos de <strong className="text-primary">Porges</strong>, <strong className="text-primary">Levine</strong> y evidencia actual en regulación autonómica. Te tomará menos de 2 minutos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
