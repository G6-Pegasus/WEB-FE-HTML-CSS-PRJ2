import { useQuery } from '@tanstack/react-query';
import { fetchProductsInfo } from '../services/pdpinfo.services.ts';

export const PDPInfo = (category: string, subCategory: string, idProduct: string) => {
    return useQuery({ queryKey: ['productPDPInfo'], queryFn: () => fetchProductsInfo(category, subCategory, Number(idProduct)) });
};