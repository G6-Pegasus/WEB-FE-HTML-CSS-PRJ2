import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchProducts } from '../services/featuredProductService.ts';
import { FeaturedProduct } from '../utils/interfaces.ts';

export const useFeaturedProducts = () : UseQueryResult<FeaturedProduct[], Error> => {
    return useQuery({ queryKey: ['featuredProducts'], queryFn: () => fetchProducts() });
};