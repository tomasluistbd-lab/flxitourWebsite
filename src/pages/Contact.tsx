import { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contacto FLUXITOUR");
    const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`mailto:fluxitour.geral@outlook.pt?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <Layout>
      <section className="py-20 section-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-3">Contacto</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Vamos Conectar</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Sempre disponíveis para si</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">Como podemos ajudar?</h2>
              <p className="text-muted-foreground mb-8">Se precisa de mais informações, contacte-nos.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                  required
                />
                <textarea
                  placeholder="A sua mensagem"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground resize-none"
                  required
                />
                <button
                  type="submit"
                  className="gold-gradient px-8 py-4 text-sm font-semibold tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-8">Sempre Disponíveis Para Si</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">FLUXITOUR®</h3>
                  <p className="text-sm text-muted-foreground">Portugal</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">Ligue-nos</h4>
                  <a href="tel:+351916822104" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    +351 916 822 104
                  </a>
                </div>

                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">Email</h4>
                  <a href="mailto:fluxitour.geral@outlook.pt" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    fluxitour.geral@outlook.pt
                  </a>
                </div>

                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">Localização</h4>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>Portugal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
