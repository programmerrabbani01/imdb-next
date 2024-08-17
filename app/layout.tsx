import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header.tsx";
import Provider from "@/components/Provider/Provider.tsx";
import NavBar from "@/components/NavBar/NavBar.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB CLONE",
  description: "This Is A Movie Database Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <NavBar/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
