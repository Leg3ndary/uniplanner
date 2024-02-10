import Image from "next/image";
import Hero from "@/../public/hero.jpg";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className="flex items-center justify-center w-full bg-cover bg-center h-128 bg-[url(/../hero.jpg)]">
                <h1 className="text-white">UniPlanner</h1>
                
            </div>
            <div className="flex justify-center flex-col bg-white shadow-2xl p-4 rounded-xl">
                <h2>Organize your Grades</h2>
                <p>View different predicted outcomes based on your grades!</p>
            </div>
        </main>
    );
}
