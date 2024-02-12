import DashLayout from "@/layouts/dashLayout";
import DashboardNavigation from "@/components/Navigation/DashboardNavigation";

export default function Applications() {
    return (
        <main className="flex w-full">
            <div className="h-48 bg-emerald-500 w-full flex">
                <div className="relative w-64 mr-8">
                    <DashboardNavigation active="grades" />
                </div>
                <div className="flex-1">
                    <h1 className="text-white">Grades</h1>
                    <p className="text-white">
                        Welcome to the dashboard, here you can view your
                        applications and more!sssss
                    </p>
                </div>
            </div>
        </main>
    );
}

Applications.getLayout = function getLayout(page: JSX.Element) {
    return <DashLayout>{page}</DashLayout>;
};
