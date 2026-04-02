import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import BookingForm from "@/components/BookingForm";
import toursImg from "@/assets/tours-portugal.jpg";
import airportImg from "@/assets/airport-transfer.jpg";
import businessImg from "@/assets/business-transfer.jpg";
import weddingImg from "@/assets/events-wedding.jpg";

const services = [
  {
    title: "Tours em Portugal",
    description: "Tours de Lisboa a Sintra ou Arrábida. Conheça Évora e a bela região do Alentejo. Suba ao norte até ao Porto e conheça o rio Douro. Não se esqueça da costa oeste portuguesa, das suas praias incríveis e tantas maravilhas. Desfrute também da nossa gastronomia e vinhos.",
    image: toursImg,
  },
  {
    title: "Transfers Aeroporto",
    description: "Serviço seamless de pickup e drop-off em todos os aeroportos portugueses. Monitorização de voos em tempo real, serviço meet & greet, e assistência com bagagem incluída em todos os transfers.",
    image: airportImg,
  },
  {
    title: "Transfers Executivos",
    description: "Serviços profissionais de chauffeur para clientes empresariais e executivos. Wi-Fi, carregadores de telemóvel e água à disposição. Confidencialidade e pontualidade garantidas.",
    image: businessImg,
  },
  {
    title: "Eventos & Casamentos",
    description: "Torne o seu dia especial inesquecível com o nosso transporte premium para eventos. Decoração de veículos personalizada, coordenação de eventos no local e serviço impecável.",
    image: weddingImg,
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 section-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-3">Serviços</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Os Nossos Serviços</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          Desde um transfer pontual até aos roteiros mais exclusivos por Portugal, transformamos cada viagem numa experiência de luxo à medida dos teus desejos. Onde a sua imaginação termina, a nossa excelência começa!          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {services.map((s) => (
              <ServiceCard key={s.title} image={s.image} title={s.title} description={s.description} link="/services" />
            ))}
          </div>

          {/* Detailed sections */}
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center mb-20 last:mb-0`}
            >
              <div className="lg:w-1/2">
                <img src={s.image} alt={s.title} className="w-full h-80 object-cover" loading="lazy" width={800} height={800} />
              </div>
              <div className="lg:w-1/2">
                <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-2">Explorar</p>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BookingForm />
    </Layout>
  );
};

export default Services;
