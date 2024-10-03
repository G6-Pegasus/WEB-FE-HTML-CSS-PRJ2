
export const fetchProducts = async () => {
    const response = await fetch(
      "https://web-fe-html-css-prj2-api.onrender.com/featuredProducts"
    );
    if (!response.ok) {
      throw new Error("Error al cargar los productos");
    }
    const data = await response.json();
    return data;
};
    

    