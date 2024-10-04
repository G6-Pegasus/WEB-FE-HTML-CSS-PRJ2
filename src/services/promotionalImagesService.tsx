import { PromotionalImage } from '../utils/interfaces'

export const fetchImages = async (): Promise<PromotionalImage[]> => {
    const response = await fetch('https://web-fe-html-css-prj2-api.onrender.com/promotionalImages');
    if (!response.ok) throw new Error('Error al cargar las imagenes');
    return await response.json();
};