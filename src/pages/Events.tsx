import { useState } from "react";
import Layout from "@/components/Layout";
import { useTranslation } from "react-i18next";
import { CalendarDays, MapPin, Tag } from "lucide-react";

type Category = "music" | "sports" | "cultural" | "religious" | "cinema" | "technology" | "motor";

interface Event {
  name: string;
  date: string;
  location: string;
  category: Category;
  description: string;
}

const events: Event[] = [
  {
    name: "Indie Lisbon – International Film Festival",
    date: "30 Abr 2026",
    location: "Lisboa",
    category: "cinema",
    description: "Festival de cinema independente internacional, trazendo a Lisboa produções alternativas e inovadoras de todo o mundo.",
  },
  {
    name: "Somersby Out Jazz",
    date: "1 Mai 2026",
    location: "Oeiras, Lisboa",
    category: "music",
    description: "Concertos de jazz ao ar livre em Oeiras, numa atmosfera relaxada e sofisticada junto ao rio.",
  },
  {
    name: "Peregrinação a Fátima",
    date: "12 Mai 2026",
    location: "Fátima, Santarém",
    category: "religious",
    description: "A maior peregrinação religiosa de Portugal, reunindo centenas de milhares de peregrinos de todo o mundo no Santuário de Fátima.",
  },
  {
    name: "WRC Rally de Portugal",
    date: "14 Mai 2026",
    location: "Matosinhos / Fafe",
    category: "motor",
    description: "Etapa portuguesa do Campeonato Mundial de Rali, com espetaculares especiais cronometradas pelo norte de Portugal.",
  },
  {
    name: "Bad Bunny in Lisbon – World Tour",
    date: "26 Mai 2026",
    location: "Lisboa",
    category: "music",
    description: "O fenómeno mundial do reggaeton e trap traz a Lisboa a sua tour global, prometendo um espetáculo único e inesquecível.",
  },
  {
    name: "Arco Lisboa – International Contemporary Art Fair",
    date: "28 Mai 2026",
    location: "Lisboa",
    category: "cultural",
    description: "A maior feira de arte contemporânea de Portugal, reunindo galerias e artistas de renome internacional na capital.",
  },
  {
    name: "LISB-ON 2026",
    date: "1 Jun 2026",
    location: "Lisboa",
    category: "music",
    description: "Festival de música eletrónica e cultura urbana em Lisboa, com DJ sets e artistas de topo da cena internacional.",
  },
  {
    name: "Rock in Rio Lisboa 2026",
    date: "Jun 2026",
    location: "Parque da Bela Vista, Lisboa",
    category: "music",
    description: "Um dos maiores festivais de música do mundo, com palcos repletos de artistas internacionais de topo durante vários dias inesquecíveis.",
  },
  {
    name: "Primavera Sound Porto",
    date: "11 Jun 2026",
    location: "Porto",
    category: "music",
    description: "A edição portuense do icónico festival de Barcelona, com uma programação eclética de música independente e alternativa.",
  },
  {
    name: "Super Bock Super Rock",
    date: "Jul 2026",
    location: "Meco, Setúbal",
    category: "music",
    description: "Festival de verão com grandes nomes da música internacional, numa localização costeira deslumbrante.",
  },
  {
    name: "AGEAS Cool Jazz Festival",
    date: "Jul 2026",
    location: "Cascais",
    category: "music",
    description: "Festival de jazz premium em Cascais, com concertos ao ar livre num ambiente sofisticado à beira-mar.",
  },
  {
    name: "Mirpuri Foundation Sailing Trophy",
    date: "3 Jul 2026",
    location: "Cascais",
    category: "sports",
    description: "Regata internacional de vela em Cascais, numa das baías mais premiadas do mundo para a prática náutica.",
  },
  {
    name: "NOS Alive",
    date: "9 Jul 2026",
    location: "Passeio Marítimo de Algés, Lisboa",
    category: "music",
    description: "Um dos festivais de verão mais icónicos de Portugal, à beira do Tejo, com uma programação eclética e artistas de renome mundial.",
  },
  {
    name: "Millennium Estoril Open",
    date: "18 Jul 2026",
    location: "Cascais / Estoril",
    category: "sports",
    description: "O maior torneio de ténis em Portugal, realizado em Cascais, evento de prestígio da categoria ATP.",
  },
  {
    name: "Golf in Portugal Invitational – Vilamoura",
    date: "31 Jul 2026",
    location: "Vilamoura, Algarve",
    category: "sports",
    description: "Torneio de golfe de alto nível em Vilamoura, um dos destinos de golfe mais exclusivos da Europa.",
  },
  {
    name: "Gulbenkian Jazz em Agosto",
    date: "Ago 2026",
    location: "Lisboa",
    category: "music",
    description: "Festival de jazz nos jardins da Fundação Gulbenkian em Lisboa, uma das experiências culturais mais requintadas do verão português.",
  },
  {
    name: "Festival Paredes de Coura",
    date: "12 Ago 2026",
    location: "Paredes de Coura, Viana do Castelo",
    category: "music",
    description: "Festival de música no norte de Portugal, numa localização natural única à beira do rio Coura.",
  },
  {
    name: "MOTELx – Lisbon International Horror Film Festival",
    date: "Set 2026",
    location: "Lisboa",
    category: "cinema",
    description: "O maior festival de cinema de terror da Península Ibérica, com estreias mundiais e sessões especiais em Lisboa.",
  },
  {
    name: "World One Health Congress",
    date: "4 Set 2026",
    location: "Lisboa",
    category: "technology",
    description: "Congresso científico internacional sobre saúde global, reunindo especialistas de todo o mundo na capital portuguesa.",
  },
  {
    name: "SBC Summit Lisbon",
    date: "29 Set 2026",
    location: "Lisboa",
    category: "technology",
    description: "Cimeira internacional do setor de desporto e entretenimento digital, com os principais players do mercado global em Lisboa.",
  },
  {
    name: "Doc Lisboa – Documentary Film Festival",
    date: "Out 2026",
    location: "Lisboa",
    category: "cinema",
    description: "Festival internacional de cinema documental, reunindo as melhores produções de não-ficção de todo o mundo.",
  },
  {
    name: "Misty Fest",
    date: "Nov 2026",
    location: "Portugal",
    category: "music",
    description: "Festival de música ambient, experimental e alternativa, numa atmosfera intimista e única.",
  },
  {
    name: "LEFFEST – Lisbon & Sintra Film Festival",
    date: "Nov 2026",
    location: "Lisboa / Sintra",
    category: "cinema",
    description: "Festival de cinema de autor em Lisboa e Sintra, apresentando o melhor do cinema de arte mundial.",
  },
  {
    name: "Cinanima – International Animation Film Festival",
    date: "6 Nov 2026",
    location: "Espinho",
    category: "cinema",
    description: "O mais importante festival de cinema de animação da Península Ibérica, com competição internacional e workshops.",
  },
  {
    name: "Golegã – Feira Nacional do Cavalo",
    date: "6 Nov 2026",
    location: "Golegã, Santarém",
    category: "cultural",
    description: "A maior concentração equestre ibérica, com touradas, concursos de equitação e a tradicional feira de São Martinho.",
  },
  {
    name: "Web Summit",
    date: "9 Nov 2026",
    location: "Lisboa",
    category: "technology",
    description: "A maior conferência tecnológica do mundo, reunindo em Lisboa dezenas de milhares de líderes, startups e investidores globais.",
  },
  {
    name: "MotoGP – Grande Prémio do Algarve",
    date: "13 Nov 2026",
    location: "Portimão, Algarve",
    category: "motor",
    description: "Grande Prémio de Portugal de MotoGP no Autódromo Internacional do Algarve, com pilotos de topo da competição mundial.",
  },
  {
    name: "Fantasporto – Porto International Film Festival",
    date: "26 Fev 2027",
    location: "Porto",
    category: "cinema",
    description: "O mítico festival de cinema fantástico do Porto, com competição internacional de filmes de ficção científica e terror.",
  },
];

const categoryColors: Record<Category, string> = {
  music:      "bg-purple-500/20 text-purple-300 border-purple-500/30",
  sports:     "bg-blue-500/20 text-blue-300 border-blue-500/30",
  cultural:   "bg-amber-500/20 text-amber-300 border-amber-500/30",
  religious:  "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  cinema:     "bg-pink-500/20 text-pink-300 border-pink-500/30",
  technology: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  motor:      "bg-red-500/20 text-red-300 border-red-500/30",
};

const allCategories: Category[] = ["music", "sports", "cultural", "religious", "cinema", "technology", "motor"];

const Events = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<Category | "all">("all");

  const filtered = activeFilter === "all" ? events : events.filter((e) => e.category === activeFilter);
  const catLabel = (cat: Category) => t(`events_cat_${cat}`);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 section-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            {t("events_label")}
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            {t("events_title")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("events_desc")}
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-6 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-md bg-background/90">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`text-[10px] font-bold tracking-widest uppercase px-4 py-2 border transition-all ${
                activeFilter === "all"
                  ? "gold-gradient text-primary-foreground border-transparent"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              Todos ({events.length})
            </button>
            {allCategories.map((cat) => {
              const count = events.filter((e) => e.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-[10px] font-bold tracking-widest uppercase px-4 py-2 border transition-all ${
                    activeFilter === cat
                      ? "gold-gradient text-primary-foreground border-transparent"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {catLabel(cat)} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid de eventos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event) => (
              <div
                key={event.name}
                className="section-card border border-border hover:border-primary/30 transition-all group flex flex-col overflow-hidden"
              >
                <div className="h-1 gold-gradient" />

                <div className="p-6 flex flex-col flex-1">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 border rounded-full self-start mb-4 ${categoryColors[event.category]}`}
                  >
                    <Tag className="w-3 h-3" />
                    {catLabel(event.category)}
                  </span>

                  <h3 className="text-base font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                    {event.name}
                  </h3>

                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CalendarDays className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                    {event.description}
                  </p>

                  <a
                    href="/#booking"
                    className="gold-gradient px-5 py-3 text-xs font-bold tracking-wider uppercase text-primary-foreground hover:opacity-95 transition-all text-center shadow-md active:scale-[0.98]"
                  >
                    {t("events_book")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-16 section-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-3">FLUXITOUR®</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            {t("events_info_title")}
          </h2>
          <p className="text-muted-foreground mb-8">{t("events_info_desc")}</p>
          <a
            href="/#booking"
            className="gold-gradient inline-block px-10 py-4 text-sm font-bold tracking-wider uppercase text-primary-foreground hover:opacity-95 transition-all shadow-lg"
          >
            {t("events_book")}
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
