import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export function SEO({ title, description, keywords, canonical, schema }: SEOProps) {
  useEffect(() => {
    // Update Title
    if (title) {
      document.title = title;
    }

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description || "");

    // Update Meta Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // OpenGraph Tags
    const ogTags: Record<string, string> = {
      "og:title": title,
      "og:description": description,
      "og:type": "website",
      "og:site_name": "AVBT Technologies",
      "og:url": canonical || window.location.href,
    };

    Object.entries(ogTags).forEach(([prop, val]) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", prop);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", val);
    });

    // Update JSON-LD Schema
    const existingSchema = document.getElementById("jsonld-page-schema");
    if (existingSchema) {
      existingSchema.remove();
    }

    if (schema) {
      const script = document.createElement("script");
      script.id = "jsonld-page-schema";
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonical, schema]);

  return null;
}
