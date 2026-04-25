import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";
import logoTransparent from "@/assets/logo-transparent.png";

const Footer = () => {
  const { t } = useTranslation();

  const navLinks = [
    { labelKey: "footer_home", path: "/" },
    { labelKey: "servicos", path: "/services" },
    { labelKey: "frota", path: "/fleet" },
    { labelKey: "blog", path: "/blog" },
    { labelKey: "footer_about", path: "/about" },
    { labelKey: "contacto", path: "/contact" },
  ];

  const serviceLinks = [
    { labelKey: "footer_service_tours", path: "/services" },
    { labelKey: "footer_service_airport", path: "/services" },
    { labelKey: "footer_service_executive", path: "/services" },
    { labelKey: "footer_service_events", path: "/services" },
  ];

  return (
    <footer className="section-dark border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">

          {/* Coluna 1: Info */}
          <div className="flex flex-col">
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t("footer_desc")}
            </p>
            <div className="mt-auto pt-4">
              <img
                src={logoTransparent}
                alt="FLUXITOUR logo"
                className="h-20 w-auto object-contain bg-transparent"
              />
            </div>
          </div>

          {/* Coluna 2: Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">{t("footer_links")}</h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.path + item.labelKey}>
                  <Link to={item.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">{t("footer_services_title")}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.labelKey}>
                  <Link to={s.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t(s.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contacto */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">{t("footer_contact_title")}</h4>
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

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FLUXITOUR®. {t("footer_copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
