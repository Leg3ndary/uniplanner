export enum PriceType {
    Basic = "Basic",
    Premium = "Premium",
    Enterprise = "Enterprise",
}

export type PriceBoxProps = {
    type: PriceType;
    price: string;
    text: string;
    features: string[];
    button: {
        text: string;
        href: string;
    };
};

export type University = {
    domains: string[];
    name: string;
    web_pages: string[];
    image: string;
}