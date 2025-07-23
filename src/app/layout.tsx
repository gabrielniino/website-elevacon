import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Configuração das fontes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Otimização para carregamento de fonte
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Metadados da aplicação
export const metadata: Metadata = {
  title: {
    default: "ElevaCon - Soluções Contábeis",
    template: "%s | ElevaCon"
  },
  description: "Desenvolvemos soluções digitais inovadoras que transformam negócios. Especialistas em desenvolvimento web, design UI/UX e consultoria digital.",
  authors: [{ name: "ElevaCon - Desenvolvimento" }],
  creator: "ElevaCon",
  publisher: "ElevaCon",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect para melhor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* <link rel="manifest" href="/manifest.json" /> */}

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >

        {/* Navegação principal */}
        <Header />

        {/* Conteúdo principal */}
        <main >
          {children}
        </main>

        {/* Footer será adicionado aqui futuramente */}
        <Footer />
      </body>
    </html>
  );
}