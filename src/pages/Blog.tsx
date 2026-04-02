import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const blogPosts = [
  {
    title: "Melides, Portugal: Uma Jóia Escondida de Tranquilidade",
    excerpt: "Ao longo da pitoresca costa alentejana, a encantadora aldeia de Melides surge como um refúgio intocado...",
    date: "11 Fevereiro, 2026",
    author: "FLUXITOUR",
    slug: "melides-portugal",
  },
  {
    title: "Comporta, Portugal",
    excerpt: "Na costa atlântica de Portugal, Comporta brilha com beleza natural e luxo discreto...",
    date: "2 Fevereiro, 2026",
    author: "FLUXITOUR",
    slug: "comporta-portugal",
  },
  {
    title: "Tours Privados de Luxo em Portugal",
    excerpt: "Está pronto para embarcar numa viagem inesquecível pelas paisagens deslumbrantes e rico património cultural de Portugal?",
    date: "19 Janeiro, 2026",
    author: "FLUXITOUR",
    slug: "luxury-private-tours",
  },
  {
    title: "Transfers Privados entre Portugal e Espanha",
    excerpt: "No mundo acelerado de hoje, a mobilidade transfronteiriça precisa de ser tão fluida e confortável quanto possível...",
    date: "17 Janeiro, 2026",
    author: "FLUXITOUR",
    slug: "portugal-spain-transfers",
  },
  {
    title: "10 Destinos Sofisticados para Viajantes de Luxo em Portugal",
    excerpt: "Explore as 10 rotas mais refinadas de Portugal — perfeitas para viajantes sofisticados que procuram privacidade...",
    date: "9 Janeiro, 2026",
    author: "FLUXITOUR",
    slug: "sophisticated-destinations",
  },
  {
    title: "Lisboa Como um Local",
    excerpt: "Quando as pessoas pensam em Lisboa, imagens icónicas do Elétrico 28, Torre de Belém e Mosteiro dos Jerónimos vêm à mente...",
    date: "30 Dezembro, 2025",
    author: "FLUXITOUR",
    slug: "lisbon-like-local",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-20 section-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-3">Blog</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">On The Road</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dicas de viagem, destinos inspiradores e guias para explorar Portugal ao máximo.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="section-card border border-border overflow-hidden hover:border-primary/30 transition-colors group">
                <div className="h-48 gold-gradient opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-primary font-semibold tracking-wider uppercase">{post.author}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-xs font-semibold tracking-wider uppercase text-primary">Ler mais →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
