import DashLayout from "@/layouts/dashLayout";
import DashboardNavigation from "@/components/Navigation/DashboardNavigation";

export default function Grades() {
    return (
        <main className="flex w-full flex-col">
            <div className="h-48 bg-gradient-to-r from-yellow-500 to-fuchsia-500 w-full flex">
                <div className="relative w-64 mr-8">
                    <DashboardNavigation active="grades" />
                </div>
                <div className="flex-1 p-4">
                    <h1 className="text-white">Grades</h1>
                    <p className="text-white text-lg">Grades overview.</p>
                </div>
            </div>
            <div className="w-full flex">
                <div className="relative w-64" />
                <div className="flex-1 p-8 ml-4 grid grid-flow-row grid-cols-3 items-center justify-center gap-12">
                    <div className="flex flex-col bg-white shadow-2xl rounded-xl col-span-3">
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th>Course</th>
                                    <th>Grade</th>
                                    <th>Term</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Math 101</td>
                                    <td>90%</td>
                                    <td>Fall 2021</td>
                                </tr>
                                <tr>
                                    <td>English 101</td>
                                    <td>85%</td>
                                    <td>Fall 2021</td>
                                </tr>
                                <tr>
                                    <td>History 101</td>
                                    <td>80%</td>
                                    <td>Fall 2021</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}

Grades.getLayout = function getLayout(page: JSX.Element) {
    return <DashLayout>{page}</DashLayout>;
};
