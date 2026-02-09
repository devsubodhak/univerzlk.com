"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Camera,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Globe,
  ShoppingCart,
  Hotel,
  Package,
  ImagePlus,
  Trees,
  Search,
  MessageSquare,
  TrendingUp,
  Star,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const webFeatures = [
  "Custom React & Next.js Development",
  "Eco-Lodge & Resort Booking Systems",
  "Export Company Brand Websites",
  "E-Commerce Platforms (Shopify / Custom)",
  "SEO-Optimized, Blazing Fast Performance",
  "Mobile-First Responsive Design",
  "CMS Integration & Admin Dashboards",
  "Ongoing Maintenance & Support",
];

const photoFeatures = [
  "Commercial & Product Photography",
  "Resort, Hotel & Architectural Shoots",
  "Food & Lifestyle Photography",
  "Aerial / Drone Photography",
  "AI-Enhanced Post-Processing & Retouching",
  "360° Virtual Tours",
  "Social Media Content Packs",
  "On-Location & Studio Sessions",
];

const marketingFeatures = [
  "Social Media Strategy & Management",
  "Online Reputation Management",
  "Search Engine Optimization (SEO)",
  "Google Ads & Meta Ads Campaigns",
  "Content Creation & Copywriting",
  "Brand Identity & Guidelines",
  "Analytics & Monthly Reporting",
  "Email Marketing Campaigns",
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="section-padding pt-32 bg-white grid-bg">
        <SectionHeading
          badge="What We Do"
          title="Services that"
          highlight="deliver."
          description="We don't do templates. Every project is custom-built with hand-written code, professional photography, and data-driven marketing strategies."
        />
      </section>

      {/* ─── Web Development ─── */}
      <section id="web" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand">
                <Code2 size={24} />
              </div>
              <h2 className="text-3xl font-bold text-navy">
                Web <span className="text-brand">Development</span>
              </h2>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8">
              We build websites that are more than just pretty faces. Every site
              we deliver is custom-coded with <strong className="text-navy">React</strong> and{" "}
              <strong className="text-navy">Next.js</strong>, ensuring
              lightning-fast load times, top-tier SEO, and a seamless user
              experience that converts visitors into customers.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Our specialty? We&apos;ve carved a niche in building digital
              experiences for <strong className="text-navy">eco-lodges & resorts</strong>,{" "}
              <strong className="text-navy">export companies</strong>, and{" "}
              <strong className="text-navy">e-commerce brands</strong> — industries where first
              impressions are everything.
            </p>
            <ul className="space-y-3">
              {webFeatures.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex items-center gap-3 text-sm text-slate-600"
                >
                  <CheckCircle2 size={16} className="text-brand shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Specialty Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {[
              {
                icon: Hotel,
                title: "Eco-Lodges & Resorts",
                desc: "Immersive booking experiences with gallery-rich layouts, availability calendars, and multilingual support.",
              },
              {
                icon: Globe,
                title: "Export Companies",
                desc: "Professional brand websites showcasing product catalogs, certifications, and global trade credentials.",
              },
              {
                icon: ShoppingCart,
                title: "E-Commerce Platforms",
                desc: "High-converting online stores with payment gateways, inventory management, and order tracking.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-hover p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-brand-50 text-brand">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-navy font-semibold mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Tech Stack Badge */}
            <div className="card p-5">
              <p className="text-xs text-slate-400 font-mono uppercase tracking-wider mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Node.js",
                  "PostgreSQL",
                  "Prisma",
                  "Vercel",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-md text-xs font-mono text-slate-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* ─── Photography ─── */}
      <section id="photography" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo Grid Mock */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                icon: Package,
                label: "Product",
                color: "from-brand-50 to-brand-100",
              },
              {
                icon: Hotel,
                label: "Resort",
                color: "from-orange-50 to-amber-50",
              },
              {
                icon: Trees,
                label: "Nature",
                color: "from-green-50 to-emerald-50",
              },
              {
                icon: ImagePlus,
                label: "AI Enhanced",
                color: "from-purple-50 to-violet-50",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`card aspect-square flex flex-col items-center justify-center gap-3 bg-gradient-to-br ${item.color}`}
              >
                <item.icon size={32} className="text-brand" />
                <span className="text-sm text-navy font-medium">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand">
                <Camera size={24} />
              </div>
              <h2 className="text-3xl font-bold text-navy">
                Professional{" "}
                <span className="text-brand">Photography</span>
              </h2>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8">
              Every pixel matters. Our photography division delivers{" "}
              <strong className="text-navy">commercial-grade visuals</strong>{" "}
              that elevate your brand. From product flat-lays to sweeping resort
              aerials, we capture what makes your business unique.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              What sets us apart? Our{" "}
              <strong className="text-navy">AI-enhanced post-processing</strong>{" "}
              pipeline. We leverage cutting-edge tools to deliver flawless images
              with faster turnaround — without sacrificing the human creative eye.
            </p>
            <ul className="space-y-3">
              {photoFeatures.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex items-center gap-3 text-sm text-slate-600"
                >
                  <CheckCircle2
                    size={16}
                    className="text-brand shrink-0"
                  />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* ─── Digital Marketing ─── */}
      <section id="marketing" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand">
                <BarChart3 size={24} />
              </div>
              <h2 className="text-3xl font-bold text-navy">
                Digital{" "}
                <span className="text-brand">Marketing</span>
              </h2>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8">
              Visibility without strategy is noise. We craft{" "}
              <strong className="text-navy">
                data-driven marketing campaigns
              </strong>{" "}
              that put your brand in front of the right audience, at the right
              time, with the right message.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Our <strong className="text-navy">reputation management</strong>{" "}
              service ensures your online presence reflects the quality of your
              real-world work. Combined with strategic content and SEO, we build
              a digital footprint that compounds over time.
            </p>
            <ul className="space-y-3">
              {marketingFeatures.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex items-center gap-3 text-sm text-slate-600"
                >
                  <CheckCircle2 size={16} className="text-brand shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Marketing Stats Mock */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {[
              {
                icon: Search,
                title: "SEO & Search Visibility",
                stat: "+280%",
                desc: "Average organic traffic increase within 6 months.",
              },
              {
                icon: MessageSquare,
                title: "Social Media Growth",
                stat: "+3x",
                desc: "Typical engagement multiplier across platforms.",
              },
              {
                icon: TrendingUp,
                title: "Conversion Optimization",
                stat: "+65%",
                desc: "Average lead generation improvement for our clients.",
              },
              {
                icon: Star,
                title: "Reputation Management",
                stat: "4.8★",
                desc: "Average Google rating achieved for managed brands.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-hover p-6 flex items-center gap-5"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand shrink-0">
                  <item.icon size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-navy font-semibold text-sm">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                </div>
                <div className="text-2xl font-bold font-mono text-brand">
                  {item.stat}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-padding bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Need a custom <span className="text-brand">quote?</span>
          </h2>
          <p className="text-slate-500 mb-8">
            Every project is unique. Tell us what you need and we&apos;ll craft
            a tailored proposal within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-all shadow-lg shadow-brand/20"
          >
            Request a Proposal
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
