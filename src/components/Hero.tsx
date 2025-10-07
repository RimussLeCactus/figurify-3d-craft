import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ top: '10%', left: '10%' }} />
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ bottom: '10%', right: '10%', animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full animate-glow-pulse">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-sm font-semibold text-accent">Technologie IA de pointe</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Créez votre figurine{" "}
            <span className="gradient-text">3D personnalisée</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transformez une simple photo en une figurine ultra-réaliste imprimée en 3D. 
            Technologie premium, rendu exceptionnel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => navigate("/configurator")}
              className="bg-gradient-to-r from-primary via-accent to-gold hover:opacity-90 smooth-transition text-lg font-semibold group"
            >
              <Upload className="mr-2 h-5 w-5 group-hover:scale-110 smooth-transition" />
              Créer ma figurine
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate("/faq")}
              className="border-primary/30 hover:border-accent smooth-transition text-lg"
            >
              Voir des exemples
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
              <span>Livraison 2-3 semaines</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
              <span>Qualité premium garantie</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
              <span>Satisfait ou remboursé</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
