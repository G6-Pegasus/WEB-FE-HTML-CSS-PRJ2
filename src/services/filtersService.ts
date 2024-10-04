import { Filter } from '../utils/interfaces';

export const fetchFilters = async (category: string, subCategory: string): Promise<Filter[]> => {
    const response = await fetch(`https://web-fe-html-css-prj2-api.onrender.com/filters?category=${category}&subCategory=${subCategory}`);
    if (!response.ok) throw new Error('Error al cargar los filtros');
    const data = await response.json();
    return data.length > 0 ? data[0].filters : []
};
