import { ArrowRight } from "lucide-react";

const ActivationFlow = () => {
  const steps = [
    { label: "Activación", sublabel: "constante", color: "bg-primary/10 text-primary border-primary/20" },
    { label: "Desregulación", sublabel: "amplificada", color: "bg-salmon text-primary border-salmon" },
    { label: "Consecuencia", sublabel: "en el cuerpo", color: "bg-primary text-primary-foreground border-primary" },
  ];

  const explanations = [
    "La activación constante sostiene tensión, digestión alterada y sueño pobre.",
    "La desregulación amplifica síntomas variados.",
    "El cuerpo adopta estrategias de supervivencia que se sienten como enfermedad.",
  ];

  return (
    <section className="py-4 px-4 bg-soft-gray">
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-3 font-medium tracking-wide">
          Activación → Desregulación → Consecuencia
        </p>

        {/* Flow diagram */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-2 md:gap-4">
              <div className={`px-4 py-3 rounded-full border ${step.color} text-center`}>
                <div className="font-medium text-sm">{step.label}</div>
                <div className="text-xs opacity-80">{step.sublabel}</div>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Explanations */}
        <div className="space-y-1">
          {explanations.map((text, index) => (
            <p key={index} className="text-sm text-foreground">
              <span className="text-primary font-medium">• </span>
              {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return <strong key={i} className="text-primary">{part.slice(2, -2)}</strong>;
                }
                return part;
              })}
            </p>
          ))}
        </div>

        <p className="text-sm text-foreground mt-3">
          Si llevas tiempo sintiendo que algo no está bien, aunque los estudios médicos digan lo contrario, <strong className="text-primary">no estás equivocada.</strong>
        </p>

        <p className="text-sm text-muted-foreground mt-2">
          Solo estabas mirando los síntomas por separado, cuando la respuesta estaba en el sistema completo.
        </p>
      </div>
    </section>
  );
};

export default ActivationFlow;
