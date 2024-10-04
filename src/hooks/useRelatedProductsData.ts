import { useQuery } from '@tanstack/react-query';
import { fetchRelatedProducts } from '../services/RelatedProductsServices';
import { Product } from '../utils/plp/interfaces';

export const useRelatedProducts = (productId: number) => {
    return useQuery<Product[], Error>({
        queryKey: ['relatedProducts', productId],
        queryFn: () => fetchRelatedProducts(productId),
    });
};
