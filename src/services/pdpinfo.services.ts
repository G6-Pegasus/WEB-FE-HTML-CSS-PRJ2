export const fetchProductsInfo = async (category: string, subCategory: string, idProduct: Number) => {
    const response = await fetch(`https://web-fe-html-css-prj2-api.onrender.com/products`);
    if (!response.ok) {
        throw new Error('Error fetching filters');
    }
    const data = await response.json();
    const product = data.find(
        (item: { id: Number, category: string; subCategory: string }) => item.category === category && item.subCategory === subCategory && item.id === idProduct
    );
    
    return Object.entries(product.info).map(([key, value]) => `${key}: ${value}`);
};