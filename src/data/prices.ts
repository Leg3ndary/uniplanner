import { PriceBoxProps, PriceType } from "@/types";

const pricesInfo: PriceBoxProps[] = [
    {
        type: PriceType.Basic,
        price: "Free",

        features: [
            "Access to all features",
            "Manage 5 Applications",
            "Limited Storage Space",
            "Limited Customization",
        ],
        button: {
            text: "Get Started",
            href: "/",
        },
    },
    {
        type: PriceType.Premium,
        price: "$5.99",
        features: [
            "Access to all features",
            "Unlimited Applications",
            "Extended Storage Space",
            "Full Customization",
        ],
        button: {
            text: "Get Started",
            href: "/",
        },
    },
    {
        type: PriceType.Enterprise,
        price: "Contact Us",
        features: [
            "Access to all features",
            "Unlimited Applications",
            "Unlimited Storage Space",
            "Full Customization",
        ],
        button: {
            text: "Get Started",
            href: "/",
        },
    },
];

export default pricesInfo;
