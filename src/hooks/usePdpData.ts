import { useQuery } from '@tanstack/react-query';
import { fetchProductsBySubcategories } from '../services/pdp.services.ts';

export const useFeaturedProducts = (category: string, subCategory: string, idProduct: string) => {
    return useQuery({ queryKey: ['productPDP'], queryFn: () => fetchProductsBySubcategories(category, subCategory, Number(idProduct)) });
};