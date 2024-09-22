import { Product, Filter } from '../interfaces'

export const data_plp_products: Product[] = [
    { 
        id: 51,
        imageUrl: "https://www.alkosto.com/medias/4548736108011-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0MzMyOHxpbWFnZS93ZWJwfGFHUmxMMmcxTUM4eE5ESTVNemd3T0RRME56VXhPQzgwTlRRNE56TTJNVEE0TURFeFh6QXdNVjgzTlRCWGVEYzFNRWd8Mjg0MjMyNjA1Mjg3MTA5ZTgyNDFhOGQ4MTU4NDYzNDlhODA1MTQwNzAyNWIyZDIxODVhMmMyZmYyYWM1ZDFmOQ", 
        name: "Minicomponente SONY", 
        brand: "MHC-V73D 550 Watts Negro Torre de Sonido", 
        category: "Tecnología",
        subCategory: "Audio",
        starts: 5,
        reviews: 86,
        price: 3599900, 
        discount: 40 
    },
    { 
        id: 52,
        imageUrl: "https://www.alkosto.com/medias/840136801528-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxOTg4MnxpbWFnZS93ZWJwfGFEaGtMMmd6Wmk4eE5ETTJPREF5TnpVd09EYzJOaTg0TkRBeE16WTRNREUxTWpoZk1EQXhYemMxTUZkNE56VXdTQXwwODliNWY1NDI1ZmJhMGY4NDcxYzNiZTE4MjEzYTA2YWM4ODFmMDFlMTJmNmFiZDg5ODk1ZmZiNWY5MzkwZTRj", 
        name: "Parlante SONOS", 
        brand: "Roam SL Negro", 
        category: "Tecnología",
        subCategory: "Audio",
        starts: 5,
        reviews: 36,
        price: 899000, 
        discount: 60
    },
    { 
        id: 53,
        imageUrl: "https://www.alkosto.com/medias/8806095460628-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMDYyNHxpbWFnZS93ZWJwfGFHUTJMMmc0Tnk4eE5EWXpORGN5TmpjeE9UVXhPQzg0T0RBMk1EazFORFl3TmpJNFh6QXdNVjgzTlRCWGVEYzFNRWd8N2QxOTNjYTliNmY2NWUxNjA2ZjlkNzlhZTVjZmNmZjExYWZlNGQ5MzkyYTJhYTU0Mzg4YTUyZDE2MjhlYTVhOQ", 
        name: "Parlante Portarretrato", 
        brand: "SAMSUNG HW-LS60D Smart Music Frame Negro", 
        category: "Tecnología",
        subCategory: "Audio",
        starts: 5,
        reviews: 1,
        price: 2299900, 
        discount: 55
    },
    { 
        id: 54,
        imageUrl: "https://www.alkosto.com/medias/8806091958914-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzMTYyNHxpbWFnZS93ZWJwfGFEVmlMMmhpWVM4eE5ETTFNelUzTXpjM016TTBNaTg0T0RBMk1Ea3hPVFU0T1RFMFh6QXdNVjgzTlRCWGVEYzFNRWd8ZTRiOTk1MjgyOGQxM2QxY2NhOTE0MzZjNGNkMzZlYWQzNzQ2ZGNjMzRjOTcxNjY3NDFiOTIzZGNlODk2OGNmZA", 
        name: "Minicomponente LG XBOOM RNC9", 
        brand: "1800 Watts Negro Torre de Sonido", 
        category: "Tecnología",
        subCategory: "Audio",
        starts: 5,
        reviews: 209,
        price: 2799900, 
        discount: 55
    },
    { 
        id: 55,
        imageUrl: "https://www.alkosto.com/medias/017817837347-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w3MjMyMnxpbWFnZS93ZWJwfGFEaGpMMmhpWkM4eE5ETTBPVEUyTVRVeU9UTTNOQzh3TVRjNE1UYzRNemN6TkRkZk1EQXhYemMxTUZkNE56VXdTQXwxZDE2ZWU5Mzk4NjYyMDgxZjFiOTAzZGY5NjAyNGQ3YzBlZTc2ZjM2YWNkMzBiYjBlZDVhMDI4OWQ4NDE1ODUw", 
        name: "Parlante", 
        brand: "BOSE S1 PRO+ Negro", 
        category: "Tecnología",
        subCategory: "Audio",
        starts: 5,
        reviews: 114,
        price: 3499900, 
        discount: 0 
    }
]

export const data_plp_filters: Filter[] = [
    {
        name: "Marca",
        items: [
            { name: "Sony", quantity: 3 },
            { name: "Bose", quantity: 2 },
            { name: "JBL", quantity: 1 },
        ]
    },
    {
        name: "Tipo de Producto",
        items: [
            { name: "Parlantes", quantity: 2 },
            { name: "Auriculares", quantity: 3 },
            { name: "Barras de sonido", quantity: 1 },
        ]
    },
    {
        name: "Conectividad",
        items: [
            { name: "Bluetooth", quantity: 3 },
            { name: "Cable", quantity: 2 },
            { name: "Wi-Fi", quantity: 1 },
        ]
    },
    {
        name: "Potencia",
        items: [
            { name: "10W", quantity: 2 },
            { name: "50W", quantity: 2 },
            { name: "100W o más", quantity: 1 },
        ]
    },
    {
        name: "Precio",
        items: [
            { name: "Menos de $100", quantity: 2 },
            { name: "$100 - $300", quantity: 3 },
            { name: "Más de $300", quantity: 1 },
        ]
    },
];
