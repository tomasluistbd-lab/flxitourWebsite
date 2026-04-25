import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "fluxitour_cookie_consent";

const CookieBanner = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="max-w-4xl mx-auto section-card border border-border shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="w-6 h-6 text-primary shrink-0 mt-0.5 sm:mt-0" />

        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {t("cookie_text")}{" "}
          <a
            href="/contact"
            className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            {t("cookie_privacy")}
          </a>
          .
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-xs font-semibold tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors px-4 py-2 border border-border hover:border-foreground/30"
          >
            {t("cookie_decline")}
          </button>
          <button
            onClick={accept}
            className="gold-gradient text-xs font-bold tracking-wider uppercase text-primary-foreground px-6 py-2 hover:opacity-95 transition-all shadow-md active:scale-95"
          >
            {t("cookie_accept")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
