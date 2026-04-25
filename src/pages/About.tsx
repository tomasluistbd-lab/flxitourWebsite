import Layout from "@/components/Layout";
import Testimonials from "@/components/Testimonials";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/hero-car.jpg";
import { Search, Target, TreeDeciduous, Clock, ShieldCheck, MapPinned } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Search, titleKey: "feat_professionalism_title", descKey: "feat_professionalism_desc" },
    { icon: Target, titleKey: "feat_comfort_title", descKey: "feat_comfort_desc" },
    { icon: TreeDeciduous, titleKey: "feat_sustainability_title", descKey: "feat_sustainability_desc" },
    { icon: Clock, titleKey: "feat_flexibility_title", descKey: "feat_flexibility_desc" },
    { icon: ShieldCheck, titleKey: "feat_safety_title", descKey: "feat_safety_desc" },
    { icon: MapPinned, titleKey: "feat_exclusivity_title", descKey: "feat_exclusivity_desc" },
  ];

  return (
    <Layout>
      <section className="py-20 section-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-3">{t("about_label")}</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">FLUXITOUR®</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto italic">
            "Inspired by the fear of being average"
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            {t("about_tagline")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="lg:w-1/2">
              <img
                src={heroImg}
                alt="FLUXITOUR Luxury Fleet"
                className="w-full h-[450px] object-cover rounded-sm shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">{t("about_history_title")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("about_history_p1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("about_history_p2")}
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-3">{t("about_values_label")}</p>
            <h2 className="text-3xl font-display font-bold text-foreground">{t("about_values_title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((f) => (
              <div key={f.titleKey} className="section-card border border-border p-10 hover:border-primary/40 transition-all group flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-primary-foreground shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <f.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">{t(f.titleKey)}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{t(f.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </Layout>
  );
};

export default About;
