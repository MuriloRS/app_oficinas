import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ReactQueryProvider from "@/providers/QueryClientProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MechSearch - Encontre oficinas confiáveis perto de você",
  description:
    "Conecte-se com profissionais automotivos certificados na sua região. Receba orçamentos, compare serviços e agende consultas instantemente.",
  keywords: "oficina, mecânico, carro, reparo, automóvel, serviços automotivos",
  authors: [{ name: "MechSearch" }],
  robots: "index, follow",
  openGraph: {
    title: "MechSearch - Encontre oficinas confiáveis",
    description: "Conecte-se com profissionais automotivos certificados",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}`}
        style={{ margin: 0, overflowX: "hidden" }}
      >
        <ReactQueryProvider>
          <Navbar hideSearchbar={true} />
          <main>{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
