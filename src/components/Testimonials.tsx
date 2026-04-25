import { useTranslation } from "react-i18next";

const testimonials = [
  {
    text: "Serviço excelente! O motorista foi pontual e muito profissional. O carro estava imaculado. Recomendo vivamente a FLUXITOUR® a quem visite Portugal.",
    name: "Thomas P.",
    countryKey: "country_germany",
  },
  {
    text: "O nível de serviço foi excecional! Reservámos um tour de dia inteiro e foi perfeito. O nosso motorista conhecia todos os melhores locais.",
    name: "Sofia M.",
    countryKey: "country_spain",
  },
  {
    text: "Transfer do aeroporto foi suave e sem stress. Carro limpo, motorista simpático e preços razoáveis. Vou certamente usar a FLUXITOUR® novamente!",
    name: "Richard N.",
    countryKey: "country_uk",
  },
  {
    text: "Experiência maravilhosa do início ao fim. O processo de reserva foi fácil e o serviço superou todas as expectativas. Merci beaucoup!",
    name: "Marie-Claire B.",
    countryKey: "country_france",
  },
];

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary text-center mb-3">
          {t("testimonials_label")}
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
          {t("testimonials_title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="section-card border border-border p-8 hover:border-primary/30 transition-colors flex flex-col h-full">
              <p className="text-foreground/90 text-sm leading-relaxed italic mb-6 flex-grow">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-primary-foreground font-semibold text-sm shrink-0">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{t(testimonial.countryKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
