import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { ConfigOptions } from "@/pages/Configurator";
import { Sparkles, Box, Palette, Layers } from "lucide-react";

type ConfigPanelProps = {
  config: ConfigOptions;
  setConfig: (config: ConfigOptions) => void;
};

const ConfigPanel = ({ config, setConfig }: ConfigPanelProps) => {
  const updateConfig = (key: keyof ConfigOptions, value: any) => {
    setConfig({ ...config, [key]: value });
  };

  const colors = [
    { name: "Cyan", value: "#00D9FF" },
    { name: "Or", value: "#FFD700" },
    { name: "Blanc", value: "#FFFFFF" },
    { name: "Noir", value: "#1a1a2e" },
    { name: "Rose", value: "#FF006E" },
    { name: "Violet", value: "#8338EC" }
  ];

  return (
    <div className="space-y-8">
      {/* Size */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Box className="h-5 w-5 text-accent" />
          <Label className="text-base font-semibold">Taille</Label>
        </div>
        <RadioGroup value={config.size} onValueChange={(v) => updateConfig("size", v)}>
          <div className="grid grid-cols-3 gap-3">
            {["small", "medium", "large"].map((size) => (
              <label key={size} className="cursor-pointer">
                <RadioGroupItem value={size} id={size} className="sr-only peer" />
                <div className="glass-card p-4 rounded-lg text-center smooth-transition peer-data-[state=checked]:border-accent peer-data-[state=checked]:glow-border">
                  <p className="text-sm capitalize">{size === "small" ? "Petit" : size === "medium" ? "Moyen" : "Grand"}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {size === "small" ? "10cm" : size === "medium" ? "15cm" : "20cm"}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Base */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-accent" />
          <Label className="text-base font-semibold">Socle</Label>
        </div>
        <RadioGroup value={config.base} onValueChange={(v) => updateConfig("base", v)}>
          <div className="grid grid-cols-2 gap-3">
            {["round", "square", "hexagon", "none"].map((base) => (
              <label key={base} className="cursor-pointer">
                <RadioGroupItem value={base} id={base} className="sr-only peer" />
                <div className="glass-card p-4 rounded-lg text-center smooth-transition peer-data-[state=checked]:border-accent peer-data-[state=checked]:glow-border">
                  <p className="text-sm capitalize">
                    {base === "round" ? "Rond" : base === "square" ? "Carré" : base === "hexagon" ? "Hexagone" : "Sans"}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Material */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-accent" />
          <Label className="text-base font-semibold">Matériau</Label>
        </div>
        <RadioGroup value={config.material} onValueChange={(v) => updateConfig("material", v)}>
          <div className="space-y-2">
            {[
              { value: "pla", label: "PLA Standard", desc: "Écologique et durable" },
              { value: "resin", label: "Résine", desc: "Détails ultra-précis" },
              { value: "premium", label: "Premium", desc: "Qualité professionnelle" }
            ].map((mat) => (
              <label key={mat.value} className="cursor-pointer block">
                <RadioGroupItem value={mat.value} id={mat.value} className="sr-only peer" />
                <div className="glass-card p-4 rounded-lg smooth-transition peer-data-[state=checked]:border-accent peer-data-[state=checked]:glow-border">
                  <p className="text-sm font-medium">{mat.label}</p>
                  <p className="text-xs text-muted-foreground">{mat.desc}</p>
                </div>
              </label>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Finish */}
      <div className="space-y-3">
        <Label className="text-base font-semibold">Finition</Label>
        <RadioGroup value={config.finish} onValueChange={(v) => updateConfig("finish", v)}>
          <div className="grid grid-cols-3 gap-3">
            {["matte", "glossy", "metallic"].map((finish) => (
              <label key={finish} className="cursor-pointer">
                <RadioGroupItem value={finish} id={finish} className="sr-only peer" />
                <div className="glass-card p-4 rounded-lg text-center smooth-transition peer-data-[state=checked]:border-accent peer-data-[state=checked]:glow-border">
                  <p className="text-sm capitalize">
                    {finish === "matte" ? "Mat" : finish === "glossy" ? "Brillant" : "Métallique"}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Color */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Palette className="h-5 w-5 text-accent" />
          <Label className="text-base font-semibold">Couleur</Label>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => updateConfig("color", color.value)}
              className={`w-full aspect-square rounded-lg smooth-transition ${
                config.color === color.value ? "ring-2 ring-accent ring-offset-2 ring-offset-background scale-110" : "hover:scale-105"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Engraving */}
      <div className="space-y-3">
        <Label htmlFor="engraving" className="text-base font-semibold">
          Gravure personnalisée (optionnel)
        </Label>
        <Input
          id="engraving"
          placeholder="Ex: Nom, date, message..."
          value={config.engraving}
          onChange={(e) => updateConfig("engraving", e.target.value)}
          maxLength={30}
          className="glass-card border-primary/20 focus:border-accent"
        />
        <p className="text-xs text-muted-foreground">
          {config.engraving.length}/30 caractères
        </p>
      </div>
    </div>
  );
};

export default ConfigPanel;
