import { Product } from '../utils/interfaces';

export const fetchProductsInfo = async (productId: Number) : Promise<Product> => {
    const response = await fetch(`https://web-fe-html-css-prj2-api.onrender.com/products/${productId}`);
    if (!response.ok) throw new Error('Error al cargar la informacion del producto');
    return await response.json();
};