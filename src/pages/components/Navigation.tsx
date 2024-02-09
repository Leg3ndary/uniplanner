import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="flex items-center justify-between p-2 h-16 bg-sky-500 w-full">
            <Link href="/">
                <p className="font-black text-2xl p-4">UniPlanner</p>
            </Link>
        </nav>
    );
}
