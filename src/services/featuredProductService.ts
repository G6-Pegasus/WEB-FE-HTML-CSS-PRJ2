import { FeaturedProduct } from '../utils/interfaces';

export const fetchProducts = async () : Promise<FeaturedProduct[]> => {
    const response = await fetch("https://web-fe-html-css-prj2-api.onrender.com/featuredProducts");
    if (!response.ok) throw new Error("Error al cargar los productos");
    return await response.json();
};    