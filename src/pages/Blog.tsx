import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { useTranslation } from "react-i18next";
import { getArticles, StoredArticle } from "@/lib/blogStorage";
import { X } from "lucide-react";

const Blog = () => {
  const { t } = useTranslation();
  const [storedArticles, setStoredArticles] = useState<StoredArticle[]>([]);
  const [selected, setSelected] = useState<StoredArticle | null>(null);

  useEffect(() => {
    setStoredArticles(getArticles());
  }, []);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const blogPosts = [
    { titleKey: "blog1_title", excerptKey: "blog1_excerpt", dateKey: "blog1_date", slug: "melides-portugal" },
    { titleKey: "blog2_title", excerptKey: "blog2_excerpt", dateKey: "blog2_date", slug: "comporta-portugal" },
    { titleKey: "blog3_title", excerptKey: "blog3_excerpt", dateKey: "blog3_date", slug: "luxury-private-tours" },
    { titleKey: "blog4_title", excerptKey: "blog4_excerpt", dateKey: "blog4_date", slug: "portugal-spain-transfers" },
    { titleKey: "blog5_title", excerptKey: "blog5_excerpt", dateKey: "blog5_date", slug: "sophisticated-destinations" },
    { titleKey: "blog6_title", excerptKey: "blog6_excerpt", dateKey: "blog6_date", slug: "lisbon-like-local" },
  ];

  return (
    <Layout>
      <section className="py-20 section-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-3">{t("blog_label")}</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">{t("blog_title")}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("blog_desc")}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storedArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => setSelected(article)}
                className="section-card border border-border overflow-hidden hover:border-primary/30 transition-colors group cursor-pointer"
              >
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-primary font-semibold tracking-wider uppercase">{article.category}</span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                  <span className="text-xs font-semibold tracking-wider uppercase text-primary">{t("blog_read_more")} →</span>
                </div>
              </article>
            ))}
            {blogPosts.map((post) => (
              <article key={post.slug} className="section-card border border-border overflow-hidden hover:border-primary/30 transition-colors group">
                <div className="h-48 gold-gradient opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-primary font-semibold tracking-wider uppercase">FLUXITOUR</span>
                    <span className="text-xs text-muted-foreground">{t(post.dateKey)}</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {t(post.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(post.excerptKey)}</p>
                  <span className="text-xs font-semibold tracking-wider uppercase text-primary">{t("blog_read_more")}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-background border border-border w-full max-w-2xl my-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground transition-colors bg-background/80 rounded-full p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selected.image} alt={selected.title} className="w-full h-60 object-cover" />
            <div className="p-8">
              <span className="text-[10px] font-bold tracking-widest uppercase text-primary mb-3 block">
                {selected.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2 leading-snug">
                {selected.title}
              </h2>
              <p className="text-xs text-muted-foreground mb-6">
                {selected.date} · {selected.author}
              </p>
              <p className="text-sm text-muted-foreground italic mb-8 border-l-2 border-primary pl-4 leading-relaxed">
                {selected.excerpt}
              </p>
              <div className="text-sm text-foreground/85 leading-relaxed whitespace-pre-line">
                {selected.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Blog;
