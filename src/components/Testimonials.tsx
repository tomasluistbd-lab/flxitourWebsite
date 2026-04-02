const testimonials = [
  {
    text: "Serviço excelente! O motorista foi pontual e muito profissional. O carro estava imaculado. Recomendo vivamente a FLUXITOUR® a quem visite Portugal.",
    name: "Thomas P.",
    country: "Alemanha",
  },
  {
    text: "O nível de serviço foi excecional! Reservámos um tour de dia inteiro e foi perfeito. O nosso motorista conhecia todos os melhores locais.",
    name: "Sofia M.",
    country: "Espanha",
  },
  {
    text: "Transfer do aeroporto foi suave e sem stress. Carro limpo, motorista simpático e preços razoáveis. Vou certamente usar a FLUXITOUR® novamente!",
    name: "Richard N.",
    country: "Reino Unido",
  },
  {
    text: "Experiência maravilhosa do início ao fim. O processo de reserva foi fácil e o serviço superou todas as expectativas. Merci beaucoup!",
    name: "Marie-Claire B.",
    country: "França",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary text-center mb-3">
          Testemunhos
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
          O Que Dizem os Nossos Clientes
        </h2>

        {/* Alterado grid-cols-1 md:grid-cols-2 para mostrar todos em fila em ecrãs grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="section-card border border-border p-8 hover:border-primary/30 transition-colors flex flex-col h-full">
              <p className="text-foreground/90 text-sm leading-relaxed italic mb-6 flex-grow">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-primary-foreground font-semibold text-sm shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.country}</p>
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