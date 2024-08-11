import Head from "next/head";
import Script from "next/script";

import { Inter, Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const ps2p = Press_Start_2P({
    subsets: ["latin"],
    weight: '400',
    variable: '--font-ps2p',
});

const dotGothic = VT323({
    subsets: ["latin"],
    weight: '400',
    variable: '--font-dotGothic',
});

export const metadata = {
    title: "Upsurge 2k24",
    description: "Get ready for Upsurge 2k24",
    openGraph: {
        title: "Upsurge 2k24",
        description: "Get ready for Upsurge 2k24",
        url: "https://upsurge2k24.tech/",
        type: "website",
        images: [
            {
                url: "https://upsurge2k24.tech/images/upsurge_logo.png",
            },
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="no-scrollbar">

            <Head>
                <meta property="og:title" content="Upsurge 2k24" />
                <meta property="og:description" content="Get ready for Upsurge 2k24" />
                <meta property="og:image" content="https://upsurge2k24.tech/images/upsurge_logo.png" />
                <meta property="og:url" content="https://upsurge2k24.tech/" />
                <meta property="og:type" content="website" />
            </Head>

            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SCQ6TF2C4E"></Script>
            <Script id="google-analytics" dangerouslySetInnerHTML={{
                __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-SCQ6TF2C4E');
                    `,
            }} />
            <body className={`${inter.className} ${ps2p.variable} ${dotGothic.variable}`}>{children}</body>
        </html>
    );
}
