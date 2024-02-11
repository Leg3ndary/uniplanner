import { PriceBoxProps, PriceType } from "@/types";

const pricesInfo: PriceBoxProps[] = [
    {
        type: PriceType.Basic,
        price: "Free",
        text: "Access to all features, but with limited usage.",
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
        text: "Full customization and unlimited access to all features.",
        features: [
            "Access to all features",
            "Unlimited Applications",
            "Extended Storage Space",
            "Full Customization",
        ],
        button: {
            text: "Upgrade Now",
            href: "/",
        },
    },
    {
        type: PriceType.Enterprise,
        price: "Contact Us",
        text: "Need more? Contact us for a custom plan.",
        features: [
            "Access to all features",
            "Unlimited Applications",
            "Unlimited Storage Space",
            "Full Customization",
        ],
        button: {
            text: "Contact Us",
            href: "/",
        },
    },
];

export default pricesInfo;
