import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

type FAQItem = { q: string; a: string };
type FAQCategory = { title: string; items: FAQItem[] };

const FAQ = () => {
  const { t } = useTranslation();
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => setOpenKey((prev) => (prev === key ? null : key));

  const categories: FAQCategory[] = [
    {
      title: t("faq_cat1"),
      items: [
        { q: t("faq_c1_q1"), a: t("faq_c1_a1") },
        { q: t("faq_c1_q2"), a: t("faq_c1_a2") },
        { q: t("faq_c1_q3"), a: t("faq_c1_a3") },
      ],
    },
    {
      title: t("faq_cat2"),
      items: [
        { q: t("faq_c2_q1"), a: t("faq_c2_a1") },
        { q: t("faq_c2_q2"), a: t("faq_c2_a2") },
        { q: t("faq_c2_q3"), a: t("faq_c2_a3") },
      ],
    },
    {
      title: t("faq_cat3"),
      items: [
        { q: t("faq_c3_q1"), a: t("faq_c3_a1") },
        { q: t("faq_c3_q2"), a: t("faq_c3_a2") },
        { q: t("faq_c3_q3"), a: t("faq_c3_a3") },
      ],
    },
    {
      title: t("faq_cat4"),
      items: [
        { q: t("faq_c4_q1"), a: t("faq_c4_a1") },
        { q: t("faq_c4_q2"), a: t("faq_c4_a2") },
      ],
    },
  ];

  return (
    <section className="py-20 section-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary text-center mb-3">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
          {t("faq_title")}
        </h2>

        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <div key={ci}>
              <h3 className="text-sm font-body font-semibold tracking-[0.25em] uppercase text-primary mb-4 pb-2 border-b border-border">
                {cat.title}
              </h3>
              <div className="space-y-1">
                {cat.items.map((item, ii) => {
                  const key = `${ci}-${ii}`;
                  const isOpen = openKey === key;
                  return (
                    <div key={key} className="border border-border hover:border-primary/30 transition-colors">
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left group"
                      >
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5">
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
