import * as Interfaces from '../utils/interfaces'

export const fetchImages = async (): Promise<Interfaces.PromotionalImage[]> => {
    const response = await fetch('https://web-fe-html-css-prj2-api.onrender.com/promotionalImages');
    if (!response.ok) {
        throw new Error('Failed to fetch images');
    }
    return response.json();
};