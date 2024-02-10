import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
    const { data: session } = useSession();
    const navRef = useRef<HTMLDivElement>(null);

    function handleClickOutside(event: MouseEvent) {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setAccountPopup(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [accountPopup, setAccountPopup] = useState(false);

    return (
        <nav className="flex items-center justify-center w-full h-16 p-2 bg-gradient-to-r from-cyan-500 to-purple-500">
            <div className="flex 2xl:max-w-[1400px] w-full">
                <Link href="/" className="p-4 text-2xl font-black text-white">
                    UniPlanner
                </Link>
                <div className="flex items-center gap-10 ml-auto mr-2">
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
                    <div className="relative" ref={navRef}>
                        {session ? (
                            <div
                                onClick={() => setAccountPopup(!accountPopup)}
                                className="px-5 py-1 text-lg font-bold text-white transition-all duration-300 ease-in-out bg-transparent border-2 border-white border-solid rounded-md shadow-2xl cursor-pointer hover:border-cyan-400 hover:text-cyan-400"
                            >
                                Account
                            </div>
                        ) : (
                            <button
                                onClick={() => signIn("google")}
                                className="px-5 py-1 text-lg font-bold text-white transition-all duration-300 ease-in-out bg-transparent border-2 border-white border-solid rounded-md shadow-2xl cursor-pointer hover:border-cyan-400 hover:text-cyan-400"
                            >
                                Sign In
                            </button>
                        )}

                        <AnimatePresence>
                            {accountPopup && (
                                <motion.div
                                    className="absolute right-0 z-10 flex flex-col px-4 py-2 mt-2 bg-white rounded-md shadow-2xl top-full"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                >
                                    <Link
                                        href="/dashboard"
                                        className="text-lg font-bold text-black transition-all duration-300 ease-in-out hover:text-cyan-400"
                                        onClick={() => setAccountPopup(false)}
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={() => {
                                            signOut({ callbackUrl: "/" });
                                            setAccountPopup(false);
                                        }}
                                        className="text-lg font-bold text-black transition-all duration-300 ease-in-out hover:text-red-400"
                                    >
                                        Log Out
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </nav>
    );
}
