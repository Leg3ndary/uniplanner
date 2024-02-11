export enum PriceType {
    Basic = "Basic",
    Premium = "Premium",
    Enterprise = "Enterprise",
}

export type PriceBoxProps = {
    type: PriceType;
    price: string;
    features: string[];
    button: {
        text: string;
        href: string;
    };
};