import Link from "next/link";

export default function Footer() {
    return (
        <footer className=" w-full p-16 md:p-2 bg-[#0F0F0F] md:h-96 flex justify-center items-center">
            <div className="flex flex-col md:flex-row gap-36 items-center justify-between max-w-[1400px]">
                <div className="flex flex-col items-center md:items-end -mb-36 md:mb-0">
                    <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 p-4 text-end">
                        UniPlanner
                    </h2>
                    <p className="text-white p-4 text-center md:text-end text-lg">
                        Helping students plan their academic journey.
                    </p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 my-4">
                        Quick Links
                        <div className="h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 w-full" />
                    </h3>

                    <ul className="text-white text-lg space-y-1">
                        <li>
                            <Link
                                href="/"
                                className="transition-all duration-300 ease-in-out hover:text-cyan-400"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="transition-all duration-300 ease-in-out hover:text-cyan-400"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/pricing"
                                className="transition-all duration-300 ease-in-out hover:text-cyan-400"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="transition-all duration-300 ease-in-out hover:text-cyan-400"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 my-4">
                        Contact
                        <div className="h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 w-full" />
                    </h3>
                    <p className="text-white">
                        We will have an email here soon.
                    </p>
                </div>
            </div>
        </footer>
    );
}
