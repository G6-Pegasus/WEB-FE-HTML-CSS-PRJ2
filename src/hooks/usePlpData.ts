import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchFilters } from '../services/plpServices.ts';

export const useProducts = (category: string, subCategory: string) => {
    return useQuery({ queryKey: ['products', category, subCategory], queryFn: () => fetchProducts(category, subCategory) });
};

export const useFilters = (category: string, subCategory: string) => {
    return useQuery({ queryKey: ['filters', category, subCategory], queryFn: () => fetchFilters(category, subCategory) });
};
