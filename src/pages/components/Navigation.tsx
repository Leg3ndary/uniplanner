import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navigation() {
    const { data: session } = useSession();

    return (
        <nav className="flex justify-center items-center p-2 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 w-full">
            <div className="flex 2xl:max-w-[1400px] w-full">
                <Link href="/" className="">
                    <p className="font-black text-white text-2xl p-4">
                        UniPlanner
                    </p>
                </Link>
                <div className="self-center mr-2 ml-auto">
                    {session ? (
                        <button
                            onClick={() => signOut()}
                            className="bg-white text-black p-2 rounded-md"
                        >
                            Sign Out
                        </button>
                    ) : (
                        <button
                            onClick={() => signIn("google")}
                            className="bg-white text-black p-2 rounded-md"
                        >
                            Sign In
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
