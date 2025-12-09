const StorytellingSection = () => {
  const symptoms = [
    "irritabilidad sin motivo claro",
    "agotamiento emocional permanente",
    "reactividad ante pequeños estímulos",
    "dificultad para poner límites sin culpa",
    "miedo constante a equivocarme",
    "sensación de caminar en \"punta de pie\"",
    "necesidad extrema de controlar para sentirme segura",
  ];

  return (
    <section className="py-10 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Storytelling intro */}
        <div className="space-y-6 text-lg leading-relaxed text-foreground">
          <p>
            Durante años reaccioné sin entender por qué.
            <br />
            Había explosiones emocionales, silencios tensos, culpas que no podía explicar.
          </p>

          <p>
            Pero el día que escuché a mi hija de 7 años repetir mi propio tono… <strong>algo se quebró adentro.</strong>
          </p>

          <p className="text-muted-foreground">
            No era lo que dijo.
            <br />
            Era <em>cómo</em> lo dijo.
          </p>

          <p className="text-primary font-medium">
            Era mi voz.
            <br />
            Era la voz de mi madre.
            <br />
            Era la misma tensión aprendida repitiéndose una generación más.
          </p>

          <p>
            Entendí que no estaba actuando desde el presente.
            <br />
            <strong>Estaba actuando desde mis heridas.</strong>
          </p>
        </div>

        {/* Symptoms list */}
        <div className="mt-10">
          <p className="text-lg font-medium text-primary mb-4">
            Señales emocionales que vivía sin comprender:
          </p>
          
          <ul className="space-y-3">
            {symptoms.map((symptom, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-salmon text-xl mt-0.5">•</span>
                <span className="text-foreground">{symptom}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Storytelling closure */}
        <div className="mt-10 space-y-6 text-lg leading-relaxed">
          <div className="border-l-4 border-salmon pl-5 py-2">
            <p className="text-primary font-medium">
              El ataque de pánico no llegó por estrés.
              <br />
              Llegó por claridad:
            </p>
            <p className="text-xl font-serif italic text-primary mt-2">
              No estaba viviendo… estaba repitiendo.
            </p>
          </div>

          <p>
            No eran "problemas emocionales".
            <br />
            Era un sistema nervioso condicionado por experiencias pasadas que yo no elegí.
          </p>

          <p className="text-lg font-semibold text-primary">
            Era supervivencia.
            <br />
            No falla.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;
