import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
}

export function SEO({
  title = "NU GIRLS SOCCER - 日本大学女子サッカー部",
  description = "日本大学女子サッカー部の公式サイト。チームのキャッチコピーは「闘昇」。挑戦と尊重の精神で、声を出す・ハードワーク・楽しむという三原則のもと活動しています。",
  keywords = "日本大学,女子サッカー部,NU GIRLS SOCCER,闘昇,大学サッカー,関東大学女子サッカー,日大,女子サッカー",
  ogImage = "https://nugirlssoccer.example.com/og-image.jpg",
  ogType = "website",
  article,
}: SEOProps) {
  const siteUrl = "https://nugirlssoccer.example.com";
  const fullTitle = title.includes("NU GIRLS SOCCER") ? title : `${title} | NU GIRLS SOCCER`;

  useEffect(() => {
    // Set title
    document.title = fullTitle;

    // Helper function to set meta tag
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Basic meta tags
    setMetaTag("description", description);
    setMetaTag("keywords", keywords);

    // Open Graph / Facebook
    setMetaTag("og:type", ogType, true);
    setMetaTag("og:url", siteUrl, true);
    setMetaTag("og:title", fullTitle, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:image", ogImage, true);
    setMetaTag("og:site_name", "NU GIRLS SOCCER", true);
    setMetaTag("og:locale", "ja_JP", true);

    // Article specific tags
    if (article) {
      if (article.publishedTime) {
        setMetaTag("article:published_time", article.publishedTime, true);
      }
      if (article.modifiedTime) {
        setMetaTag("article:modified_time", article.modifiedTime, true);
      }
      if (article.author) {
        setMetaTag("article:author", article.author, true);
      }
      if (article.section) {
        setMetaTag("article:section", article.section, true);
      }
    }

    // Twitter
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:url", siteUrl);
    setMetaTag("twitter:title", fullTitle);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", ogImage);

    // Robots
    setMetaTag("robots", "index, follow");
    setMetaTag("googlebot", "index, follow");

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", siteUrl);
  }, [fullTitle, description, keywords, ogImage, ogType, siteUrl, article]);

  return null;
}