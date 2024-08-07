import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const ps2p = Press_Start_2P({ 
    subsets: ["latin"],
    weight: '400',
    variable: '--font-ps2p',
});

export const metadata = {
  title: "Upsurge 2k24",
  description: "Get ready for Upsurge 2k24",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={`${inter.className} ${ps2p.variable}`}>{children}</body>
    </html>
  );
}
