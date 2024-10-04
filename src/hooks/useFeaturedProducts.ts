import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/featuredProductService.ts';

export const useFeaturedProducts = () => {
    return useQuery({ queryKey: ['featuredProducts'], queryFn: () => fetchProducts() });
};