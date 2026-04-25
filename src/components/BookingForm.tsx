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
    try {
      const res = await fetch("https://formspree.io/f/xlgowvre", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `FLUXITOUR - Pedido de Orçamento - ${formData.name}`,
          servico: formData.service,
          recolha: formData.pickup,
          destino: formData.destination,
          nome: formData.name,
          email: formData.email,
          telefone: formData.phone,
          cadeiras: formData.childSeat,
          data: formData.date,
          hora: formData.time,
          mensagem: formData.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
            <div className="border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 px-6 py-10 text-center my-10">
              <h3 className="text-xl font-display font-bold mb-2">{t("booking_success_title")}</h3>
              <p className="text-sm mb-4">{t("booking_success_desc")}</p>
              <button onClick={() => setStatus("idle")} className="text-xs underline text-emerald-400">
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

                {status === "error" && (
                  <p className="text-red-400 text-sm text-center border border-red-500/30 bg-red-500/10 px-4 py-3">
                    Ocorreu um erro. Tente novamente ou contacte-nos por email.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full gold-gradient px-8 py-5 text-sm font-bold tracking-[0.2em] uppercase text-primary-foreground hover:opacity-95 transition-all shadow-xl active:scale-[0.98] disabled:opacity-60"
                >
                  {status === "sending" ? "A enviar..." : t("booking_submit")}
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
