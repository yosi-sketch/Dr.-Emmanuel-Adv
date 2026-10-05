import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const title = "Dr. Emmanuel Carlos de Souza | Itabira, MG";
const description = "Dr. Emmanuel Carlos de Souza, OAB/MG 232.059. Advocacia criminal e de família em Itabira, MG. Orientação clara, escuta atenta e acompanhamento individual. Agende um atendimento.";

export const metadata: Metadata = {
  applicationName: "Dr. Emmanuel Carlos de Souza",
  title, description,
  keywords: ["Dr. Emmanuel Carlos de Souza", "Emmanuel Souza advogado", "advogado em Itabira", "advocacia criminal", "Tribunal do Júri", "Direito de Família", "consultoria jurídica", "OAB/MG 232.059"],
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "pt_BR", title, description, siteName: "Dr. Emmanuel Carlos de Souza" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={bodyFont.variable + " " + displayFont.variable + " scroll-smooth"}>
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
