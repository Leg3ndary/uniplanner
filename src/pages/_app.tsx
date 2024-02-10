import "@/styles/globals.css";
import Navigation from "@/components/Navigation";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";

const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    return (
        <main className={lato.className}>
            <SessionProvider session={session}>
                <Navigation />
                <Component {...pageProps} />
                <Footer />
            </SessionProvider>
        </main>
    );
}
