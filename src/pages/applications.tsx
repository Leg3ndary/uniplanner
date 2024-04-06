import DashLayout from "@/layouts/dashLayout";
import DashboardNavigation from "@/components/Navigation/DashboardNavigation";
import { FaPlus } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Waterloo from "@/../public/waterloo.png";
import type {
    InferGetServerSidePropsType,
    GetServerSidePropsContext,
} from "next";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/lib/prisma";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrashCan } from "react-icons/fa6";

export const getServerSideProps: any = (async (
    context: GetServerSidePropsContext,
) => {
    const session = await getServerSession(
        context.req,
        context.res,
        authOptions,
    );

    if (!session) {
        return {
            props: { applications: [] },
        };
    }

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email as string,
        },
    });

    if (!user) {
        return {
            props: { applications: [] },
        };
    }

    const apps = await prisma.application.findMany({
        where: {
            userId: user.id,
        },
    });

    return {
        props: {
            applications: apps as unknown as Prisma.ApplicationCreateInput[],
        },
    };
}) satisfies InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Applications({
    applications,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [createAppOpen, setCreateAppOpen] = useState(false);
    const createAppRef = useRef<HTMLDivElement>(null);

    async function createApplication(title: string) {
        await fetch("/api/applications/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                slug: "new-application",
            }),
        });
    }

    function clickOutCreateApp(e: MouseEvent) {
        if (
            createAppRef.current &&
            !createAppRef.current.contains(e.target as Node)
        ) {
            setCreateAppOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", clickOutCreateApp);

        return () => {
            document.removeEventListener("mousedown", clickOutCreateApp);
        };
    }, []);

    return (
        <main className="flex w-full flex-col">
            <AnimatePresence>
                {createAppOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bg-[#00000080] h-screen w-screen z-50 flex p-16 px-32"
                    >
                        <div
                            className="relative m-auto h-full w-full max-h-[700px] max-w-[1300px] bg-white p-3 rounded-xl"
                            ref={createAppRef}
                        >
                            <div className="absolute top-0 right-0 m-6 cursor-pointer">
                                <FaTrashCan
                                    onClick={() => setCreateAppOpen(false)}
                                    className="text-3xl text-red-500"
                                />
                            </div>
                            <h3 className="px-3">Create Application</h3>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="h-48 bg-gradient-to-r from-green-500 to-cyan-500 w-full flex">
                <div className="relative w-64 mr-8">
                    <DashboardNavigation active="applications" />
                </div>
                <div className="flex-1 p-4">
                    <h1 className="text-white">Applications</h1>
                    <p className="text-white text-lg">
                        You have {applications.length} applications created.
                    </p>
                </div>
            </div>
            <div className="w-full flex">
                <div className="relative w-64" />
                <div className="flex-1 p-8 ml-4 grid grid-flow-row grid-cols-3 items-center justify-center gap-12">
                    {applications.map((app: Prisma.ApplicationCreateInput) => (
                        <div
                            key={app.slug}
                            className="flex justify-center mb-4 h-80 rounded-xl bg-white shadow-xl transition-all duration-800 ease-in-out cursor-pointer"
                        >
                            <div className="flex items-center h-12 m-4">
                                <Image
                                    src={Waterloo}
                                    alt="Waterloo"
                                    className="rounded-xl h-12 w-12"
                                />

                                <h4 className="text-black mx-4 text-2xl">
                                    {app.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                    <div
                        onClick={() => setCreateAppOpen(true)}
                        className="group flex items-center justify-center mb-4 border-4 h-80 border-gray-300 border-dashed bg-white rounded-xl hover:bg-gray-300 transition-all duration-800 ease-in-out cursor-pointer"
                    >
                        <FaPlus className="text-gray-300 group-hover:text-white duration-800 transition-all text-4xl" />
                        <h4 className="text-gray-300 group-hover:text-white duration-800 transition-all mx-4">
                            Add New
                        </h4>
                    </div>
                </div>
            </div>
        </main>
    );
}

Applications.getLayout = function getLayout(page: JSX.Element) {
    return <DashLayout>{page}</DashLayout>;
};
