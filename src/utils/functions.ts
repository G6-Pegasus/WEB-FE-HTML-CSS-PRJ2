const formatNumber = new Intl.NumberFormat('es-CL', { 
    style: 'currency', 
    currency: 'CLP' 
})

export const convertNumberToMoney = (value : number) => formatNumber.format(value)

export const data_navegation_menu = [
    {
        name: "Tecnología",
        subcategories: ["Computadores", "Televisores", "Audio", "Vídeo", "Impresión", "Cámaras"]
    },
    {
        name: "Electrodomésticos",
        subcategories: ["Climatización", "Refrigeración", "Lavadoras-Secadoras"]
    },
    {
        name: "Celulares",
        subcategories: ["Celulares", "Tabletas", "Smartwatchs"]
    },
    {
        name: "Hogar",
        subcategories: ["Salas", "Comedor", "Cocina", "Baño"]
    }
];