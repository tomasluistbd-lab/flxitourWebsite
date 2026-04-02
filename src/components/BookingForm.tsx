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

  // Estado para gerir o feedback de envio
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Prepara os dados para o Formspree
    const formspreeData = {
      ...formData,
      _subject: `NOVO PEDIDO DE ORÇAMENTO - ${formData.name}`,
    };

    try {
      const response = await fetch("https://formspree.io/f/xlgowvre", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formspreeData),
      });

      if (response.ok) {
        setStatus("success");
        // Limpa o formulário após sucesso
        setFormData({
          service: "", pickup: "", destination: "", name: "",
          email: "", phone: "", childSeat: "nao", date: "",
          time: "08:00", message: ""
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
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
          
          {status === "success" ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded text-center my-10">
              <h3 className="text-xl font-bold mb-2">Pedido Enviado com Sucesso!</h3>
              <p>Obrigado pelo seu contacto. Responderemos para o seu e-mail em breve.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm underline"
              >
                Enviar outro pedido
              </button>
            </div>
          ) : (
            <>
              <p className="text-muted-foreground text-center mb-10">
                Preencha os campos abaixo e entraremos em contacto com o valor final do seu transfer.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* O atributo 'name' em cada campo é crucial para o Formspree identificar os dados */}
                
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Serviço</label>
                  <select
                    name="servico"
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Local de Recolha</label>
                    <input
                      type="text"
                      name="recolha"
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
                      name="destino"
                      placeholder="Ex: Cascais / Hotel"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Nome</label>
                    <input
                      type="text"
                      name="nome_cliente"
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
                      name="email_cliente"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Telefone</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Cadeiras de Criança</label>
                    <select
                      name="cadeiras"
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Data</label>
                    <input
                      type="date"
                      name="data_reserva"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Hora</label>
                    <select
                      name="hora_reserva"
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
                  name="mensagem_extra"
                  placeholder="Mensagem Adicional (Nº de voo, malas extras, etc.)"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full gold-gradient px-8 py-5 text-sm font-bold tracking-[0.2em] uppercase text-primary-foreground hover:opacity-95 transition-all shadow-xl active:scale-[0.98] disabled:opacity-50"
                >
                  {status === "sending" ? "A enviar..." : "Pedir Orçamento Final"}
                </button>
                
                {status === "error" && (
                  <p className="text-red-500 text-center text-sm">
                    Ocorreu um erro ao enviar. Por favor, tente novamente ou contacte-nos por telefone.
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;