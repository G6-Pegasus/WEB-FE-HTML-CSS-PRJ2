import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/FeaturedProduct.services.ts';

// este componente usa el hook useQuery de react-query para hacer una petición a la API de filtros
export const useFeaturedProducts = () => {
    return useQuery({ queryKey: ['productsFeatured'], queryFn: () => fetchProducts() });
};