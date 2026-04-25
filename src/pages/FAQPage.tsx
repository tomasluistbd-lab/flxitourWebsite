import { useState } from "react";
import Layout from "@/components/Layout";
import FAQ from "@/components/FAQ";
import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react";

const FAQPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", question: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`FAQ FLUXITOUR - ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nQuestão:\n${formData.question}`
    );
    window.open(`mailto:fluxitour.geral@outlook.pt?subject=${subject}&body=${body}`, "_blank");
    setFormData({ name: "", email: "", question: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 section-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-3">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">{t("faq_title")}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("faq_page_desc")}</p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQ />

      {/* Contact Form */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Mail className="w-5 h-5 text-primary" />
            <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary">{t("faq_contact_label")}</p>
          </div>
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-3">{t("faq_contact_title")}</h2>
          <p className="text-muted-foreground text-center mb-10">{t("faq_contact_desc")}</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">{t("contact_name")}</label>
                <input
                  type="text"
                  placeholder={t("contact_name")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">{t("faq_contact_question_label")}</label>
              <textarea
                placeholder={t("faq_contact_question_placeholder")}
                rows={5}
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full gold-gradient px-8 py-4 text-sm font-bold tracking-wider uppercase text-primary-foreground hover:opacity-95 transition-all shadow-lg active:scale-[0.98]"
            >
              {t("faq_contact_send")}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
