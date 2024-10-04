import { useQuery } from '@tanstack/react-query';
import { fetchRelatedProducts } from '../services/relatedProductsService';
import { Product } from '../utils/interfaces';

export const useRelatedProducts = (productId: number) => {
    return useQuery<Product[], Error>({
        queryKey: ['relatedProducts', productId],
        queryFn: () => fetchRelatedProducts(productId),
    });
};
