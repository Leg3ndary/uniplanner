import Navigation from "@/components/Navigation/DefaultNavigation";
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
