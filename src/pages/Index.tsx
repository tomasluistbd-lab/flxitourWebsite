import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import FleetCard from "@/components/FleetCard";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/hero-car.jpg";
import toursImg from "@/assets/tours-portugal.jpg";
import airportImg from "@/assets/airport-transfer.jpg";
import businessImg from "@/assets/business-transfer.jpg";
import weddingImg from "@/assets/events-wedding.jpg";
import fleetEqe from "@/assets/fleet-eqe.jpg";
import fleetSclass from "@/assets/fleet-sclass.jpg";
import fleetVclass from "@/assets/fleet-vclass.jpg";
import fleetEclass from "@/assets/fleet-eclass.jpg";

const Index = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="relative min-h-screen flex items-center pt-24 md:pt-0">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="FLUXITOUR Luxury Transport"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>

        <div className="absolute top-20 md:top-32 left-0 w-full text-center z-20 px-4">
          <p className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-display font-bold gold-text-gradient italic leading-tight animate-fade-in opacity-90">
            "Inspired by the fear of being average"
          </p>
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 z-10 mt-28 md:mt-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-foreground leading-tight">
              {t("hero_title")}
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold gold-text-gradient leading-tight mb-8">
              {t("hero_subtitle")}
            </h1>

            <p className="text-base md:text-lg text-foreground/80 font-body leading-relaxed mb-8 max-w-lg">
              {t("hero_desc")}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#booking"
                className="gold-gradient w-full sm:w-auto px-8 py-4 text-sm font-bold tracking-wider uppercase text-primary-foreground hover:opacity-95 transition-all text-center shadow-lg"
              >
                {t("btn_book_transfer")}
              </a>
              <Link
                to="/services"
                className="border border-foreground/30 w-full sm:w-auto px-8 py-4 text-sm font-semibold tracking-wider uppercase text-foreground hover:border-primary hover:text-primary transition-colors text-center"
              >
                {t("btn_our_services")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="section-card py-6 border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-[10px] md:text-xs text-muted-foreground font-body tracking-wider uppercase text-center">
            <span>{t("feature_driver")}</span>
            <span className="text-primary">|</span>
            <span>{t("feature_wifi")}</span>
            <span className="text-primary">|</span>
            <span>{t("feature_water")}</span>
            <span className="text-primary">|</span>
            <span>{t("feature_charger")}</span>
            <span className="text-primary">|</span>
            <span>{t("feature_childseat")}</span>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary text-center mb-3">
            {t("services_label")}
          </p>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground text-center mb-6 max-w-3xl mx-auto leading-snug">
            {t("services_heading")}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-sm md:text-base">
            {t("services_desc")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard image={toursImg} title={t("service_tours_title")} description={t("service_tours_desc")} />
            <ServiceCard image={airportImg} title={t("service_airport_title")} description={t("service_airport_desc")} />
            <ServiceCard image={businessImg} title={t("service_executive_title")} description={t("service_executive_desc")} />
            <ServiceCard image={weddingImg} title={t("service_events_title")} description={t("service_events_desc")} />
          </div>
        </div>
      </section>

      {/* Frota */}
      <section className="section-card py-20 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary text-center mb-3">
            {t("fleet_label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-4">
            {t("fleet_heading")}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {t("fleet_desc")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FleetCard image={fleetEqe} name="Mercedes EQE" type={t("type_electric_sedan")} passengers="3" luggage="2" />
            <FleetCard image={fleetSclass} name="Mercedes S-Class" type={t("type_executive_sedan")} passengers="3" luggage="2" />
            <FleetCard image={fleetVclass} name="Mercedes V-Class" type={t("type_minivan")} passengers="6-7" luggage="4" />
            <FleetCard image={fleetEclass} name="Mercedes E-Class" type={t("type_sedan_plus")} passengers="3" luggage="2" />
          </div>

          <div className="text-center mt-10">
            <Link
              to="/fleet"
              className="border border-primary text-primary px-8 py-3 text-sm font-bold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all inline-block"
            >
              {t("fleet_view_all")}
            </Link>
          </div>
        </div>
      </section>

      <BookingForm />

      <Testimonials />

      <FAQ />
    </Layout>
  );
};

export default Index;
