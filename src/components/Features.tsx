import { Cpu, Palette, Eye, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Cpu,
      title: "IA de pointe",
      description: "Génération automatique de modèles 3D ultra-précis à partir d'une simple photo"
    },
    {
      icon: Palette,
      title: "Personnalisation totale",
      description: "Choisissez la taille, le matériau, la couleur, la finition et ajoutez une gravure unique"
    },
    {
      icon: Eye,
      title: "Prévisualisation 3D",
      description: "Visualisez votre figurine sous tous les angles avant de commander, avec support AR"
    },
    {
      icon: Shield,
      title: "Qualité premium",
      description: "Impression 3D haute résolution, finitions professionnelles, garantie satisfait ou remboursé"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
            Technologie de pointe
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une expérience premium du début à la fin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl smooth-transition hover:scale-105 glow-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-background mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
