
export type Subcategories = "Climatización" | "Refrigeración" | "Lavadoras-Secadoras" | "" ;

export interface Product {
    id: number;
    imageUrl: string;
    name: string;
    brand: string;
    category: string;
    subCategory: string;
    starts: number;
    reviews: number;
    price: number;
    discount: number;
}

interface Item {
    name: string,
    quantity: number
}

export interface Filter {
    name: string,
    items: Item[]
}

export interface data_plp {
    data_plp_products: Product[];
    data_plp_filters: Filter[];
}