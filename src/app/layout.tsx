import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Kisah Sahabat Nabi - Interactive Storybook for Kids",
  description: "A fun, animated, interactive storybook about the Prophet's Companions for preschool children. Learn beautiful Islamic values through engaging stories.",
  keywords: ["Sahabat Nabi", "Islamic stories for kids", "preschool storybook", "animated book", "Bilal", "Abu Bakar", "Khadijah", "Umar"],
  authors: [{ name: "Storybook for Little Muslims" }],
  openGraph: {
    title: "Kisah Sahabat Nabi - Interactive Storybook for Kids",
    description: "A fun, animated, interactive storybook about the Prophet's Companions for preschool children.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kisah Sahabat Nabi - Interactive Storybook for Kids",
    description: "A fun, animated, interactive storybook about the Prophet's Companions for preschool children.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
