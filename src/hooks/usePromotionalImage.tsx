import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchImages } from '../services/promotionalImagesService';
import { PromotionalImage } from '../utils/interfaces'

export const usePromotionalImage = (): UseQueryResult<PromotionalImage[], Error> => {
    return useQuery<PromotionalImage[], Error>({ 
        queryKey: ['promotionalImages'], queryFn: () => fetchImages()
    });
};