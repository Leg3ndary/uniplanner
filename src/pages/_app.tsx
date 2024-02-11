import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { NextComponentType, NextPageContext } from "next";

const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});

type ModifiedAppProps = AppProps & {
    Component: NextComponentType<NextPageContext, any, any> & {
        getLayout?: (page: JSX.Element) => JSX.Element;
    };
};

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: ModifiedAppProps) {
    const getLayout = Component.getLayout ?? ((page) => page);

    const Layout = getLayout(
        <div className={lato.className}>
            <Component {...pageProps} />
        </div>
    );

    return (
        <SessionProvider session={session}>
            {Layout}
        </SessionProvider>
    );
}
