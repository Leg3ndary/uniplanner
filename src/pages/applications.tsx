import DashLayout from "@/layouts/dashLayout";
import DashboardNavigation from "@/components/Navigation/DashboardNavigation";
import { FaPlus } from "react-icons/fa";

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
                <div className="relative w-64 mx-8" />
                <div className="w-full m-4 p-4 grid grid-flow-row grid-cols-3">
                    {/* Add new application */}
                    <div className="flex items-center justify-center mb-4 border-4 h-64 border-gray-300 border-dashed rounded-xl">
                        <FaPlus className="text-gray-300 text-4xl" />
                        <h4 className="text-gray-300 mx-4">Add New</h4>
                    </div>
                </div>
            </div>
        </main>
    );
}

Applications.getLayout = function getLayout(page: JSX.Element) {
    return <DashLayout>{page}</DashLayout>;
};
