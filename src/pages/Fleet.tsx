import Layout from "@/components/Layout";
import FleetCard from "@/components/FleetCard";
import BookingForm from "@/components/BookingForm";

// Imports das imagens existentes
import fleetEqe from "@/assets/fleet-eqe.jpg";
import fleetSclass from "@/assets/fleet-sclass.jpg";
import fleetVclass from "@/assets/fleet-vclass.jpg";
import fleetEclass from "@/assets/fleet-eclass.jpg";
import fleetSprinter from "@/assets/fleet-sprinter.jpg";

// IMPORT DA TUA IMAGEM ORIGINAL (Mercedes Clássico)
import fleetClassic from "@/assets/image_7.png"; 

const vehicles = [
  { 
    image: fleetEqe, 
    name: "Mercedes EQE", 
    type: "Sedan Elétrico", 
    passengers: "3", 
    luggage: "2" 
  },
  { 
    image: fleetSclass, 
    name: "Mercedes S-Class", 
    type: "Sedan Executivo", 
    passengers: "2", 
    luggage: "2" 
  },
  { 
    image: fleetEclass, 
    name: "Mercedes E-Class", 
    type: "Sedan Plus", 
    passengers: "3", 
    luggage: "2" 
  },
  { 
    image: fleetVclass, 
    name: "Mercedes V-Class", 
    type: "Mini Van", 
    passengers: "6-7", 
    luggage: "4" 
  },
  { 
    image: fleetSprinter, 
    name: "Mercedes Sprinter", 
    type: "Minibus", 
    passengers: "8-15", 
    luggage: "5" 
  },
  { 
    image: fleetClassic, 
    name: "Mercedes 190", 
    type: "Veículos Clássicos para Casamentos", 
    passengers: "2", 
    luggage: "2",
    imageClassName: "scale-[1.34] object-[center_55%]" 
  },
];

const Fleet = () => {
  return (
    <Layout>
      {/* Secção de Cabeçalho */}
      <section className="py-20 section-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            A Nossa Frota
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Frota Premium
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Redefinimos a opulência com um compromisso consciente entre a modernidade e a tradição. 
            Dispomos de soluções para transferes executivos e veículos exclusivos para o seu evento.
          </p>
        </div>
      </section>

      {/* Grelha de Veículos - 6 Caixas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((v) => (
              <FleetCard key={v.name} {...v} />
            ))}
          </div>

          {/* Banner de Informação Adicional */}
          <div className="section-card border border-border p-10 mt-16 text-center shadow-sm">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
              Serviços exclusivos de chauffeur para tours e cerimónias.
            </h3>
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground font-body">
              <a href="tel:+351916822104" className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="text-primary text-lg">📞</span> +351 916 822 104
              </a>
              <a href="mailto:fluxitour.geral@outlook.pt" className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="text-primary text-lg">✉️</span> fluxitour.geral@outlook.pt
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Reserva / Orçamento Instantâneo */}
      <BookingForm />
    </Layout>
  );
};

export default Fleet;