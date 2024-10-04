import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchProductsInfo } from '../services/productDescriptionService.ts';
import { Product } from '../utils/interfaces';

export const useProductDescription = (productID: number) : UseQueryResult<Product, Error> => {
    return useQuery({ queryKey: ['productPDP', productID], queryFn: () => fetchProductsInfo(productID) });
};