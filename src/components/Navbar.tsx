import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { label: t("home", "Home"), path: "/" },
    { label: t("servicos", "Serviços"), path: "/services" },
    { label: t("frota", "Frota"), path: "/fleet" },
    { label: t("blog", "Blog"), path: "/blog" },
    { label: t("events_nav", "EVENTOS"), path: "/events" },
    { label: "FAQ", path: "/faq" },
    { label: t("sobre", "Sobre Nós"), path: "/about" },
    { label: t("contacto", "Contacto"), path: "/contact" },
  ];

  const handleBookingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("booking");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const currentLang = i18n.language?.slice(0, 2) || "pt";

  const flags = [
    { code: "pt", src: "https://flagcdn.com/w20/pt.png", alt: "Português" },
    { code: "en", src: "https://flagcdn.com/w20/gb.png", alt: "English" },
    { code: "es", src: "https://flagcdn.com/w20/es.png", alt: "Español" },
    { code: "fr", src: "https://flagcdn.com/w20/fr.png", alt: "Français" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo e Nome */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="FLUXITOUR logo"
              className="h-10 md:h-12 w-auto object-contain bg-transparent"
            />
            <span className="text-xl md:text-2xl font-display font-bold gold-text-gradient tracking-wider">
              FLUXITOUR
            </span>
          </Link>

          {/* Navegação Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-xs font-body font-medium tracking-widest uppercase transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Tradutor, Contacto e Reservar */}
          <div className="hidden lg:flex items-center gap-6">

            {/* Seletor de Idiomas */}
            <div className="flex items-center gap-3 mr-2 border-r border-border pr-6">
              {flags.map((f) => (
                <button
                  key={f.code}
                  onClick={() => changeLanguage(f.code)}
                  title={f.alt}
                  className={`hover:scale-110 transition-transform ${currentLang === f.code ? "ring-2 ring-primary ring-offset-1 ring-offset-background" : ""}`}
                >
                  <img src={f.src} alt={f.alt} className="w-5 h-auto" />
                </button>
              ))}
            </div>

            <a
              href="tel:+351916822104"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              +351 916 822 104
            </a>

            <a
              href="/#booking"
              onClick={handleBookingClick}
              className="gold-gradient px-6 py-2.5 text-xs font-bold tracking-wider uppercase text-primary-foreground hover:opacity-95 transition-all shadow-md active:scale-95"
            >
              {t("reservar", "Reservar")}
            </a>
          </div>

          {/* Toggle Mobile */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Tradutor Rápido Mobile */}
            <div className="flex gap-2">
              {flags.map((f) => (
                <button
                  key={f.code}
                  onClick={() => changeLanguage(f.code)}
                  className={`transition-transform hover:scale-110 ${currentLang === f.code ? "ring-2 ring-primary ring-offset-1 ring-offset-background" : ""}`}
                >
                  <img src={f.src} className="w-5 h-auto" alt={f.alt} />
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
                onClick={() => { handleNavClick(item.path); setIsOpen(false); }}
                className={`text-base font-medium tracking-widest uppercase transition-colors py-2 border-b border-border/10 ${
                  location.pathname === item.path ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <a
              href="/#booking"
              onClick={handleBookingClick}
              className="gold-gradient px-6 py-4 text-sm font-bold tracking-widest uppercase text-primary-foreground text-center mt-4 shadow-lg"
            >
              {t("reservar", "Reservar Agora")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
