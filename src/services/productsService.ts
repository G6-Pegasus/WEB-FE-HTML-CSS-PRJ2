import { Product } from '../utils/interfaces';

export const fetchProducts = async (category: string, subCategory: string) : Promise<Product[]> => {
    const url = subCategory === "" 
        ? `https://web-fe-html-css-prj2-api.onrender.com/products?category=${category}` 
        : `https://web-fe-html-css-prj2-api.onrender.com/products?category=${category}&subCategory=${subCategory}`
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al cargar los productos");
    return await response.json();
};