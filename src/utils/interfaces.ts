export interface FeaturedProduct {
    id?: number;
    imageUrl: string;
    name: string;
    brand: string;
    category?: string;
    subCategory?: string;
    quantity?: number | 1
    price: number;
    discount: number;
}

export interface Product extends FeaturedProduct {
    starts: number;
    reviews: number;
    description?: string;
    info?: { [key: string]: string }
}

export type SubCategories = "Electrodomésticos" | "Climatización" | "Refrigeración" | "Lavadoras-Secadoras" |
            "Celularesc" | "Celulares" | "Tabletas" | "Smartwatchs" | "Hogar" | "Salas" | "Comedor" | "Cocina" | 
            "Baño" | "Tecnología" | "Computadores" | "Televisores" | "Audio" | "Vídeo" | "Impresión" | "Cámaras"

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

export interface PromotionalImage {
    id?: number,
    imageUrl: string,
    description: string
}