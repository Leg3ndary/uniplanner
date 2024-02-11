import DefaultLayout from "@/layouts/default";
import PriceBox from "@/components/PriceBox";
import pricesInfo from "@/data/prices";

export default function Pricing() {
    return (
        <main className="flex flex-col items-center min-h-screen">
            <div className="max-w-[1400px] w-full p-4">
                <h1 className="text-black text-center m-4">Premium Features</h1>
                <hr className="my-6" />
                <p className="font-medium text-xl text-center my-8 mx-4 text-slate-800">
                    Get access to more features by supporting the project,
                    thanks for your support!
                </p>

                <div className="grid justify-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-stretch">
                    {pricesInfo.map((price) => (
                        <PriceBox key={price.type} {...price} />
                    ))}
                </div>
            </div>
        </main>
    );
}

Pricing.getLayout = function getLayout(page: JSX.Element) {
    return <DefaultLayout>{page}</DefaultLayout>;
};
