import { Product } from '../utils/interfaces';

export const fetchRelatedProducts = async (productId: number): Promise<Product[]> => {
    const response = await fetch(`https://web-fe-html-css-prj2-api.onrender.com/featuredProducts`);
    if (!response.ok) throw new Error('Error al cargar los productos relacionados.');

    const data: Product[] = await response.json();
    return data.filter((product: Product) => product.id !== productId).slice(0, 4);
};
