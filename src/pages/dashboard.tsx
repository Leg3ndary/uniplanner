export default function Dashboard() {
    return (
        <main className="flex flex-col items-center min-h-screen">
            <div className="flex items-center justify-center w-full bg-cover bg-center h-128 bg-[url(/../hero.jpg)]">
                <h1 className="text-white">Dashboard</h1>
            </div>
            <div className="flex flex-col justify-center p-4 bg-white shadow-2xl rounded-xl">
                <h2>Organize your Grades</h2>
                <p>View different predicted outcomes based on your grades!</p>
            </div>
        </main>
    );
}
