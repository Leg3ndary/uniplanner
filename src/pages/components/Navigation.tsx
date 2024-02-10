import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navigation() {
    const { data: session } = useSession();

    return (
        <nav className="flex items-center justify-center w-full h-16 p-2 bg-gradient-to-r from-cyan-500 to-purple-500">
            <div className="flex 2xl:max-w-[1400px] w-full">
                <Link href="/" className="p-4 text-2xl font-black text-white">
                    UniPlanner
                </Link>
                <div className="flex items-center self-center gap-10 ml-auto mr-2">
                    <Link
                        href="/"
                        className="text-lg font-extrabold text-white transition-all duration-300 ease-in-out hover:text-cyan-400"
                    >
                        Home
                    </Link>
                    <Link
                        href="/pricing"
                        className="text-lg font-bold text-white transition-all duration-300 ease-in-out hover:text-cyan-400"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/about"
                        className="text-lg font-bold text-white transition-all duration-300 ease-in-out hover:text-cyan-400"
                    >
                        About
                    </Link>
                    {session ? (
                        // <Link
                        //     href="/dashboard"
                        //     className="px-5 py-1 text-lg font-bold text-white transition-all duration-300 ease-in-out bg-transparent border-2 border-white border-solid rounded-md shadow-2xl hover:border-cyan-400 hover:text-cyan-400"
                        // >
                        //     Dashboard
                        // </Link>
                        <button
                            onClick={() => signOut()}
                            className="px-5 py-1 text-lg font-bold text-white transition-all duration-300 ease-in-out bg-transparent border-2 border-white border-solid rounded-md shadow-2xl hover:border-cyan-400 hover:text-cyan-400"
                        >
                            Dashboard
                        </button>
                    ) : (
                        <button
                            onClick={() => signIn("google")}
                            className="px-5 py-1 text-lg font-bold text-white transition-all duration-300 ease-in-out bg-transparent border-2 border-white border-solid rounded-md shadow-2xl hover:border-cyan-400 hover:text-cyan-400"
                        >
                            Log In
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
