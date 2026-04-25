import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import BookingForm from "@/components/BookingForm";
import { useTranslation } from "react-i18next";
import toursImg from "@/assets/tours-portugal.jpg";
import airportImg from "@/assets/airport-transfer.jpg";
import businessImg from "@/assets/business-transfer.jpg";
import weddingImg from "@/assets/events-wedding.jpg";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { title: t("service_tours_title"), description: t("service_tours_desc"), image: toursImg },
    { title: t("service_airport_title"), description: t("service_airport_desc"), image: airportImg },
    { title: t("service_executive_title"), description: t("service_executive_desc"), image: businessImg },
    { title: t("service_events_title"), description: t("service_events_desc"), image: weddingImg },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 section-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-3">{t("services_page_label")}</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">{t("services_page_title")}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("services_page_desc")}</p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {services.map((s) => (
              <ServiceCard key={s.title} image={s.image} title={s.title} description={s.description} link="/services" />
            ))}
          </div>

          {/* Detailed sections */}
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center mb-20 last:mb-0`}
            >
              <div className="lg:w-1/2">
                <img src={s.image} alt={s.title} className="w-full h-80 object-cover" loading="lazy" width={800} height={800} />
              </div>
              <div className="lg:w-1/2">
                <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-2">{t("explore_label")}</p>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BookingForm />
    </Layout>
  );
};

export default Services;
