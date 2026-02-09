import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Univerz — Digital Agency | Web · Photo · Marketing",
  description:
    "From the shutter click to the server hit — we handle your entire digital presence. Custom web development, professional photography, and strategic digital marketing from Sri Lanka.",
  keywords: [
    "web development Sri Lanka",
    "digital agency",
    "photography",
    "eco-lodge websites",
    "export company websites",
    "e-commerce",
    "social media marketing",
    "SEO Sri Lanka",
  ],
  authors: [{ name: "Univerz Digital Agency" }],
  openGraph: {
    title: "Univerz — Digital Agency | Web · Photo · Marketing",
    description:
      "From the shutter click to the server hit — we handle your entire digital presence.",
    type: "website",
    locale: "en_US",
    siteName: "Univerz",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-navy antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
