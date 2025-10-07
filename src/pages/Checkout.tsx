import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Lock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "France"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Stripe payment
    console.log("Processing payment...", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <Button
          variant="ghost"
          className="mb-6 text-muted-foreground hover:text-foreground"
          onClick={() => navigate("/configurator")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la configuration
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Checkout Form */}
          <div className="glass-card p-8 rounded-2xl">
            <h1 className="text-3xl font-display font-bold mb-8 gradient-text">
              Finaliser la commande
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact */}
              <div className="space-y-4">
                <h2 className="text-xl font-display font-semibold">Contact</h2>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="glass-card border-primary/20"
                  />
                </div>
              </div>

              <Separator className="bg-primary/20" />

              {/* Shipping */}
              <div className="space-y-4">
                <h2 className="text-xl font-display font-semibold">Livraison</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="glass-card border-primary/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="glass-card border-primary/20"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Adresse</Label>
                  <Input
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="glass-card border-primary/20"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Ville</Label>
                    <Input
                      id="city"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="glass-card border-primary/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Code postal</Label>
                    <Input
                      id="postalCode"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                      className="glass-card border-primary/20"
                    />
                  </div>
                </div>
              </div>

              <Separator className="bg-primary/20" />

              {/* Payment */}
              <div className="space-y-4">
                <h2 className="text-xl font-display font-semibold flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-accent" />
                  Paiement
                </h2>
                <div className="glass-card p-6 rounded-xl border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-4">
                    Le paiement sécurisé sera traité via Stripe
                  </p>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary via-accent to-gold hover:opacity-90 smooth-transition"
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Payer en toute sécurité
                  </Button>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="glass-card p-8 rounded-2xl h-fit sticky top-24">
            <h2 className="text-2xl font-display font-bold mb-6 gradient-text">
              Récapitulatif
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Figurine personnalisée</span>
                <span className="font-semibold">89.99 €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Livraison standard</span>
                <span className="font-semibold">Gratuite</span>
              </div>
              
              <Separator className="bg-primary/20" />
              
              <div className="flex justify-between text-xl">
                <span className="font-display font-bold">Total</span>
                <span className="font-display font-bold gradient-text">89.99 €</span>
              </div>
              
              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="h-4 w-4 text-accent" />
                  <span>Paiement 100% sécurisé</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Livraison estimée : 2-3 semaines
                </p>
                <p className="text-xs text-muted-foreground">
                  Garantie satisfait ou remboursé 30 jours
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
