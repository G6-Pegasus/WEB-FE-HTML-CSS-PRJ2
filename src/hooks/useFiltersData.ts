import { useQuery } from '@tanstack/react-query';
import { fetchFilters } from '../services/filtersService.ts';

// este componente usa el hook useQuery de react-query para hacer una petición a la API de filtros
export const useFilters = (category: string, subCategory: string) => {
    return useQuery({ queryKey: ['filters', category, subCategory], queryFn: () => fetchFilters(category, subCategory) });
};
