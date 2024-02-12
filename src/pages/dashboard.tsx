import DashLayout from "@/layouts/dashLayout";
import DashboardNavigation from "@/components/Navigation/DashboardNavigation";

export default function Dashboard() {
    return (
        <main className="flex w-full h-48 bg-blue-500">
            <div className="relative w-64 mr-8">
                <DashboardNavigation active="dashboard" />
            </div>
            <div className="flex-1">
                <h1 className="text-white">Dashboard</h1>
                <p className="text-white">
                    Welcome to the dashboard, here you can view your
                    applications and more!sssss
                </p>
                <p className="my-96">po</p>
                <p className="my-96">po</p>
                <p className="my-96">po</p>
            </div>
        </main>
    );
}

Dashboard.getLayout = function getLayout(page: JSX.Element) {
    return <DashLayout>{page}</DashLayout>;
};
