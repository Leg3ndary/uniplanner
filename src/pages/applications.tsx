import DashLayout from "@/layouts/dashLayout";
import DashboardNavigation from "@/components/Navigation/DashboardNavigation";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import Waterloo from "@/../public/waterloo.png";

export default function Applications() {
    return (
        <main className="flex w-full flex-col">
            <div className="h-48 bg-purple-500 w-full flex">
                <div className="relative w-64 mr-8">
                    <DashboardNavigation active="applications" />
                </div>
                <div className="flex-1">
                    <h1 className="text-white">Applications</h1>
                    <p className="text-white">
                        Welcome to the dashboard, here you can view your
                        applications and more!sssss
                    </p>
                </div>
            </div>
            <div className="w-full flex">
                <div className="relative w-64" />
                <div className="flex-1 p-8 ml-4 grid grid-flow-row grid-cols-3 items-center justify-center gap-12">
                    <div className="flex justify-center mb-4 h-80 rounded-xl bg-white shadow-xl transition-all duration-800 ease-in-out cursor-pointer">
                        <div className="flex items-center h-12 m-4">
                            <Image
                                src={Waterloo}
                                alt="Waterloo"
                                className="rounded-xl h-12 w-12"
                            />

                            <h4 className="text-black mx-4 text-2xl">
                                University of Waterloo
                            </h4>
                        </div>
                    </div>
                    <div className="group flex items-center justify-center mb-4 border-4 h-80 border-gray-300 border-dashed bg-white rounded-xl hover:bg-gray-300 transition-all duration-800 ease-in-out cursor-pointer">
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