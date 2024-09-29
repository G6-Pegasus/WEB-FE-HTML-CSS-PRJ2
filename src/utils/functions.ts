import { CartProduct, deliveryOptions } from "./interfaces";

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

export const addCartProduct = (products: CartProduct[], update: (data: CartProduct[]) => void, product: CartProduct, values: { quantity: number, deliveryMethod: deliveryOptions }) => {
    if (products.some(p => p.id === product.id)) return;
    update([...products, { ...product, ...values }])
}

export const updateCartProduct = (products: CartProduct[], update: (data: CartProduct[]) => void, product: CartProduct, values: { quantity: number, deliveryMethod: deliveryOptions }) => {
    if (!products.some(p => p.id === product.id)) return;
    update(products.map(p => p.id === product.id ? { ...product, ...values } : p))
}

export const deleteCartProduct = (products: CartProduct[], update: (data: CartProduct[]) => void, productId : number | undefined) => {
    if (!products.some(p => p.id === productId)) return;
    update(products.filter(p => p.id !== productId))
}