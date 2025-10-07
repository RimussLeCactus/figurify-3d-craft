import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Viewer3D from "@/components/Viewer3D";
import ConfigPanel from "@/components/ConfigPanel";
import PricePreview from "@/components/PricePreview";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export type ConfigOptions = {
  size: "small" | "medium" | "large";
  base: "round" | "square" | "hexagon" | "none";
  material: "pla" | "resin" | "premium";
  finish: "matte" | "glossy" | "metallic";
  engraving: string;
  color: string;
};

const Configurator = () => {
  const navigate = useNavigate();
  const [config, setConfig] = useState<ConfigOptions>({
    size: "medium",
    base: "round",
    material: "resin",
    finish: "matte",
    engraving: "",
    color: "#00D9FF"
  });

  const handleAddToCart = () => {
    // TODO: Implement cart logic
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <Button
          variant="ghost"
          className="mb-6 text-muted-foreground hover:text-foreground"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à l'accueil
        </Button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 3D Viewer */}
          <div className="glass-card p-6 rounded-2xl">
            <h2 className="text-2xl font-display font-bold mb-6 gradient-text">
              Aperçu 3D
            </h2>
            <Viewer3D config={config} />
          </div>

          {/* Configuration Panel */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-6 gradient-text">
                Personnalisation
              </h2>
              <ConfigPanel config={config} setConfig={setConfig} />
            </div>

            {/* Price Preview */}
            <PricePreview config={config} />

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-primary via-accent to-gold hover:opacity-90 smooth-transition text-lg font-semibold"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Ajouter au panier
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Configurator;
