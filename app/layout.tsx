import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sri Lakshmi Interior Works - Best Interior Designers in Pondicherry",
  description:
    "Transform your space with Sri Lakshmi Interior Works, leading interior designers in Pondicherry. Specializing in residential and commercial interiors.",
  keywords:
    "Sri Lakshmi Interior Works, interior designers Pondicherry, interior design Pondicherry, home interiors Pondicherry, office interiors Pondicherry, best interior designers",
  generator: "v0.dev",
  openGraph: {
    title:
      "Sri Lakshmi Interior Works - Best Interior Designers in Pondicherry",
    description:
      "Transform your space with Sri Lakshmi Interior Works, leading interior designers in Pondicherry. Specializing in residential and commercial interiors.",
    url: "https://yourwebsite.com", // Replace with your actual website URL
    siteName: "Sri Lakshmi Interior Works",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // Replace with a relevant image URL (e.g., a project photo or logo)
        width: 1200,
        height: 630,
        alt: "Sri Lakshmi Interior Works - Interior Design",
      },
    ],
    locale: "en_IN", // Adjust locale if needed
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sri Lakshmi Interior Works - Best Interior Designers in Pondicherry",
    description:
      "Transform your space with Sri Lakshmi Interior Works, leading interior designers in Pondicherry. Specializing in residential and commercial interiors.",
    creator: "@yourtwitterhandle", // Replace with your Twitter handle if you have one
    images: ["https://yourwebsite.com/twitter-image.jpg"], // Replace with a relevant image URL
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
        <link rel="icon" href="/logo.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
