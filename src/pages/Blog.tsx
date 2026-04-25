import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { useTranslation } from "react-i18next";
import { getArticles, StoredArticle } from "@/lib/blogStorage";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ARTICLES_PER_PAGE = 6;

interface StaticPost {
  titleKey: string;
  excerptKey: string;
  dateKey: string;
  slug: string;
}

const Blog = () => {
  const { t } = useTranslation();
  const [storedArticles, setStoredArticles] = useState<StoredArticle[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setStoredArticles(getArticles());
  }, []);

  const staticPosts: StaticPost[] = [
    { titleKey: "blog1_title", excerptKey: "blog1_excerpt", dateKey: "blog1_date", slug: "melides-portugal" },
    { titleKey: "blog2_title", excerptKey: "blog2_excerpt", dateKey: "blog2_date", slug: "comporta-portugal" },
    { titleKey: "blog3_title", excerptKey: "blog3_excerpt", dateKey: "blog3_date", slug: "luxury-private-tours" },
    { titleKey: "blog4_title", excerptKey: "blog4_excerpt", dateKey: "blog4_date", slug: "portugal-spain-transfers" },
    { titleKey: "blog5_title", excerptKey: "blog5_excerpt", dateKey: "blog5_date", slug: "sophisticated-destinations" },
    { titleKey: "blog6_title", excerptKey: "blog6_excerpt", dateKey: "blog6_date", slug: "lisbon-like-local" },
  ];

  // Combine: stored articles first (newest), then static posts
  type AnyPost = { type: "stored"; data: StoredArticle } | { type: "static"; data: StaticPost };
  const allPosts: AnyPost[] = [
    ...storedArticles.map((a) => ({ type: "stored" as const, data: a })),
    ...staticPosts.map((p) => ({ type: "static" as const, data: p })),
  ];

  const totalPages = Math.ceil(allPosts.length / ARTICLES_PER_PAGE);
  const paginated = allPosts.slice((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE);

  const goTo = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <Helmet>
        <title>Blog | FLUXITOUR — Turismo e Transporte Privado em Portugal</title>
        <meta name="description" content="Artigos sobre turismo em Portugal: destinos, gastronomia, praias, cultura e muito mais. Descubra Portugal com a FLUXITOUR." />
        <meta name="keywords" content="turismo Portugal, blog viagens Portugal, transfer privado Lisboa, transporte luxo Portugal" />
        <link rel="canonical" href="https://fluxitour.pt/blog" />
        <meta property="og:title" content="Blog FLUXITOUR — Turismo em Portugal" />
        <meta property="og:description" content="Artigos sobre turismo em Portugal: destinos, gastronomia, praias, cultura e muito mais." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fluxitour.pt/blog" />
      </Helmet>

      {/* Hero */}
      <section className="py-20 section-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-3">{t("blog_label")}</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">{t("blog_title")}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("blog_desc")}</p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginated.map((post) => {
              if (post.type === "stored") {
                const a = post.data;
                return (
                  <Link
                    key={a.id}
                    to={`/blog/${a.slug}`}
                    className="section-card border border-border overflow-hidden hover:border-primary/30 transition-colors group block"
                  >
                    <img src={a.image} alt={a.title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-primary font-semibold tracking-wider uppercase">{a.category}</span>
                        <span className="text-xs text-muted-foreground">{a.date}</span>
                      </div>
                      <h2 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                        {a.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{a.excerpt}</p>
                      <span className="text-xs font-semibold tracking-wider uppercase text-primary">{t("blog_read_more")} →</span>
                    </div>
                  </Link>
                );
              }

              const p = post.data;
              return (
                <article key={p.slug} className="section-card border border-border overflow-hidden hover:border-primary/30 transition-colors group">
                  <div className="h-48 gold-gradient opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-primary font-semibold tracking-wider uppercase">FLUXITOUR</span>
                      <span className="text-xs text-muted-foreground">{t(p.dateKey)}</span>
                    </div>
                    <h2 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                      {t(p.titleKey)}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(p.excerptKey)}</p>
                    <span className="text-xs font-semibold tracking-wider uppercase text-primary">{t("blog_read_more")}</span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-16">
              <button
                onClick={() => goTo(page - 1)}
                disabled={page === 1}
                className="p-2 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => goTo(p)}
                  className={`w-9 h-9 text-xs font-bold border transition-all ${
                    p === page
                      ? "gold-gradient text-primary-foreground border-transparent"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {p}
                </button>
              ))}

              <button
                onClick={() => goTo(page + 1)}
                disabled={page === totalPages}
                className="p-2 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Page indicator */}
          {totalPages > 1 && (
            <p className="text-center text-xs text-muted-foreground mt-4">
              Página {page} de {totalPages} · {allPosts.length} artigos
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
