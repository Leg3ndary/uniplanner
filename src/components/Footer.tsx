import Link from "next/link";

export default function Footer() {
    return (
        <footer className="grid grid-cols-3 gap-8 items-center justify-center w-full p-2 bg-[#0F0F0F] h-96">
            <div className="flex flex-col">
                <h2 className="text-5xl font-bold text-white p-4 text-end">
                    UniPlanner
                </h2>
                <p className="text-white p-4 text-end">
                    UniPlanner helps students plan their academic journey.
                </p>
            </div>
            <div className="flex flex-col">
                <h4 className="text-2xl font-black text-white text-center">
                    Quick Links
                </h4>
                <ul className="text-white text-xl">
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
            <div className="">
                <h4 className="text-2xl font-black text-white">Contact</h4>
                <p className="text-white">I will put some place here later</p>
            </div>
        </footer>
    );
}
