import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Serviços", path: "/services" },
  { label: "Frota", path: "/fleet" },
  { label: "Blog", path: "/blog" },
  { label: "Sobre Nós", path: "/about" },
  { label: "Contacto", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Função para lidar com o clique no botão Reservar
  const handleBookingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Se estivermos na Home, fazemos scroll suave
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("booking");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Fecha o menu mobile se estiver aberto
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo e Nome */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="FLUXITOUR logo" 
              className="h-12 w-auto object-contain bg-transparent" 
            />
            <span className="text-2xl font-display font-bold gold-text-gradient tracking-wider">
              FLUXITOUR
            </span>
          </Link>

          {/* Navegação Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-body font-medium tracking-widest uppercase transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contacto e Botão Reservar (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+351916822104" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mr-2"
            >
              <Phone className="w-4 h-4 text-primary" />
              +351 916 822 104
            </a>
            
            {/* O NOVO BOTÃO QUE APONTA PARA O FORMULÁRIO */}
            <a
              href="/#booking"
              onClick={handleBookingClick}
              className="gold-gradient px-6 py-2.5 text-sm font-semibold tracking-wider uppercase text-primary-foreground hover:opacity-95 transition-all shadow-md active:scale-95"
            >
              Reservar
            </a>
          </div>

          {/* Toggle Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Navegação Mobile */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in-down">
          <div className="container mx-auto px-4 py-8 flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium tracking-widest uppercase transition-colors py-2 border-b border-border/10 ${
                  location.pathname === item.path ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Botão Reservar Mobile */}
            <a
              href="/#booking"
              onClick={handleBookingClick}
              className="gold-gradient px-6 py-4 text-sm font-bold tracking-widest uppercase text-primary-foreground text-center mt-4 shadow-lg"
            >
              Reservar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;