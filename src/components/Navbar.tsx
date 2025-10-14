import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Créer", path: "/configurator" },
    { name: "FAQ", path: "/faq" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-3 smooth-transition hover:opacity-80"
          >
            <img src={logo} alt="FigurMy" className="h-16 w-auto" />
            <span className="text-xl font-retro text-accent hidden sm:block">
              FigurMy
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`smooth-transition ${
                  isActive(link.path)
                    ? "text-accent font-semibold"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button 
              onClick={() => navigate("/configurator")}
              variant="premium"
              className="font-semibold"
            >
              Commencer
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg smooth-transition"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  navigate(link.path);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg smooth-transition ${
                  isActive(link.path)
                    ? "bg-accent/10 text-accent font-semibold"
                    : "hover:bg-primary/10"
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button 
              onClick={() => {
                navigate("/configurator");
                setIsOpen(false);
              }}
              variant="premium"
              className="w-full font-semibold"
            >
              Commencer
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
