import { User, Briefcase } from "lucide-react";

interface FleetCardProps {
  image: string;
  name: string;
  type: string;
  passengers: string;
  luggage: string;
  // ADICIONADO: Nova propriedade opcional para classes de imagem personalizadas
  imageClassName?: string; 
}

const FleetCard = ({ image, name, type, passengers, luggage, imageClassName }: FleetCardProps) => {
  return (
    <div className="section-card border border-border group overflow-hidden flex flex-col h-full animate-fade-in-up">
      {/* Contentor da Imagem */}
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <img 
          src={image} 
          alt={`${name} - FLUXITOUR Frota`} 
          // Aplica classes específicas se existirem, senão usa o padrão "object-center"
          // O zoom padrão "group-hover:scale-105" é mantido
          className={`object-cover h-full w-full transition-transform duration-500 ${imageClassName || "object-center"} group-hover:scale-110`}
          loading="lazy"
        />
      </div>

      {/* Detalhes do Veículo */}
      <div className="p-8 flex-grow flex flex-col bg-background">
        <p className="text-xs font-body font-medium uppercase tracking-widest text-primary mb-2">
          {type}
        </p>
        <h3 className="text-2xl font-display font-semibold text-foreground mb-6 flex-grow leading-tight">
          {name}
        </h3>
        
        {/* Ícones de Capacidade */}
        <div className="flex items-center gap-6 border-t border-border pt-6 mt-auto">
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground font-body">
            <User className="w-4 h-4 text-primary" strokeWidth={1.5} />
            <span>{passengers} Passageiros</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground font-body">
            <Briefcase className="w-4 h-4 text-primary" strokeWidth={1.5} />
            <span>{luggage} Malas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetCard;