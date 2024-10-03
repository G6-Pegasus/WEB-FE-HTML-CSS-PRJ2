import { useQuery, UseQueryResult } from '@tanstack/react-query';
import {PromotionalImage} from '../utils/home/promotional_image';





const fetchImages = async (): Promise<PromotionalImage[]> => {
  const response = await fetch('https://web-fe-html-css-prj2-api.onrender.com/promotionalImages');
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  return response.json();
};


export const useFetchImages = (): UseQueryResult<PromotionalImage[], Error> => {
  return useQuery<PromotionalImage[], Error>({
    queryKey: ['images'],
    queryFn: fetchImages,});
};