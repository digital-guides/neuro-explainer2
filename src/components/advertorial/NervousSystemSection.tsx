import { Zap, Circle, ArrowRightLeft } from "lucide-react";

const NervousSystemSection = () => {
  const states = [
    {
      icon: Zap,
      title: "Activación (Fight / Flight)",
      description: "El cuerpo entra en modo alerta. Aumenta la tensión y la reactividad sensorial.",
    },
    {
      icon: Circle,
      title: "Colapso (Freeze)",
      description: "Cuando el sistema se queda sin recursos, aparece el cansancio extremo, la niebla mental y la falta de energía.",
    },
    {
      icon: ArrowRightLeft,
      title: "Oscilación entre ambos estados",
      description: "Un día hiperalerta, otro agotada. Síntomas migratorios. Diagnósticos que no encajan.",
    },
  ];

  return (
    <section className="py-4 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-xl md:text-2xl text-primary mb-3">
          Lo que realmente está pasando en tu sistema nervioso
        </h2>

        <div className="space-y-2">
          {states.map((state, index) => (
            <div key={index} className="bg-soft-gray rounded-lg p-4 flex gap-3">
              <div className="flex-shrink-0">
                <state.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">{state.title}</h3>
                <p className="text-muted-foreground text-sm">{state.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-primary mb-1">
            No es inestabilidad psicológica.
          </h3>
          <h3 className="font-serif text-2xl md:text-3xl text-primary font-medium">
            Es neurofisiología.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default NervousSystemSection;
