import Link from "next/link";

export default function Footer() {
    return (
        <footer className="grid grid-cols-2 gap-40 items-center justify-center w-full p-2 bg-[#0F0F0F] h-96">
            <div className="flex flex-col">
                <h2 className="text-5xl font-bold text-white p-4 text-end">
                    UniPlanner
                </h2>
                <p className="text-white p-4 text-end">
                    UniPlanner helps students plan their academic journey.
                </p>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    <h3 className="text-3xl font-bold text-white my-4 underline underline-offset-8">
                        Quick Links
                    </h3>
                    <ul className="text-white text-xl space-y-1">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link href="/">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-3xl font-bold text-white my-4 underline underline-offset-8">
                        Contact
                    </h3>
                    <p className="text-white">
                        We will have an email here soon.
                    </p>
                </div>
            </div>
        </footer>
    );
}
