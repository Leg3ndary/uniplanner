import Image from "next/image";
import DefaultLayout from "@/layouts/default";

export default function Home() {
    return (
        <main className="flex flex-col items-center min-h-screen">
            <div className="relative flex flex-col items-center justify-center w-full bg-center bg-cover h-64 md:h-128 bg-[url('/../hero.jpg')] p-4">
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <h1 className="z-10  text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 text-4xl md:text-6xl lg:text-7xl my-8">
                    UniPlanner
                </h1>
                <h4 className="z-10 text-white text-center text-base md:text-2xl lg:text-3xl my-2">
                    Empowering students to effectively plan, organize, and
                    navigate their university applications.
                </h4>
            </div>
            <section className="flex flex-col items-center justify-center w-full max-w-[1400px] p-16">
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 items-center w-3/4 p-4 m-8 gap-16">
                    <div className="flex flex-col justify-center flex-1 px-4 py-2 bg-white bg-cover shadow-2xl rounded-xl"> {/* bg-[url('../../public/palevioletrose.jpg')] */}
                        <div className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text">
                            <h2 className="text-center text-4xl mt-6 mb-2 text-transparent font-black underline">
                                <span className="text-black">Manage</span>{" "}
                                Applications
                            </h2>
                        </div>
                        <p className="pb-0 p-4">
                            Our app simplifies university applications,
                            providing students with a streamlined platform to
                            organize deadlines, track progress, and submit
                            materials hassle-free.
                        </p>
                        <p className="mb-2 p-4">
                            With intuitive features tailored to each stage of
                            the process, from researching institutions to final
                            submissions, we empower students to navigate the
                            admissions journey with ease.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center flex-1 bg-white shadow-green-500 shadow-2xl rounded-xl">
                        <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-green-500 to-cyan-500 rounded-t-xl">
                            <div className="text-white font-bold">
                                Applications
                            </div>
                        </div>
                        <div className="rounded-lg p-4">
                            <p>Create an application...</p>
                            <p>View your applications...</p>
                            <p>Edit your applications...</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 items-center w-3/4 p-4 m-8 gap-16">
                    <div className="flex flex-col justify-center flex-1 bg-white shadow-fuchsia-500 shadow-2xl rounded-xl">
                        <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-t-xl">
                            <div className="text-white font-bold">
                                Applications
                            </div>
                        </div>
                        <div className="rounded-lg p-4">
                            <p>Create an application...</p>
                            <p>View your applications...</p>
                            <p>Edit your applications...</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center flex-1 px-4 py-2 bg-white shadow-2xl rounded-xl">
                        <div className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text">
                            <h2 className="text-center text-4xl mt-6 mb-2 text-transparent font-black underline">
                                <span className="text-black">Academic</span>{" "}
                                Progress
                            </h2>
                        </div>
                        <p className="p-4 pb-0">
                            In addition to streamlining university applications,
                            our app supports academic success by enabling
                            students to effortlessly track their grades, receive
                            grade predictions, and set personalized goals.
                        </p>
                        <p className="mb-2 p-4">
                            With intuitive tools for monitoring progress and
                            setting targets, we empower students to stay
                            focused, motivated, and on track towards their
                            academic aspirations.
                        </p>
                    </div>
                </div>
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 items-center w-3/4 p-4 m-8 gap-16">
                    <div className="flex flex-col justify-center flex-1 px-4 py-2 bg-white shadow-2xl rounded-xl">
                        <div className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text">
                            <h2 className="text-center text-4xl mt-6 mb-2 text-transparent font-black underline">
                                <span className="text-black">Organize</span>{" "}
                                Applications
                            </h2>
                        </div>
                        <p className="mb-2 p-4">
                            Our app provides a platform where students can store
                            and manage all application materials, including
                            transcripts, essays, and recommendation letters.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center flex-1 bg-white shadow-orange-500 shadow-2xl rounded-xl">
                        <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-yellow-500 to-red-500 rounded-t-xl">
                            <div className="text-white font-bold">
                                Applications
                            </div>
                        </div>
                        <div className="rounded-lg p-4">
                            <p>Create an application...</p>
                            <p>View your applications...</p>
                            <p>Edit your applications...</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

Home.getLayout = function getLayout(page: JSX.Element) {
    return <DefaultLayout>{page}</DefaultLayout>;
};
