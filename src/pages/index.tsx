import Image from "next/image";
import DefaultLayout from "@/layouts/default";

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
            <section className="flex flex-col items-center justify-center w-full max-w-[1400px] p-4">
                <div className="flex items-center justify-center w-3/4 p-4 m-8 border-2">
                    <div className="flex flex-col justify-center flex-1 px-4 py-2 bg-white shadow-2xl rounded-xl">
                        <h2 className="text-center">View Applications</h2>
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
                <div className="flex items-center justify-center w-3/4 p-4 m-8 border-2">
                    <div className="flex items-center justify-center w-1/2">
                        <img
                            src="http://placekitten.com/g/400/300"
                            alt="Hero"
                            className="shadow-2xl rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col justify-center flex-1 px-4 py-2 bg-white shadow-2xl rounded-xl">
                        <h2 className="text-center">Academic Roadmap</h2>
                        <p>
                            View different predicted outcomes based on your
                            grades!
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center w-3/4 p-4 m-8 border-2">
                    <div className="flex flex-col justify-center flex-1 px-4 py-2 bg-white shadow-2xl rounded-xl">
                        <h2 className="text-center">Organize your Grades</h2>
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
            </section>
        </main>
    );
}

Home.getLayout = function getLayout(page: JSX.Element) {
    return <DefaultLayout>{page}</DefaultLayout>;
};
