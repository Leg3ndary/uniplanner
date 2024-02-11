import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DefaultLayout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    );
}
