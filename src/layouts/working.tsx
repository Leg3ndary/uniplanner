import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function WorkingLayout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    );
}
