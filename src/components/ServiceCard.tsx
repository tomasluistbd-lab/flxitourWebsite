import { Link } from "react-router-dom";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ image, title, description, link = "/services" }: ServiceCardProps) => {
  return (
    <Link to={link} className="group block overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          width={800}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2 block">
            Explorar
          </span>
          <h3 className="text-xl font-display font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
