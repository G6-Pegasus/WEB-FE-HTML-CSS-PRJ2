import { create } from 'zustand'
import { CartProduct, deliveryOptions, deliveryOptionsArr } from '../../utils/interfaces'

interface CartProducts {
    products: CartProduct[],
    addProduct: (product: CartProduct) => void,
    updateProduct: (productId : number | undefined, values: { quantity: number, deliveryMethod: deliveryOptions }) => void,
    deleteProduct: (productId : number | undefined) => void,
    existsProduct: (productId: number | undefined) => boolean,
    getSummary: () => [string, number][]
}

export const useCartStore = create<CartProducts> ((set, get) => ({
    products: JSON.parse(localStorage.getItem("cartProducts") || "[]"),
    addProduct: (product: CartProduct) => {
        const productsStore = get().products
        if (productsStore.some(p => p.id === product.id)) return;
        set(state => ({ ...state, products: [...productsStore, {...product, ...{ quantity: 1, deliveryMethod: deliveryOptionsArr[0] }}]}))
        localStorage.setItem("cartProducts", JSON.stringify(get().products))
    },
    updateProduct: (productId : number | undefined, values: { quantity: number, deliveryMethod: deliveryOptions }) => {
        const productsStore = get().products
        if (!productsStore.some(p => p.id === productId)) return;
        set(state => ({ ...state, products: productsStore.map(p => p.id === productId ? { ...p, ...values } : p) }))
        localStorage.setItem("cartProducts", JSON.stringify(get().products))
    },
    deleteProduct: (productId : number | undefined) => {
        const productsStore = get().products
        if (!productsStore.some(p => p.id === productId)) return;
        set(state => ({ ...state, products: productsStore.filter(p => p.id !== productId) }))
        localStorage.setItem("cartProducts", JSON.stringify(get().products))
    },
    existsProduct: (productId: number | undefined) => get().products.some(p => p.id === productId),
    getSummary: () => {
        const productsStore = get().products
        const deliveries = { "Estandar": 0.01, "Express": 0.05, "Overnight": 0.1 }
        const subTotal = productsStore.map(p => p.price * (p.quantity ?? 1)).reduce((a, b) => a + b, 0)
        const envio = productsStore.map(p => p.price * (p.quantity ?? 1) * deliveries[p.deliveryMethod ?? "Estandar"]).reduce((a, b) => a + b, 0)
        const discount = productsStore.map(p => p.price * (p.quantity ?? 1) * p.discount / 100).reduce((a, b) => a + b, 0)
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
}))