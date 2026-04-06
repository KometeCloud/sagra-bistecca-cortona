import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sagradellabistecca.com"),
  title: {
    default: "65° Sagra della Bistecca - Cortona 2026",
    template: "%s | Sagra della Bistecca Cortona",
  },
  description:
    "La Sagra della Bistecca di Cortona: bistecca Chianina cotta al sangue, la griglia più grande d'Italia. 11-15 Agosto 2026, Giardini del Parterre, Cortona.",
  keywords: [
    "Sagra della Bistecca",
    "Cortona",
    "bistecca Chianina",
    "sagra Toscana",
    "Giardini del Parterre",
    "sagra 2026",
    "bistecca alla fiorentina",
    "Valdichiana",
  ],
  openGraph: {
    title: "65° Sagra della Bistecca - Cortona 2026",
    description:
      "La sagra toscana più amata: bistecca Chianina e la griglia più grande d'Italia. 11-15 Agosto 2026.",
    url: "https://sagradellabistecca.com",
    siteName: "Sagra della Bistecca Cortona",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/immagini/loghi/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "65° Sagra della Bistecca - Cortona 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "65° Sagra della Bistecca - Cortona 2026",
    description: "La sagra toscana più amata. 11-15 Agosto 2026, Cortona.",
    images: ["/immagini/loghi/og-image.jpg"],
  },
  alternates: {
    canonical: "https://sagradellabistecca.com",
    languages: {
      "it": "https://sagradellabistecca.com/it",
      "en": "https://sagradellabistecca.com/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C83KV73JHP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C83KV73JHP');
          `}
        </Script>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
