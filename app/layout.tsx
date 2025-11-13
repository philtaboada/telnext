import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Telnex Perú | Internet Ultrarrápido y Soluciones Inalámbricas",
  description:
    "Planes de internet ultrarrápido, radioenlaces dedicados y soporte técnico especializado para hogares y empresas en Perú.",
  keywords: [
    "Internet Perú",
    "Telnex",
    "planes de internet",
    "radioenlaces",
    "fibra óptica",
    "soporte técnico",
  ],
  metadataBase: new URL("https://telnextperu.com"),
  icons: {
    icon: "/f.png",
    apple: "/f.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
