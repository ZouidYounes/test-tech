import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../../node_modules/@trilogy-ds/styles/dist/default/trilogy.css";
import "swiper/css";
import "swiper/css/pagination";

// I added Bouygues Font
const bouyguesRead = localFont({
  src: [
    {
      path: '/fonts/107a69639b4f2333c95cd66f8eb38f9e.woff',
      weight: '400', 
      style: 'normal', 
    },
    {
      path: '/fonts/107a69639b4f2333c95cd66f8eb38f9e.woff2',
      weight: '400', 
      style: 'normal',
    },
  ],
  variable: '--font-bouygues',
});

export const metadata: Metadata = {
  title: "Test Technique pour AFD.tech",
  description: "Page front à créer en se basant sur une maquette Figma et en utilisant Trilogy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${bouyguesRead.variable} antialiased`}
      >
          {children}
      </body>
    </html >
  );
}
