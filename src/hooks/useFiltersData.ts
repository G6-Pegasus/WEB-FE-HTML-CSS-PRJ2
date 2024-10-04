import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchFilters } from '../services/filtersService.ts';
import { Filter } from '../utils/interfaces.ts';

export const useFilters = (category: string, subCategory: string) : UseQueryResult<Filter[], Error> => {
    return useQuery({ queryKey: ['filters', category, subCategory], queryFn: () => fetchFilters(category, subCategory) });
};
