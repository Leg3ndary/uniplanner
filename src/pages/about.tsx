import DefaultLayout from "@/layouts/default";

export default function About() {
    return (
        <main className="flex flex-col items-center min-h-screen">
            <div className="max-w-[1400px] w-full p-4">
                <h1 className="text-black text-center m-4">About</h1>
                <hr className="my-6" />
                <p className="font-medium text-xl text-center my-8 mx-4 text-slate-800">
                    UniPlanner is a project that I made to help students keep
                    track of their university applications, deadlines, and other
                    important information.
                </p>
                <p className="font-medium text-xl text-center my-8 mx-4 text-slate-800">
                    This project is open source, and you can find the source
                    code on{" "}
                    <a
                        href="https://github.com/Leg3ndary/uniplanner"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-500"
                    >
                        GitHub
                    </a>
                    .
                </p>
            </div>
        </main>
    );
}

About.getLayout = function getLayout(page: JSX.Element) {
    return <DefaultLayout>{page}</DefaultLayout>;
};
