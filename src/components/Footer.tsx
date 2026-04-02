import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logoTransparent from "@/assets/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          
          {/* Coluna 1: Info e Logótipo por baixo */}
          <div className="flex flex-col">
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transportes de luxo em Portugal. Conforto, excelençia e profissionalismo. Inspirados pelo medo de ser medianos.
            </p>
            <div className="mt-auto pt-4">
              <img 
                src={logoTransparent} 
                alt="FLUXITOUR logo" 
                className="h-20 w-auto object-contain bg-transparent" 
              />
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Serviços", path: "/services" },
                { label: "Frota", path: "/fleet" },
                { label: "Blog", path: "/blog" },
                { label: "Sobre Nós", path: "/about" },
                { label: "Contacto", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-3">
              {["Tours em Portugal", "Transfers Aeroporto", "Transfers Executivos", "Eventos & Casamentos"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contacto e Redes Sociais */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1 shrink-0" />
                <a href="tel:+351916822104" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                  +351 916 822 104
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-1 shrink-0" />
                <a href="mailto:fluxitour.geral@outlook.pt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  fluxitour.geral@outlook.pt
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span className="text-sm text-muted-foreground">Portugal</span>
              </li>
              
              {/* Ícones Redes Sociais */}
              <li className="pt-2 flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/fluxitour/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/fluxitour/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Final */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FLUXITOUR®. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;