import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sahabat-kecil.app"),
  title: "Sahabat Kecil — Interactive Islamic Storybook for Kids",
  description: "Sahabat Kecil is a fun, animated, interactive storybook about the Prophet's Companions for preschool children. Available in English, Bahasa Melayu, Bahasa Indonesia, and Arabic. Learn beautiful Islamic values through engaging stories.",
  keywords: ["Sahabat Kecil", "Sahabat Nabi", "Islamic stories for kids", "preschool storybook", "animated book", "Bilal", "Abu Bakar", "Khadijah", "Umar", "cerita kanak-kanak", "Bahasa Melayu", "Bahasa Indonesia", "Arabic", "qisas sahabat", "buku cerita Islam"],
  authors: [{ name: "Sahabat Kecil" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/logo.svg"],
  },
  appleWebApp: {
    capable: true,
    title: "Sahabat Kecil",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "Sahabat Kecil — Interactive Islamic Storybook for Kids",
    description: "A fun, animated, interactive storybook about the Prophet's Companions for preschool children. English, Malay, Indonesian & Arabic.",
    type: "website",
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: "Sahabat Kecil Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahabat Kecil — Interactive Islamic Storybook for Kids",
    description: "A fun, animated, interactive storybook about the Prophet's Companions for preschool children.",
    images: ["/icon-512.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0D9488",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoNaskhArabic.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
