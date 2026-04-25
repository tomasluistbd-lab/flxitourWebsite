import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.jpg";
import AdminWidget from "./AdminWidget";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { label: t("home", "Home"), path: "/" },
    { label: t("servicos", "Serviços"), path: "/services" },
    { label: t("frota", "Frota"), path: "/fleet" },
    { label: t("blog", "Blog"), path: "/blog" },
    { label: t("events_nav", "Eventos"), path: "/events" },
    { label: "FAQ", path: "/faq" },
    { label: t("sobre", "Sobre Nós"), path: "/about" },
    { label: t("contacto", "Contacto"), path: "/contact" },
  ];

  const handleBookingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("booking");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleNavClick = (path: string) => {
    if (location.pathname === path) window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const currentLang = i18n.language?.slice(0, 2) || "pt";

  const flags = [
    { code: "pt", src: "https://flagcdn.com/w20/pt.png", alt: "Português" },
    { code: "en", src: "https://flagcdn.com/w20/gb.png", alt: "English" },
    { code: "es", src: "https://flagcdn.com/w20/es.png", alt: "Español" },
    { code: "fr", src: "https://flagcdn.com/w20/fr.png", alt: "Français" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src={logo}
              alt="FLUXITOUR logo"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-display font-bold gold-text-gradient tracking-wider">
              FLUXITOUR
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-[11px] font-body font-medium tracking-widest uppercase transition-colors hover:text-primary whitespace-nowrap ${
                  location.pathname === item.path ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop right actions */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Flags */}
            <div className="flex items-center gap-2 border-r border-border pr-4">
              {flags.map((f) => (
                <button
                  key={f.code}
                  onClick={() => changeLanguage(f.code)}
                  title={f.alt}
                  className={`hover:scale-110 transition-transform ${currentLang === f.code ? "ring-2 ring-primary ring-offset-1 ring-offset-background rounded-sm" : ""}`}
                >
                  <img src={f.src} alt={f.alt} className="w-5 h-auto" />
                </button>
              ))}
            </div>

            <a
              href="tel:+351916822104"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
              +351 916 822 104
            </a>

            <a
              href="/#booking"
              onClick={handleBookingClick}
              className="gold-gradient px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-primary-foreground hover:opacity-95 transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              {t("reservar", "Reservar")}
            </a>

            <ThemeToggle />
            <AdminWidget />
          </div>

          {/* Mobile right — theme + hamburger only */}
          <div className="flex xl:hidden items-center gap-2">
            <ThemeToggle />
            <AdminWidget />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 hover:text-primary transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="xl:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-1">

            {/* Nav links */}
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm font-medium tracking-widest uppercase py-3 border-b border-border/20 transition-colors ${
                  location.pathname === item.path ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Flags */}
            <div className="flex items-center gap-3 pt-4 pb-2">
              {flags.map((f) => (
                <button
                  key={f.code}
                  onClick={() => changeLanguage(f.code)}
                  className={`hover:scale-110 transition-transform ${currentLang === f.code ? "ring-2 ring-primary ring-offset-1 ring-offset-background rounded-sm" : ""}`}
                >
                  <img src={f.src} className="w-6 h-auto" alt={f.alt} />
                </button>
              ))}
            </div>

            {/* Phone */}
            <a
              href="tel:+351916822104"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2"
            >
              <Phone className="w-4 h-4 text-primary" />
              +351 916 822 104
            </a>

            {/* Book button */}
            <a
              href="/#booking"
              onClick={handleBookingClick}
              className="gold-gradient px-6 py-4 text-sm font-bold tracking-widest uppercase text-primary-foreground text-center mt-2 shadow-lg whitespace-nowrap"
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
