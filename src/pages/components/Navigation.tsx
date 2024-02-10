import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="flex justify-center items-center p-2 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 w-full">
            <div className="flex 2xl:max-w-[1400px] w-full">
                <Link href="/" className="self-start">
                    <p className="font-black text-white text-2xl p-4">
                        UniPlanner
                    </p>
                </Link>
            </div>
        </nav>
    );
}
