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

export function getSummary (products: CartProduct[]) : [string, number][] {
    const deliveries = { "Estandar": 0.01, "Express": 0.05, "Overnight": 0.1 }
    const subTotal = products.map(p => p.price * (p.quantity ?? 1)).reduce((a, b) => a + b, 0)
    const envio = products.map(p => p.price * (p.quantity ?? 1) * deliveries[p.deliveryMethod ?? "Estandar"]).reduce((a, b) => a + b, 0)
    const discount = products.map(p => p.price * (p.quantity ?? 1) * p.discount / 100).reduce((a, b) => a + b, 0)
    const totalDiscount = subTotal + envio - discount
    const iva = subTotal * 0.19
    const total = totalDiscount + iva

    return [
        ["Subtotal", subTotal],
        ["Envío", envio],
        ["Descuentos", discount],
        ["Total Descuentos", totalDiscount],
        ["IVA", iva],
        ["", 0],
        ["Total", total]
    ]
}