import { Mail, Instagram, Twitter, Facebook } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="FigurMy" className="h-10 w-auto" />
              <span className="text-xl font-retro text-primary">
                FigurMy
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformez vos souvenirs en figurines 3D personnalisées ultra-réalistes.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 hover:bg-primary/10 rounded-lg smooth-transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 hover:bg-primary/10 rounded-lg smooth-transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 hover:bg-primary/10 rounded-lg smooth-transition">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => navigate("/configurator")} className="hover:text-accent smooth-transition">
                  Créer une figurine
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-accent smooth-transition">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent smooth-transition">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent smooth-transition">
                  Entreprises
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => navigate("/faq")} className="hover:text-accent smooth-transition">
                  FAQ
                </button>
              </li>
              <li>
                <a href="mailto:support@figurmy.com" className="hover:text-accent smooth-transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent smooth-transition">
                  Guide d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent smooth-transition">
                  Suivi de commande
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-semibold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent smooth-transition">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent smooth-transition">
                  CGV
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent smooth-transition">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent smooth-transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 FigurMy. Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:contact@figurmy.com" className="hover:text-accent smooth-transition">
              contact@figurmy.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
