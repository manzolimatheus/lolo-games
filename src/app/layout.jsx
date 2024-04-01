import { Inter } from "next/font/google";
import "./globals.css";

import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

/**
 * @type {Metadata}
 */
export const metadata = {
  title: "LoLo | Jogos para crianças",
  description: "Jogos para crianças",
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  other: {
    mobileWebAppCapable: "yes",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} overflow-hidden h-screen w-screen`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
