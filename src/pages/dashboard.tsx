import WorkingLayout from "@/layouts/dashboardLayout";
import DashboardNavigation from "@/components/Navigation/DashboardNavigation";

export default function Dashboard() {
    return (
        <main className="flex w-full min-h-screen">
            <div className="relative w-[275px]">
                <DashboardNavigation />
            </div>
            <div className="bg-blue-500 flex-1">
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
    return <WorkingLayout>{page}</WorkingLayout>;
};
