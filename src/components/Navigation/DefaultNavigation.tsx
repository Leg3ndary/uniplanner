import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxDashboard } from "react-icons/rx";
import { FaSignOutAlt, FaHome } from "react-icons/fa";

export default function DefaultNavigation() {
    const { data: session } = useSession();
    const navRef = useRef<HTMLDivElement>(null);
    const mobileRef = useRef<HTMLDivElement>(null);

    function handleClickOutside(event: MouseEvent) {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setAccountPopup(false);
        }

        if (
            mobileRef.current &&
            !mobileRef.current.contains(event.target as Node)
        ) {
            setMobileMenuOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [accountPopup, setAccountPopup] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-center w-full h-16 p-2 bg-gradient-to-r from-cyan-500 to-purple-500">
            <div className="flex 2xl:max-w-[1400px] w-full">
                <Link href="/" className="p-4 text-2xl font-black text-white">
                    UniPlanner
                </Link>
                <div className="hidden md:flex items-center gap-10 ml-auto mr-2">
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
                                onClick={() =>
                                    signIn("google", {
                                        callbackUrl: "/dashboard",
                                    })
                                }
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
                                        <div className="flex items-center gap-2">
                                            <RxDashboard />
                                            Dashboard
                                        </div>
                                    </Link>

                                    <button
                                        onClick={() => {
                                            signOut({ callbackUrl: "/" });
                                            setAccountPopup(false);
                                        }}
                                        className="text-lg font-bold text-black transition-all duration-300 ease-in-out hover:text-red-400"
                                    >
                                        <div className="flex items-center gap-2">
                                            <FaSignOutAlt />
                                            Sign Out
                                        </div>
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="md:hidden flex self-center mr-4 ml-auto">
                    <div
                        className="text-white cursor-pointer self-center"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 80 60"
                            fill="currentColor"
                            className="h-10 w-10"
                        >
                            <rect width="80" height="10" rx="5"></rect>
                            <rect y="25" width="80" height="10" rx="5"></rect>
                            <rect y="50" width="80" height="10" rx="5"></rect>
                        </svg>
                    </div>
                    <AnimatePresence>
                        {mobileMenuOpen && (
                            <motion.div
                                className="absolute top-20 right-4 z-10 flex flex-col p-4 bg-white rounded-md shadow-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                ref={mobileRef}
                            >
                                <Link
                                    href="/"
                                    className="text-lg font-bold text-black transition-all duration-300 ease-in-out hover:text-cyan-400"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-2">
                                        <FaHome />
                                        Home
                                    </div>
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="text-lg font-bold text-black transition-all duration-300 ease-in-out hover:text-cyan-400"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Pricing
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-lg font-bold text-black transition-all duration-300 ease-in-out hover:text-cyan-400"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About
                                </Link>
                                {session ? (
                                    <Link
                                        href="/dashboard"
                                        className="text-lg font-bold text-black transition-all duration-300 ease-in-out hover:text-cyan-400"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <div className="flex items-center gap-2">
                                            <RxDashboard />
                                            Dashboard
                                        </div>
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() => {
                                            signIn("google", {
                                                callbackUrl: "/dashboard",
                                            });
                                            setMobileMenuOpen(false);
                                        }}
                                        className="text-lg font-bold text-black transition-all duration-300 ease-in-out hover:text-cyan-400"
                                    >
                                        Sign In
                                    </button>
                                )}
                                {session && (
                                    <button
                                        onClick={() => {
                                            signOut({ callbackUrl: "/" });
                                            setMobileMenuOpen(false);
                                        }}
                                        className="text-lg font-bold text-black transition-all duration-300 ease-in-out hover:text-red-400"
                                    >
                                        <div className="flex items-center gap-2">
                                            <FaSignOutAlt />
                                            Sign Out
                                        </div>
                                    </button>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
}
