import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchImages } from '../services/PromotionalImagesService';
import * as Interfaces from '../utils/interfaces'

export const usePromotionalImage = (): UseQueryResult<Interfaces.PromotionalImage[], Error> => {
    return useQuery<Interfaces.PromotionalImage[], Error>({ queryKey: ['images'], queryFn: fetchImages,});
};