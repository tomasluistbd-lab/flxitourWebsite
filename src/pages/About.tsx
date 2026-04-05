import Layout from "@/components/Layout";
import Testimonials from "@/components/Testimonials";
import heroImg from "@/assets/hero-car.jpg";
import { Search, Target, TreeDeciduous, Clock, ShieldCheck, MapPinned } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Profissionalismo",
    desc: "Motoristas experientes e bilingues, rigorosamente formados, garantem um serviço de excelência, elegância e total discrição.",
  },
  {
    icon: Target,
    title: "Conforto VIP",
    desc: "Frota premium com todos os extras: Wi-Fi de alta velocidade, águas, amenidades e um ambiente relaxante a bordo.",
  },
  {
    icon: TreeDeciduous,
    title: "Sustentabilidade",
    desc: "Compromisso ambiental com a integração de veículos 100% elétricos e híbridos, sem nunca comprometer o luxo.",
  },
  {
    icon: Clock,
    title: "Flexibilidade",
    desc: "Atendimento 24/7. Adaptamo-nos a mudanças de planos, atrasos de voos ou pedidos de última hora com máxima agilidade.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Total",
    desc: "Veículos de última geração, rigorosa manutenção preventiva e motoristas experientes e com mais de duas décadas de experiência.",
  },
  {
    icon: MapPinned,
    title: "Exclusividade Local",
    desc: "Mais que um condutor, um concierge local. Roteiros personalizados e acesso a experiências únicas em Portugal.",
  },
];

const About = () => {
  return (
    <Layout>
      <section className="py-20 section-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-3">Sobre Nós</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">FLUXITOUR®</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto italic">
            "Inspired by the fear of being average"
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Em cada cidade, por ruas e avenidas, ou de norte a sul de Portugal, a FLUXITOUR® conduz-o para que possa chegar com total conforto e elegância.
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
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">O Coração da FLUXITOUR: Quatro Gerações de Excelência</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A FLUXITOUR© é o culminar de uma herança familiar dedicada à arte de bem receber. Sediada na prestigiada vila de Cascais, a nossa história não se mede apenas em quilómetros, mas em décadas de dedicação ao acolhimento, aos eventos e à hotelaria de luxo. Com quase dois séculos de experiência acumulada no setor, somos a quarta geração de uma família que transformou a hospitalidade num legado de prestígio.

              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Acreditamos que o verdadeiro luxo reside nos detalhes que o dinheiro não compra: a diferença, o carisma e o charme tipico português. Para nós, a excelência não é um destino estático, mas um desafio diário que nos obriga a evoluir não só como prestadores de serviços, mas como pessoas.

              </p>
              <p className="text-muted-foreground leading-relaxed">
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-3">Valores</p>
            <h2 className="text-3xl font-display font-bold text-foreground">A Experiência FLUXITOUR</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((f) => (
              <div key={f.title} className="section-card border border-border p-10 hover:border-primary/40 transition-all group flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-primary-foreground shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <f.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">{f.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{f.desc}</p>
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