import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { RxDashboard } from "react-icons/rx";
import { FaClipboardList } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";

export default function DashboardNavigation({ active }: { active: string }) {
    const { data: session } = useSession();
    const userImage = session?.user?.picture ?? "";

    return (
        <nav className="flex items-center flex-col h-[calc(100svh-2rem)] w-64 m-4 bg-white drop-shadow-lg rounded-xl top-0 fixed z-10">
            <Link
                href="/"
                className="text-center font-black text-4xl my-2 mt-4"
            >
                UniPlanner
            </Link>
            <div className="h-[1px] w-10/12 bg-slate-200 rounded-full my-2" />
            <div className="flex flex-col w-full px-4">
                <Link
                    href="/dashboard"
                    className={`flex items-center p-3 my-1 rounded-xl px-4 transition-all duration-400 ease-in-out ${
                        active === "dashboard"
                            ? "font-semibold bg-cyan-50/95 hover:bg-cyan-100/95"
                            : "hover:bg-cyan-50/95"
                    }`}
                >
                    <RxDashboard className="text-xl mr-4 text-cyan-500" />
                    Dashboard
                </Link>
                <Link
                    href="/applications"
                    className={`flex items-center p-3 my-1 rounded-xl px-4 transition-all duration-400 ease-in-out ${
                        active === "applications"
                            ? "font-semibold bg-purple-100/95 hover:bg-purple-200/95"
                            : "hover:bg-purple-100/95"
                    }`}
                >
                    <FaClipboardList className="text-xl mr-4 text-purple-500" />
                    Applications
                </Link>
                <Link
                    href="/grades"
                    className={`flex items-center p-3 my-1 rounded-xl px-4 transition-all duration-400 ease-in-out ${
                        active === "grades"
                            ? "font-semibold bg-emerald-100/95 hover:bg-emerald-200/95"
                            : "hover:bg-emerald-100/95"
                    }`}
                >
                    <FaBookBookmark className="text-xl mr-4 text-emerald-500" />
                    Grades
                </Link>
            </div>
            <div className="h-[1px] w-10/12 bg-slate-200 rounded-full mt-auto mb-4" />
            <div className="flex items-center justify-center w-full mb-4">
                <Image
                    src={userImage}
                    alt="User Image"
                    width={30}
                    height={30}
                    className="rounded-full -ml-4 mr-4"
                    unoptimized
                />
                <p className="">{session?.user?.name}</p>
            </div>
        </nav>
    );
}
