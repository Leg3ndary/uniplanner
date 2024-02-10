import Image from "next/image";
import Hero from "@/../public/hero.jpg";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-2">
            <div className="flex items-center justify-center h-96">
                <Image
                    src={Hero}
                    className="absolute -z-50"
                    layout="fill"
                    objectFit="cover"
                    alt="Hero"
                />
                <h1>UniPlanner</h1>
            </div>
            <div className="flex justify-center flex-col bg-white shadow-2xl p-4 rounded-xl">
                <h2>Organize your Grades</h2>
                <p>View different predicted outcomes based on your grades!</p>
            </div>
        </main>
    );
}
