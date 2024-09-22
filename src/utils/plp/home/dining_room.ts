import { Product, Filter } from '../interfaces'

export const data_plp_products: Product[] = [
    { 
        id: 36,
        imageUrl: "https://www.alkosto.com/medias/840101975698-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMjcxOHxpbWFnZS93ZWJwfGFHRTRMMmhtTmk4eE5EWTRPVGs0TmpRME5UTTBNaTg0TkRBeE1ERTVOelUyT1RoZk1EQXhYemMxTUZkNE56VXdTQXxiZjRjMWZlNjNlNGZiNzQ2ZDMyMTUwZTdiY2RjODE5M2VlNjdhOWFjOGJlZDAxZWYyMDY4N2YxMDhmNDA0NjQx", 
        name: "Vajilla FREE", 
        brand: "HOME 4 Puestos / 16 Piezas Redonda", 
        category: "Hogar",
        subCategory: "Comedor",
        starts: 0,
        reviews: 0,
        price: 250000, 
        discount: 60 
    },
    { 
        id: 37,
        imageUrl: "https://www.alkosto.com/medias/7702484315603-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w4NDUxMnxpbWFnZS93ZWJwfGFEVm1MMmc0T0M4eE5EVXpPRFEwTWpJeE1UTTFPQzgzTnpBeU5EZzBNekUxTmpBelh6QXdNVjgzTlRCWGVEYzFNRWd8Mjc3ODk0M2I2NmM1ZTcyNWY0NDBmMzU5MGQzNGJiZDAyMmViZmI0Mjc0NjJiZWQxYTIwNmM2ODNjMmJlZTU3YQ", 
        name: "Pague 1 Lleve 2: Vajilla CORONA", 
        brand: "4 Puestos / 16 Piezas Martina", 
        category: "Hogar",
        subCategory: "Comedor",
        starts: 5,
        reviews: 1,
        price: 439800, 
        discount: 50 
    },
    { 
        id: 38,
        imageUrl: "https://www.alkosto.com/medias/7891112274075-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNzE1OHxpbWFnZS93ZWJwfGFETTNMMmhqTnk4eE5ETXdOekk1T0RFeE5UWXhOQzgzT0RreE1URXlNamMwTURjMVh6QXdNVjgzTlRCWGVEYzFNRWd8ZTVhZDBkMDQzODUwZTUzZTgzZjNjZjI0Y2ZiNDA3MzVhYzBhM2U3MWJlNjBlZGNiMjNiMDhjNWU2N2YyODlmNg", 
        name: "Juego de Cubiertos", 
        brand: "TRAMONTINA 24 Piezas Malibu", 
        category: "Hogar",
        subCategory: "Comedor",
        starts: 4,
        reviews: 15,
        price: 99900, 
        discount: 0 
    },
    { 
        id: 39,
        imageUrl: "https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-7702484292478-001.jpg?context=bWFzdGVyfGltYWdlc3wzNDc0OTJ8aW1hZ2UvanBlZ3xhRGhpTDJnNE5pOHhNemc0TWpjMU1qQXdPREl5TWk4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2Tnpjd01qUTROREk1TWpRM09GOHdNREV1YW5Cbnw1NDgzY2NlMTJlY2RhNmE4MDMwMmU4MzZjYWM5ZDAyOTM1ZTBjMDkyNTBiNTM0ZDJiMjcwMTlkMDhmODRjN2Jl", 
        name: "Vajilla CORONA", 
        brand: "4 Puestos/16 Piezas Lois", 
        category: "Hogar",
        subCategory: "Comedor",
        starts: 5,
        reviews: 16,
        price: 159900, 
        discount: 0 
    },
    { 
        id: 40,
        imageUrl: "https://www.alkosto.com/medias/7891116045565-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNzgyNHxpbWFnZS93ZWJwfGFEZzJMMmcwTnk4eE5ETXlNelEwT0Rrd05UYzFPQzgzT0RreE1URTJNRFExTlRZMVh6QXdNVjgzTlRCWGVEYzFNRWd8ODBhZWJjNTAzYTM5OTQ4NzhjYTAxODdhMGE2MTViOTQ5OWY5NjhhZDA2NWNkMDY1MTkyYjI0ZmVkMGEzMmNhMw", 
        name: "Juego de Cubiertos", 
        brand: "TRAMONTINA 16 Piezas Copacabana", 
        category: "Hogar",
        subCategory: "Comedor",
        starts: 5,
        reviews: 5,
        price: 99900, 
        discount: 0 
    }
]

export const data_plp_filters: Filter[] = [
    {
        name: "Marca",
        items: [
            { name: "Modular", quantity: 3 },
            { name: "DecoHome", quantity: 2 },
            { name: "Decorceramic", quantity: 1 },
        ]
    },
    {
        name: "Material",
        items: [
            { name: "Madera", quantity: 2 },
            { name: "Vidrio", quantity: 2 },
            { name: "Metal", quantity: 1 },
        ]
    },
    {
        name: "Capacidad",
        items: [
            { name: "4 puestos", quantity: 2 },
            { name: "6 puestos", quantity: 2 },
            { name: "8 puestos", quantity: 1 },
        ]
    },
    {
        name: "Color",
        items: [
            { name: "Blanco", quantity: 2 },
            { name: "Negro", quantity: 2 },
            { name: "Marrón", quantity: 1 },
        ]
    },
    {
        name: "Estilo",
        items: [
            { name: "Moderno", quantity: 2 },
            { name: "Clásico", quantity: 2 },
            { name: "Minimalista", quantity: 1 },
        ]
    },
];
