import DashLayout from "@/layouts/dashLayout";
import DashboardNavigation from "@/components/Navigation/DashboardNavigation";
import { useSession } from "next-auth/react";
export default function Dashboard() {
    const { data: session } = useSession();
    return (
        <main className="flex w-full">
            <div className="h-48 bg-gradient-to-r from-cyan-500 to-purple-600 w-full flex">
                <div className="relative w-64 mr-8">
                    <DashboardNavigation active="dashboard" />
                </div>
                <div className="flex-1 p-4">
                    <h1 className="text-white">Dashboard</h1>
                    <p className="text-white text-lg">Welcome back {session?.user.name}</p>
                </div>
            </div>
        </main>
    );
}

Dashboard.getLayout = function getLayout(page: JSX.Element) {
    return <DashLayout>{page}</DashLayout>;
};
