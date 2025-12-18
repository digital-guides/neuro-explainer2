const CTASection = () => {
  const url = "https://navegador-del-sistema-nervioso.lovable.app";

  return (
    <section className="py-6 px-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-salmon-light rounded-2xl p-6 text-center">
          <a
            href={url}
            target="_top"
            className="inline-block bg-teal-cta hover:bg-teal-cta-hover text-primary-foreground font-semibold py-4 px-8 rounded-lg transition-colors shadow-lg text-lg"
          >
            Haz el Test y descubre tu tipo de desregulación
          </a>

          <p className="text-sm text-muted-foreground mt-3">
            Este test está basado en modelos de <strong className="text-primary">Porges</strong>,{" "}
            <strong className="text-primary">Levine</strong> y evidencia actual en regulación autonómica.
            Te tomará menos de 2 minutos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

