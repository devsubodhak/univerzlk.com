"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: "cyan" | "orange";
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative card-hover p-8 cursor-pointer"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 bg-brand-50 text-brand group-hover:bg-brand/10">
        <Icon size={22} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-navy mb-3">{title}</h3>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
    </motion.div>
  );
}
