import type { Metadata } from "next";
import "./globals.css";
import { Lexend_Deca, Poppins, Roboto } from "next/font/google";

const lexend_deca = Lexend_Deca({
  subsets: ["latin"],
  display: "auto",
  variable: "--font-lexend-deca",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Book Management System",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${lexend_deca.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
