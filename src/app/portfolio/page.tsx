"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Camera,
  BarChart3,
  ExternalLink,
  ArrowRight,
  Eye,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

type Category = "all" | "web" | "photo" | "marketing";

interface PortfolioItem {
  id: number;
  category: Category;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  stats?: string;
}

const portfolioItems: PortfolioItem[] = [
  // Web Projects
  {
    id: 1,
    category: "web",
    title: "Ceylon Spice Exports",
    subtitle: "Export Company Website",
    description:
      "A multilingual brand website for a leading Sri Lankan spice exporter, featuring a product catalog, certification showcase, and trade inquiry system.",
    tags: ["Next.js", "TypeScript", "Prisma", "i18n"],
    stats: "3x faster load time vs. old site",
  },
  {
    id: 2,
    category: "web",
    title: "Green Canopy Lodge",
    subtitle: "Eco-Lodge Booking System",
    description:
      "An immersive booking platform for an eco-resort in Ella, featuring real-time availability, gallery walkthroughs, and integrated payment processing.",
    tags: ["React", "Node.js", "Stripe", "AWS"],
    stats: "42% increase in direct bookings",
  },
  {
    id: 3,
    category: "web",
    title: "Island Craft Co.",
    subtitle: "E-Commerce Platform",
    description:
      "A full-featured online store for handcrafted Sri Lankan goods with inventory management, order tracking, and multi-currency checkout.",
    tags: ["Next.js", "Shopify API", "Tailwind"],
    stats: "200+ products | 15 countries",
  },

  // Photography Projects
  {
    id: 4,
    category: "photo",
    title: "Luxury Resort Collection",
    subtitle: "Hotel & Architectural Photography",
    description:
      "A comprehensive photo campaign for a five-star resort chain — capturing interiors, amenities, drone aerials, and lifestyle moments for their global marketing.",
    tags: ["Architectural", "Drone", "Lifestyle"],
    stats: "480+ deliverables",
  },
  {
    id: 5,
    category: "photo",
    title: "Artisan Tea Branding",
    subtitle: "Product Photography",
    description:
      "Studio product shoots for a premium Ceylon tea brand — flat-lays, packaging close-ups, and lifestyle compositions for e-commerce and social media.",
    tags: ["Product", "Studio", "AI-Enhanced"],
    stats: "Used across 6 platforms",
  },
  {
    id: 6,
    category: "photo",
    title: "Wild Sri Lanka",
    subtitle: "Nature & Wildlife Portfolio",
    description:
      "A personal project capturing the raw beauty of Sri Lanka's national parks, coastlines, and misty highlands — later licensed for tourism campaigns.",
    tags: ["Nature", "Wildlife", "Editorial"],
    stats: "Featured in 3 publications",
  },

  // Marketing Projects
  {
    id: 7,
    category: "marketing",
    title: "Boutique Hotel Rebrand",
    subtitle: "Reputation Management",
    description:
      "A 6-month digital reputation overhaul for a boutique hotel — improving Google ratings, responding to reviews, and building a consistent social media presence.",
    tags: ["Reputation", "Social Media", "SEO"],
    stats: "3.2★ → 4.7★ Google rating",
  },
  {
    id: 8,
    category: "marketing",
    title: "Organic Food Brand",
    subtitle: "Social Media Growth Campaign",
    description:
      "Strategic content planning, influencer partnerships, and ad campaigns that tripled the Instagram following and doubled monthly website traffic.",
    tags: ["Instagram", "Content", "Ads"],
    stats: "3x followers in 4 months",
  },
  {
    id: 9,
    category: "marketing",
    title: "Legal Firm SEO",
    subtitle: "Search Engine Optimization",
    description:
      "Complete SEO overhaul for a Colombo-based law firm — keyword research, on-page optimization, content strategy, and local SEO that put them on page 1.",
    tags: ["SEO", "Content", "Local Search"],
    stats: "Page 1 for 12 target keywords",
  },
];

const categories: { key: Category; label: string; icon: typeof Code2 }[] = [
  { key: "all", label: "All Work", icon: Eye },
  { key: "web", label: "Web", icon: Code2 },
  { key: "photo", label: "Photo", icon: Camera },
  { key: "marketing", label: "Marketing", icon: BarChart3 },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="section-padding pt-32 bg-white grid-bg">
        <SectionHeading
          badge="Our Work"
          title="Portfolio of"
          highlight="results."
          description="Real projects. Real outcomes. Browse our work across web development, photography, and digital marketing."
        />

        {/* ─── Filter Tabs ─── */}
        <div className="flex justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === cat.key
                  ? "bg-brand-50 text-brand border border-brand/30"
                  : "text-slate-500 hover:text-navy hover:bg-gray-50 border border-transparent"
              }`}
            >
              <cat.icon size={14} />
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ─── Masonry Grid ─── */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="break-inside-avoid card overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                  {/* Card Header — Brand Color Bar */}
                  <div className="h-1 bg-gradient-to-r from-brand to-brand-dark" />

                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-brand">
                        {item.category === "web" && <Code2 size={12} />}
                        {item.category === "photo" && <Camera size={12} />}
                        {item.category === "marketing" && (
                          <BarChart3 size={12} />
                        )}
                        {item.subtitle}
                      </span>
                      <ExternalLink
                        size={14}
                        className="text-gray-300 group-hover:text-brand transition-colors"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-navy mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Stats */}
                    {item.stats && (
                      <div className="bg-brand-50 border border-brand/10 rounded-lg px-4 py-2.5 mb-4 inline-block">
                        <span className="text-xs font-mono text-brand">
                          📊 {item.stats}
                        </span>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-md text-xs font-mono text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-padding bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Want to be our{" "}
            <span className="text-brand">next success story?</span>
          </h2>
          <p className="text-slate-500 mb-8">
            Let&apos;s build something remarkable together. Tell us about your
            project and we&apos;ll show you what&apos;s possible.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-all shadow-lg shadow-brand/20"
          >
            Start a Conversation
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
