import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { PriceBoxProps } from "@/types";

export default function PriceBox(box: PriceBoxProps) {
    let border = "";
    let background = "";
    let price = "";
    let text = "";
    let button = "";

    if (box.type === "Basic") {
        border = "bg-gray-300";
        background = "bg-white";
        price = "bg-gradient-to-r from-blue-500 to-purple-500";
        text = "text-black";
        button = "text-white bg-slate-800";
    } else if (box.type === "Premium") {
        border = "bg-gradient-to-br from-blue-500 to-purple-500";
        background = "bg-white";
        price = "bg-gradient-to-r from-blue-500 to-purple-500";
        text = "text-black";
        button = "bg-gradient-to-r from-blue-500 to-purple-500 text-white";
    } else if (box.type === "Enterprise") {
        border = "bg-gradient-to-br from-blue-500 to-purple-500";
        background = "bg-gradient-to-br from-blue-500 to-purple-500";
        price = "bg-white";
        text = "text-white";
        button = "text-black bg-opacity-70 bg-white";
    }

    return (
        <div className={`p-1 m-4 rounded-2xl shadow-2xl ${border}`}>
            <div
                className={`flex flex-col items-center justify-center p-4 rounded-xl h-full ${background}`}
            >
                <h4 className={`text-center text-2xl mt-4 ${text}`}>
                    {box.type}
                </h4>
                <div
                    className={`bg-clip-text text-4xl font-black my-4 ${price}`}
                >
                    <h2 className="text-center text-transparent my-6">
                        {box.price}
                    </h2>
                </div>
                <p className={`text-xl mx-6 mb-4 text-center ${text}`}>
                    {box.text}
                </p>
                <div className="w-full mb-8 px-4">
                    {box.features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center self-start ml-6 my-2"
                        >
                            <FaCheck className={`text-xl ${text}`} />
                            <span className={`text-xl ml-3 ${text}`}>
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
                <Link
                    href={box.button.href}
                    className={`rounded-2xl shadow-xl py-3 w-11/12 text-center font-bold text-2xl mb-4 mt-auto ${button}`}
                >
                    {box.button.text}
                </Link>
            </div>
        </div>
    );
}
