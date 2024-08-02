import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Upsurge 2k24",
  description: "Get ready for Upsurge 2k24",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden no-scrollbar`}>{children}</body>
    </html>
  );
}
