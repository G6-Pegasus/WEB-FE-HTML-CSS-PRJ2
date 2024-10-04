import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchProducts } from '../services/productsService';
import { Product } from '../utils/interfaces'

export const useProducts = (category: string, subCategory: string): UseQueryResult<Product[], Error> => {
    return useQuery({ queryKey: ['products', category, subCategory], queryFn: () => fetchProducts(category, subCategory) });
};