import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Toaster } from "sonner";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pick & Drop Shuttle Service | Airport Transfers & Sri Lanka Tourism Shuttle",
  description:
    "Pick & Drop Shuttle Service — Sri Lanka's trusted airport pickup and tourism shuttle for foreign tourists. Professional transfers from BIA Colombo & Mattala airport to Colombo, Galle, Ella, Sigiriya and all island-wide destinations. Book your Sri Lanka travel shuttle today.",
  keywords: [
    // Airport & transfers
    "airport transfer Sri Lanka",
    "Sri Lanka airport pickup",
    "BIA airport taxi",
    "Bandaranaike airport pickup",
    "Colombo airport transfer",
    "Mattala airport taxi",
    "airport pickup Sri Lanka tourists",
    "Sri Lanka airport shuttle",
    // Tourism & foreign tourists
    "Sri Lanka tourism transport",
    "Sri Lanka tourist shuttle",
    "taxi for tourists Sri Lanka",
    "Sri Lanka travel service",
    "private driver Sri Lanka tourism",
    "Sri Lanka sightseeing taxi",
    "foreign tourist transport Sri Lanka",
    "Sri Lanka holiday transfer",
    "Sri Lanka travel taxi",
    // Shuttle service
    "shuttle service Sri Lanka",
    "Pick and Drop shuttle service",
    "island wide shuttle Sri Lanka",
    "long distance taxi Sri Lanka",
    "hotel pickup Sri Lanka",
    "hotel to airport Sri Lanka",
    // Destinations
    "Colombo taxi",
    "Galle taxi",
    "Ella taxi",
    "Sigiriya tour transfer",
    "Kandy day tour taxi",
    "Mirissa beach transfer",
    "Negombo airport taxi",
    // Brand
    "Pick and Drop Sri Lanka",
    "pickanddropshuttleservice.com",
  ],
  authors: [{ name: "Pick & Drop Shuttle Service" }],
  creator: "Pick & Drop Shuttle Service",
  publisher: "Pick & Drop Shuttle Service",
  metadataBase: new URL("https://pickanddropshuttleservice.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pick & Drop Shuttle Service | Airport Transfers & Sri Lanka Tourism Shuttle",
    description:
      "Sri Lanka's trusted airport pickup and tourism shuttle for foreign tourists. Professional transfers from BIA Colombo to Galle, Ella, Sigiriya and all island destinations. Book now.",
    url: "https://pickanddropshuttleservice.com",
    siteName: "Pick & Drop Shuttle Service",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pick & Drop Shuttle Service - Airport Transfers & Sri Lanka Tourism Taxi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pick & Drop Shuttle Service | Airport Transfers & Sri Lanka Tourism Shuttle",
    description:
      "Sri Lanka's trusted airport pickup and tourism shuttle for foreign tourists. Transfers from BIA Colombo to all island destinations.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
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
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Toaster position="top-center" richColors />
        {children}
      </body>
    </html>
  );
}
