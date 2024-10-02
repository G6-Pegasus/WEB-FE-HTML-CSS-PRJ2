
// fetchFilters es una funcion asincrona que optiene los datos de los filtros de la API y lanza un error si la solicitud no es exitosa.
export const fetchFilters = async (category: string, subCategory: string) => {
    const response = await fetch(`https://web-fe-html-css-prj2-api.onrender.com/filters`);
    if (!response.ok) {
        throw new Error('Error fetching filters');
    }
    const data = await response.json();
    const filteredData = data.filter(
        (item: { category: string; subCategory: string }) => item.category === category && item.subCategory === subCategory
    );
    
    if (filteredData.length > 0) {
        return filteredData[0].filters;
    } else {
        return [];
    }
};
