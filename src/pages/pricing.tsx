import DefaultLayout from "@/layouts/default";

export default function Pricing() {
    return (
        <main className="flex flex-col items-center min-h-screen">
            <div className="max-w-[1400px] w-full p-4">
                <h1 className="text-black text-left m-4">Pricing</h1>
                <hr />
                <p className="font-semibold text-xl m-4 text-slate-800">
                    I don&apos;t believe in paywalling features, especially for
                    education tools. UniPlanner is completely free and will
                    remain this way. That being said, it still costs money to
                    host servers, and therefore you can get access to beta
                    features by supporting the project.
                </p>
                <div className="grid justify-center items-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center justify-center p-4 m-4 border-2">
                        <h2 className="text-center">Free</h2>
                        <p>Access to all core features</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 m-4 border-2">
                        <h2 className="text-center">Beta</h2>
                        <p>Access to all core features</p>
                        <p>Access to beta features</p>
                        <p>Support the project</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 m-4 border-2">
                        <h2 className="text-center">Beta</h2>
                        <p>Access to all core features</p>
                        <p>Access to beta features</p>
                        <p>Support the project</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

Pricing.getLayout = function getLayout(page: JSX.Element) {
    return <DefaultLayout>{page}</DefaultLayout>;
};
