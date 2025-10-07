import { Upload, Sparkles, Package } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "1. Téléchargez",
      description: "Uploadez une photo de visage ou d'objet en haute qualité"
    },
    {
      icon: Sparkles,
      title: "2. Personnalisez",
      description: "Notre IA génère un modèle 3D que vous pouvez ajuster (taille, couleur, finition)"
    },
    {
      icon: Package,
      title: "3. Recevez",
      description: "Votre figurine est imprimée et livrée chez vous en 2-3 semaines"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et rapide pour donner vie à vos souvenirs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl text-center smooth-transition hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-6 animate-glow-pulse">
                <step.icon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
