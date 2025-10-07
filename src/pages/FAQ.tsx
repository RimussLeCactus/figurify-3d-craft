import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Comment fonctionne la création d'une figurine personnalisée ?",
      answer: "Il suffit de télécharger une photo, notre IA génère automatiquement un modèle 3D que vous pouvez ensuite personnaliser (taille, matériau, finition, couleur). Une fois validé, votre figurine est imprimée et livrée chez vous en 2-3 semaines."
    },
    {
      question: "Quels types de photos puis-je utiliser ?",
      answer: "Nous acceptons des photos de visage (portraits nets, face ou 3/4) et des photos d'objets. Pour de meilleurs résultats, privilégiez des images haute résolution, bien éclairées et sur fond neutre."
    },
    {
      question: "Combien de temps prend la fabrication ?",
      answer: "La génération du modèle 3D est instantanée. Une fois votre commande validée, la fabrication et la livraison prennent entre 2 et 3 semaines selon votre localisation et le matériau choisi."
    },
    {
      question: "Quels matériaux sont disponibles ?",
      answer: "Nous proposons trois options : PLA Standard (écologique et durable), Résine (détails ultra-précis) et Premium (qualité professionnelle avec finitions haut de gamme)."
    },
    {
      question: "Puis-je modifier mon modèle 3D après génération ?",
      answer: "Oui ! Notre configurateur interactif vous permet d'ajuster la pose, la taille, le socle, les couleurs, la finition et même d'ajouter une gravure personnalisée avant de valider votre commande."
    },
    {
      question: "Proposez-vous des retouches manuelles ?",
      answer: "Absolument. Si le modèle généré automatiquement nécessite des ajustements, notre équipe peut effectuer des retouches manuelles sur demande (coût additionnel selon la complexité)."
    },
    {
      question: "Quelle est votre politique de retour ?",
      answer: "Nous offrons une garantie satisfait ou remboursé de 30 jours. Si votre figurine ne correspond pas à vos attentes, contactez-nous pour un remboursement ou un remplacement gratuit."
    },
    {
      question: "Comment puis-je visualiser ma figurine avant de l'acheter ?",
      answer: "Notre viewer 3D interactif vous permet de voir votre figurine sous tous les angles, avec zoom et rotation. Vous pouvez même utiliser la fonction AR pour la visualiser dans votre environnement réel (smartphones compatibles)."
    },
    {
      question: "Les frais de livraison sont-ils inclus ?",
      answer: "Oui, la livraison standard est offerte pour toutes les commandes. Des options de livraison express sont disponibles moyennant supplément."
    },
    {
      question: "Puis-je commander plusieurs figurines en une fois ?",
      answer: "Oui, vous pouvez ajouter plusieurs figurines à votre panier. Des remises sont appliquées automatiquement à partir de 3 figurines commandées."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <HelpCircle className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold text-accent">FAQ</span>
            </div>
            <h1 className="text-5xl font-display font-bold mb-6 gradient-text">
              Questions fréquentes
            </h1>
            <p className="text-xl text-muted-foreground">
              Tout ce que vous devez savoir sur FigurMy
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl animate-fade-in">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-primary/20 rounded-lg px-6 smooth-transition hover:border-accent/50"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-display font-bold mb-4 gradient-text">
              Vous avez d'autres questions ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Notre équipe est là pour vous aider
            </p>
            <a 
              href="mailto:support@figurmy.com"
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold hover:opacity-90 smooth-transition"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
