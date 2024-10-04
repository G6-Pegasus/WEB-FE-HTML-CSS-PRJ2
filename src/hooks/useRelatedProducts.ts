import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchRelatedProducts } from '../services/relatedProductsService';
import { Product } from '../utils/interfaces';

export const useRelatedProducts = (productId: number) : UseQueryResult<Product[], Error> => {
    return useQuery<Product[], Error>({
        queryKey: ['relatedProducts', productId],
        queryFn: () => fetchRelatedProducts(productId),
    });
};
