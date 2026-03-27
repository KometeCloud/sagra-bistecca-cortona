import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
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
  title: "65° Sagra della Bistecca - Cortona",
  description:
    "La Sagra della Bistecca di Cortona: bistecca Chianina cotta al sangue, la griglia più grande d'Italia. Giardini del Parterre, Cortona.",
  openGraph: {
    title: "65° Sagra della Bistecca - Cortona",
    description:
      "La sagra toscana più amata: bistecca Chianina e la griglia più grande d'Italia.",
    locale: "it_IT",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
