import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { getArticles, StoredArticle } from "@/lib/blogStorage";
import { ArrowLeft, CalendarDays, User } from "lucide-react";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<StoredArticle | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const articles = getArticles();
    const found = articles.find((a) => a.slug === slug || a.id === slug);
    if (found) {
      setArticle(found);
    } else {
      setNotFound(true);
    }
  }, [slug]);

  if (notFound) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <p className="text-muted-foreground mb-4">Artigo não encontrado.</p>
          <Link to="/blog" className="text-primary text-sm font-semibold hover:underline">
            Voltar ao Blog
          </Link>
        </div>
      </Layout>
    );
  }

  if (!article) return null;

  const canonicalUrl = `https://fluxitour.pt/blog/${article.slug}`;

  return (
    <Layout>
      <Helmet>
        <title>{article.title} | FLUXITOUR Blog</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={`${article.category}, turismo Portugal, FLUXITOUR, transporte privado Portugal`} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="FLUXITOUR" />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content={article.author} />
        <meta property="article:section" content={article.category} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={article.image} />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": article.title,
          "description": article.excerpt,
          "image": article.image,
          "datePublished": article.date,
          "author": {
            "@type": "Organization",
            "name": "FLUXITOUR",
            "url": "https://fluxitour.pt"
          },
          "publisher": {
            "@type": "Organization",
            "name": "FLUXITOUR",
            "url": "https://fluxitour.pt",
            "logo": {
              "@type": "ImageObject",
              "url": "https://fluxitour.pt/logo.jpg"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
          }
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-4xl mx-auto w-full left-0 right-0">
          <span className="text-[10px] font-bold tracking-widest uppercase text-primary mb-3 block">
            {article.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-display font-bold text-white leading-snug">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">

          {/* Meta */}
          <div className="flex items-center gap-6 mb-8 pb-6 border-b border-border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <CalendarDays className="w-3.5 h-3.5 text-primary" />
              {article.date}
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <User className="w-3.5 h-3.5 text-primary" />
              {article.author}
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-base text-muted-foreground italic border-l-2 border-primary pl-5 mb-10 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Body */}
          <div className="prose prose-invert prose-sm max-w-none text-foreground/85 leading-relaxed whitespace-pre-line text-[15px]">
            {article.content}
          </div>

          {/* CTA */}
          <div className="mt-14 p-8 section-card border border-border text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">FLUXITOUR</p>
            <h3 className="text-xl font-display font-bold text-foreground mb-3">
              Planeie a sua viagem a Portugal
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Transfers privados de luxo e tours exclusivos por Portugal com motoristas profissionais.
            </p>
            <Link
              to="/#booking"
              className="gold-gradient inline-block px-8 py-3 text-xs font-bold tracking-wider uppercase text-primary-foreground hover:opacity-95 transition-all shadow-md"
            >
              Pedir Orçamento
            </Link>
          </div>

          {/* Back */}
          <div className="mt-10">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticle;
