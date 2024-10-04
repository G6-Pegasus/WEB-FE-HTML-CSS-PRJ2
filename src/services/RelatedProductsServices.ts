import { Product } from '../utils/plp/interfaces';

export const fetchRelatedProducts = async (productId: number): Promise<Product[]> => {
    const response = await fetch(`https://web-fe-html-css-prj2-api.onrender.com/featuredProducts`);

    if (!response.ok) {
        throw new Error('Error al cargar los productos relacionados.');
    }

    const data: Product[] = await response.json();
    const relatedProducts = data.filter((product: Product) => product.id !== productId);
    return relatedProducts.length > 4 ? relatedProducts.slice(0, 4) : relatedProducts;
};
