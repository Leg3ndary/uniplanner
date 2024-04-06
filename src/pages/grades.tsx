import DashLayout from "@/layouts/dashLayout";
import DashboardNavigation from "@/components/Navigation/DashboardNavigation";

export default function Grades() {
    return (
        <main className="flex w-full">
            <div className="h-48 bg-gradient-to-r from-yellow-500 to-fuchsia-500 w-full flex">
                <div className="relative w-64 mr-8">
                    <DashboardNavigation active="grades" />
                </div>
                <div className="flex-1 p-4">
                    <h1 className="text-white">Grades</h1>
                    <p className="text-white text-lg">
                        Grades overview.
                    </p>
                </div>
            </div>
        </main>
    );
}

Grades.getLayout = function getLayout(page: JSX.Element) {
    return <DashLayout>{page}</DashLayout>;
};
