import { useState } from "react";
import { useTranslation } from "react-i18next";

const BookingForm = () => {
  const { t } = useTranslation();

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

  const [status, setStatus] = useState<"idle" | "success">("idle");

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

    const subject = encodeURIComponent(`FLUXITOUR - Pedido de Orçamento - ${formData.name}`);
    const body = encodeURIComponent(
      `Serviço: ${formData.service}\n` +
      `Local de Recolha: ${formData.pickup}\n` +
      `Local de Destino: ${formData.destination}\n` +
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Cadeiras de Criança: ${formData.childSeat}\n` +
      `Data: ${formData.date}\n` +
      `Hora: ${formData.time}\n` +
      `Mensagem Adicional: ${formData.message}`
    );

    window.open(`mailto:fluxitour.geral@outlook.pt?subject=${subject}&body=${body}`, '_blank');
    setStatus("success");
  };

  return (
    <section id="booking" className="py-20 bg-background-alt border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary text-center mb-3">
            {t("booking_label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-4">
            {t("booking_title")}
          </h2>

          {status === "success" ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded text-center my-10">
              <h3 className="text-xl font-bold mb-2">{t("booking_success_title")}</h3>
              <p>{t("booking_success_desc")}</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm underline"
              >
                {t("booking_success_again")}
              </button>
            </div>
          ) : (
            <>
              <p className="text-muted-foreground text-center mb-10">
                {t("booking_desc")}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">{t("booking_service_label")}</label>
                  <select
                    name="servico"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                    required
                  >
                    <option value="">{t("booking_service_placeholder")}</option>
                    <option value="Transfer Aeroporto">{t("booking_service_airport")}</option>
                    <option value="Tour Privado">{t("booking_service_tour")}</option>
                    <option value="Transfer Executivo">{t("booking_service_executive")}</option>
                    <option value="Eventos & Casamentos">{t("booking_service_events")}</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">{t("booking_pickup_label")}</label>
                    <input
                      type="text"
                      name="recolha"
                      placeholder={t("booking_pickup_placeholder")}
                      value={formData.pickup}
                      onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                      className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">{t("booking_destination_label")}</label>
                    <input
                      type="text"
                      name="destino"
                      placeholder={t("booking_destination_placeholder")}
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">{t("booking_name_label")}</label>
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
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">{t("booking_email_label")}</label>
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
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">{t("booking_phone_label")}</label>
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
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">{t("booking_childseat_label")}</label>
                    <select
                      name="cadeiras"
                      value={formData.childSeat}
                      onChange={(e) => setFormData({ ...formData, childSeat: e.target.value })}
                      className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="nao">{t("booking_childseat_no")}</option>
                      <option value="Sim - Cadeira">{t("booking_childseat_seat")}</option>
                      <option value="Sim - Assento Elevatório">{t("booking_childseat_booster")}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">{t("booking_date_label")}</label>
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
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">{t("booking_time_label")}</label>
                    <select
                      name="hora_reserva"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      required
                    >
                      {generateTimes().map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <textarea
                  name="mensagem_extra"
                  placeholder={t("booking_message_placeholder")}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="w-full gold-gradient px-8 py-5 text-sm font-bold tracking-[0.2em] uppercase text-primary-foreground hover:opacity-95 transition-all shadow-xl active:scale-[0.98]"
                >
                  {t("booking_submit")}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
