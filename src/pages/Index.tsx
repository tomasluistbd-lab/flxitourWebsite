import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import FleetCard from "@/components/FleetCard";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import heroImg from "@/assets/hero-car.jpg";
import toursImg from "@/assets/tours-portugal.jpg";
import airportImg from "@/assets/airport-transfer.jpg";
import businessImg from "@/assets/business-transfer.jpg";
import weddingImg from "@/assets/events-wedding.jpg";
import fleetEqe from "@/assets/fleet-eqe.jpg";
import fleetSclass from "@/assets/fleet-sclass.jpg";
import fleetVclass from "@/assets/fleet-vclass.jpg";
import fleetEclass from "@/assets/fleet-eclass.jpg";

const Index = () => {
  return (
    <Layout>
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="FLUXITOUR Luxury Transport" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>

        <div className="absolute top-32 left-0 w-full text-center z-20 px-4">
          <p className="text-5xl md:text-7xl font-display font-bold gold-text-gradient italic leading-tight pb-2 mb-12 animate-fade-in">
  "Inspired by the fear of being average"
          </p>
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 z-10 mt-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight mb-2">
              Transportes de luxo
            </h1>
            <h1 className="text-5xl md:text-7xl font-display font-bold gold-text-gradient leading-tight mb-6 pb-2 mb-12">
              em Portugal
            </h1>
            <p className="text-lg text-foreground/80 font-body leading-relaxed mb-8 max-w-lg">
            Definimos a diferença no transporte de luxo, onde a pontualidade, o requinte e as mais exclusivas localizações fundem-se em momentos memoráveis. Na FLUXITOUR©, cada quilómetro é desenhado para superar expectativas, garantindo um serviço de prestígio personalizado para cada pessoa. Da sofisticação de um transfer executivo ao charme eterno dos nossos clássicos, descubra a facilidade de viajar com quem transforma o caminho no seu melhor destino.

            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#booking"
                className="gold-gradient px-8 py-4 text-sm font-semibold tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Reservar Transfer
              </a>
              <Link
                to="/services"
                className="border border-foreground/30 px-8 py-4 text-sm font-semibold tracking-wider uppercase text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Nossos Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card py-6 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs text-muted-foreground font-body tracking-wider uppercase text-center">
            <span>Motorista Privado</span>
            <span className="text-primary">|</span>
            <span>Wi-Fi Gratuito</span>
            <span className="text-primary">|</span>
            <span>Água & Amenities</span>
            <span className="text-primary">|</span>
            <span>Carregador Telemóvel</span>
            <span className="text-primary">|</span>
            <span>Cadeira Criança</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary text-center mb-3">
            O Que Oferecemos
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-4 max-w-3xl mx-auto">
            Modelos adequados a qualquer ocasião, sejam transferes executivos, serviços corporativos, eventos, ou deslocações personalizadas.
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Tours privados, transfers e táxi de aeroporto. Transporte terrestre com classe, elegância e exclusividade. Totalmente segurado e licenciado.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard image={toursImg} title="Tours em Portugal" description="Descubra a beleza de Portugal com experiências de tour personalizadas." />
            <ServiceCard image={airportImg} title="Transfers Aeroporto" description="Serviço seamless de pickup e drop-off em todos os aeroportos portugueses." />
            <ServiceCard image={businessImg} title="Transfers Executivos" description="Serviços de chauffeur profissional para clientes empresariais." />
            <ServiceCard image={weddingImg} title="Eventos & Casamentos" description="Torne o seu dia especial inesquecível com transporte premium." />
          </div>
        </div>
      </section>

      <section className="section-card py-20 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary text-center mb-3">
            A Nossa Frota
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-4">
            Veículos Premium
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Transportamos pessoas em veículos novos, conduzidos por profissionais experientes e qualificados. A segurança é a prioridade.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FleetCard image={fleetEqe} name="Mercedes EQE" type="Sedan Elétrico" passengers="3" luggage="2" />
            <FleetCard image={fleetSclass} name="Mercedes S-Class" type="Sedan Executivo" passengers="3" luggage="2" />
            <FleetCard image={fleetVclass} name="Mercedes V-Class" type="Mini Van" passengers="6-7" luggage="4" />
            <FleetCard image={fleetEclass} name="Mercedes E-Class" type="Sedan Plus" passengers="3" luggage="2" />
          </div>

          <div className="text-center mt-10">
            <Link
              to="/fleet"
              className="border border-primary text-primary px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors inline-block"
            >
              Ver Toda a Frota
            </Link>
          </div>
        </div>
      </section>

      <BookingForm />

      <Testimonials />
    </Layout>
  );
};

export default Index;