"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center max-w-2xl mx-auto mb-16" : "max-w-2xl mb-16"}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-50 border border-brand/20 rounded-full text-brand text-xs font-mono font-medium mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
        {title}{" "}
        {highlight && <span className="text-brand">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-slate-500 text-base leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
