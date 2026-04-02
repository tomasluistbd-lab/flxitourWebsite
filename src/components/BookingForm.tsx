import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    service: "",
    pickup: "",
    destination: "",
    name: "",
    email: "",
    phone: "",
    childSeat: "nao",
    date: "",
    time: "08:00",
    message: "",
  });

  const generateTimes = () => {
    const times = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 15) {
        const hh = h.toString().padStart(2, "0");
        const mm = m.toString().padStart(2, "0");
        times.push(`${hh}:${mm}`);
      }
    }
    return times;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`NOVO PEDIDO DE ORÇAMENTO - ${formData.name}`);
    const body = encodeURIComponent(
      `DETALHES DO PEDIDO\n` +
      `--------------------------\n` +
      `Serviço: ${formData.service}\n` +
      `Local de Recolha: ${formData.pickup}\n` +
      `Local de Destino: ${formData.destination}\n` +
      `Data: ${formData.date}\n` +
      `Hora: ${formData.time}\n\n` +
      `DADOS DO CLIENTE\n` +
      `--------------------------\n` +
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Cadeiras de Criança: ${formData.childSeat}\n\n` +
      `MENSAGEM ADICIONAL\n` +
      `--------------------------\n` +
      `${formData.message || "Sem mensagem adicional."}`
    );

    // Abre o Outlook/Mail do utilizador já com tudo preenchido
    window.location.href = `mailto:fluxitour.geral@outlook.pt?subject=${subject}&body=${body}`;
  };

  return (
    <section id="booking" className="py-20 bg-background-alt border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary text-center mb-3">
            Reservas
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-4">
            Pedido de Orçamento
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Preencha os campos abaixo e entraremos em contacto com o valor final do seu transfer.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Serviço */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Serviço</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                required
              >
                <option value="">Selecione um Serviço</option>
                <option value="Transfer Aeroporto">Transfer Aeroporto</option>
                <option value="Tour Privado">Tour Privado</option>
                <option value="Transfer Executivo">Transfer Executivo</option>
                <option value="Eventos & Casamentos">Eventos & Casamentos</option>
              </select>
            </div>

            {/* Recolha e Destino */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Local de Recolha</label>
                <input
                  type="text"
                  placeholder="Ex: Aeroporto Lisboa"
                  value={formData.pickup}
                  onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Local de Destino</label>
                <input
                  type="text"
                  placeholder="Ex: Cascais / Hotel"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
            </div>

            {/* Nome e Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Nome</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
            </div>

            {/* Telefone e Cadeiras */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Telefone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Cadeiras de Criança</label>
                <select
                  value={formData.childSeat}
                  onChange={(e) => setFormData({ ...formData, childSeat: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="nao">Não necessito</option>
                  <option value="Sim - Cadeira">Sim (Cadeira)</option>
                  <option value="Sim - Assento Elevatório">Sim (Assento Elevatório)</option>
                </select>
              </div>
            </div>

            {/* Data e Hora */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Data</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Hora</label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                >
                  {generateTimes().map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <textarea
              placeholder="Mensagem Adicional (Nº de voo, malas extras, etc.)"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            />

            <button
              type="submit"
              className="w-full gold-gradient px-8 py-5 text-sm font-bold tracking-[0.2em] uppercase text-primary-foreground hover:opacity-95 transition-all shadow-xl active:scale-[0.98]"
            >
              Pedir Orçamento Final
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;