import { useEffect } from "react";

interface SportsTeamProps {
  type: "SportsTeam";
}

interface NewsArticleProps {
  type: "NewsArticle";
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}

interface PersonProps {
  type: "Person";
  name: string;
  position: string;
  number: number;
  grade: string;
  image?: string;
}

type StructuredDataProps = SportsTeamProps | NewsArticleProps | PersonProps;

export function StructuredData(props: StructuredDataProps) {
  useEffect(() => {
    let structuredData: any = {
      "@context": "https://schema.org",
    };

    if (props.type === "SportsTeam") {
      structuredData = {
        ...structuredData,
        "@type": "SportsTeam",
        name: "NU GIRLS SOCCER",
        sport: "Soccer",
        description: "日本大学女子サッカー部。チームのキャッチコピーは「闘昇」。挑戦と尊重の精神で、声を出す・ハードワーク・楽しむという三原則のもと活動しています。",
        url: "https://nugirlssoccer.example.com",
        logo: "https://nugirlssoccer.example.com/logo.png",
        foundingDate: "1946",
        memberOf: {
          "@type": "SportsOrganization",
          name: "日本大学",
        },
        location: {
          "@type": "Place",
          name: "日本大学",
          address: {
            "@type": "PostalAddress",
            addressCountry: "JP",
            addressRegion: "東京都",
          },
        },
      };
    } else if (props.type === "NewsArticle") {
      structuredData = {
        ...structuredData,
        "@type": "NewsArticle",
        headline: props.headline,
        description: props.description,
        datePublished: props.datePublished,
        dateModified: props.dateModified || props.datePublished,
        author: {
          "@type": "Organization",
          name: "NU GIRLS SOCCER",
        },
        publisher: {
          "@type": "Organization",
          name: "NU GIRLS SOCCER",
          logo: {
            "@type": "ImageObject",
            url: "https://nugirlssoccer.example.com/logo.png",
          },
        },
        image: props.image || "https://nugirlssoccer.example.com/og-image.jpg",
      };
    } else if (props.type === "Person") {
      structuredData = {
        ...structuredData,
        "@type": "Person",
        name: props.name,
        jobTitle: props.position,
        memberOf: {
          "@type": "SportsTeam",
          name: "NU GIRLS SOCCER",
        },
        image: props.image,
        identifier: props.number.toString(),
        additionalType: "Athlete",
      };
    }

    // Create or update script tag
    const scriptId = "structured-data";
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(structuredData);

    // Cleanup function
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [props]);

  return null;
}