import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col items-center min-h-screen">
            <div className="relative flex flex-col items-center justify-center w-full bg-center bg-cover h-128 bg-[url('/../hero.jpg')]">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h1 className="z-10 text-white">UniPlanner</h1>
                <h4 className="z-10 text-white">
                    Empowering students to effectively plan, organize, and
                    navigate their university applications.
                </h4>
            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-[1400px] p-4">
                <div className="flex items-center justify-center w-11/12 p-4 border-2">
                    <div className="flex flex-col justify-center flex-1 px-4 py-2 bg-white shadow-2xl rounded-xl">
                        <h2>Organize your Grades</h2>
                        <p>
                            View different predicted outcomes based on your
                            grades!
                        </p>
                    </div>
                    <div className="flex items-center justify-center w-1/2">
                        <img
                            src="http://placekitten.com/g/400/300"
                            alt="Hero"
                            className="shadow-2xl rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
