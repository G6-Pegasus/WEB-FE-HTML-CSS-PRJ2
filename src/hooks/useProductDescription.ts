import { useQuery } from '@tanstack/react-query';
import { fetchProductsInfo } from '../services/productDescriptionService.ts';

export const useProductDescription = (productID: number) => {
    return useQuery({ queryKey: ['productPDP'], queryFn: () => fetchProductsInfo(productID) });
};