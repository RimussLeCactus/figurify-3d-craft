import { ConfigOptions } from "@/pages/Configurator";
import { Euro } from "lucide-react";

type PricePreviewProps = {
  config: ConfigOptions;
};

const PricePreview = ({ config }: PricePreviewProps) => {
  const calculatePrice = () => {
    let basePrice = 49.99;
    
    // Size
    if (config.size === "large") basePrice += 20;
    if (config.size === "small") basePrice -= 10;
    
    // Material
    if (config.material === "resin") basePrice += 15;
    if (config.material === "premium") basePrice += 35;
    
    // Finish
    if (config.finish === "glossy") basePrice += 10;
    if (config.finish === "metallic") basePrice += 20;
    
    // Base
    if (config.base !== "none") basePrice += 8;
    
    // Engraving
    if (config.engraving.trim()) basePrice += 12;
    
    return basePrice.toFixed(2);
  };

  return (
    <div className="glass-card p-6 rounded-2xl glow-border">
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-primary/20">
          <span className="text-muted-foreground">Configuration</span>
          <span className="font-display font-semibold capitalize">
            {config.size === "small" ? "Petit" : config.size === "medium" ? "Moyen" : "Grand"}
          </span>
        </div>
        
        <div className="flex items-center justify-between pb-4 border-b border-primary/20">
          <span className="text-muted-foreground">Matériau</span>
          <span className="font-display font-semibold capitalize">
            {config.material === "pla" ? "PLA" : config.material === "resin" ? "Résine" : "Premium"}
          </span>
        </div>
        
        {config.engraving && (
          <div className="flex items-center justify-between pb-4 border-b border-primary/20">
            <span className="text-muted-foreground">Gravure</span>
            <span className="text-xs text-accent">+ 12.00 €</span>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            <Euro className="h-6 w-6 text-gold" />
            <span className="text-2xl font-display font-bold gradient-text">
              {calculatePrice()} €
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            TVA incluse
          </span>
        </div>
        
        <p className="text-xs text-muted-foreground text-center pt-2">
          Livraison estimée : 2-3 semaines
        </p>
      </div>
    </div>
  );
};

export default PricePreview;
