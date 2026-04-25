import { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xlgowvre", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Contacto FLUXITOUR - ${formData.name}`,
          nome: formData.name,
          email: formData.email,
          mensagem: formData.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout>
      <section className="py-20 section-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-3">{t("contact_label")}</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">{t("contact_title")}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("contact_subtitle")}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">{t("contact_form_title")}</h2>
              <p className="text-muted-foreground mb-8">{t("contact_form_desc")}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder={t("contact_name")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                  required
                />
                <textarea
                  placeholder={t("contact_message")}
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground resize-none"
                  required
                />
                {status === "success" && (
                  <p className="text-emerald-400 text-sm border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-center">
                    Mensagem enviada com sucesso! Entraremos em contacto brevemente.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm border border-red-500/30 bg-red-500/10 px-4 py-3 text-center">
                    Ocorreu um erro. Tente novamente ou contacte-nos directamente por email.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="gold-gradient px-8 py-4 text-sm font-semibold tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {status === "sending" ? "A enviar..." : t("contact_send")}
                </button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-8">{t("contact_available")}</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">FLUXITOUR®</h3>
                  <p className="text-sm text-muted-foreground">Portugal</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">{t("contact_call_label")}</h4>
                  <a href="tel:+351916822104" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    +351 916 822 104
                  </a>
                </div>

                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">{t("contact_email_label")}</h4>
                  <a href="mailto:fluxitour.geral@outlook.pt" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    fluxitour.geral@outlook.pt
                  </a>
                </div>

                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">{t("contact_location_label")}</h4>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>Portugal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
