import { Product, Filter } from '../interfaces'

export const data_plp_products: Product[] = [
    { 
        id: 56,
        imageUrl: "https://www.alkosto.com/medias/6941565969903-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMDgyOHxpbWFnZS93ZWJwfGFEZGxMMmd3T1M4eE5ETTJORE0zT0RNd01EUTBOaTgyT1RReE5UWTFPVFk1T1RBelh6QXdNVjgzTlRCWGVEYzFNRWd8NTI0MTU1OGUzYTM5MmNjZDBjZTA2YjlkNjZkMGJmNWUxZjk3MTY2YjllNDNjM2Y0MTU4NjkwODBiYTVlZmNmYw", 
        name: "Cámara DJI Pocket", 
        brand: "3 Combo Creadores", 
        category: "Tecnología",
        subCategory: "Cámaras",
        starts: 5,
        reviews: 4,
        price: 3449900, 
        discount: 0 
    },
    { 
        id: 57,
        imageUrl: "https://www.alkosto.com/medias/810116380848-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMDIwMnxpbWFnZS93ZWJwfGFHWmtMMmd5WlM4eE5ETTJPREEwT0RjME1qUXpNQzg0TVRBeE1UWXpPREE0TkRoZk1EQXhYemMxTUZkNE56VXdTQXw3NjkzZTQ2MWY0MTM5YmZmZTIwY2JjYTc1OWNiYjM5YmM1ZTk3OWQ0NjJiNTliNTRhMGQyMmJmOGQxMTRkOGVm", 
        name: "Cámara de Acción", 
        brand: "GOPRO Hero 10 Black RT", 
        category: "Tecnología",
        subCategory: "Cámaras",
        starts: 5,
        reviews: 13,
        price: 1200000, 
        discount: 0 
    },
    { 
        id: 58,
        imageUrl: "https://www.alkosto.com/medias/4548736128811-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzNTQ0OHxpbWFnZS93ZWJwfGFHTXlMMmc0WVM4eE5ETXpPVFl4TlRNMU9UQXdOaTgwTlRRNE56TTJNVEk0T0RFeFh6QXdNVjgzTlRCWGVEYzFNRWd8OTExODEzYmM3NDUwZGYxNGQ0ZTQ3NWUwZWJiMGJjZjdhNDJlMzgwMTZkY2YwZWU5MmE0OGIwZGQ0NzQyZTdiYg", 
        name: "Cámara Sony", 
        brand: "Zv-E10L/Bq E38", 
        category: "Tecnología",
        subCategory: "Cámaras",
        starts: 5,
        reviews: 11,
        price: 4469900, 
        discount: 30 
    },
    { 
        id: 59,
        imageUrl: "https://www.alkosto.com/medias/6941565988294-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMjczNHxpbWFnZS93ZWJwfGFHSmhMMmhtT0M4eE5EWTJNakEwT1RneU5EYzVPQzgyT1RReE5UWTFPVGc0TWprMFh6QXdNVjgzTlRCWGVEYzFNRWd8YmYyZjFjMTkyNjI0YTdkMTk4ZjBjMjU2YjZhZTI2NWE5NmZhZTkyOTc0MTkzYmQ1ZTc0MTNkYWExNWFiOWE1Mg", 
        name: "Dron DJI", 
        brand: "Neo Combo", 
        category: "Tecnología",
        subCategory: "Cámaras",
        starts: 5,
        reviews: 1,
        price: 1730000, 
        discount: 0 
    },
    { 
        id: 60,
        imageUrl: "https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-4548736079700-001.jpg?context=bWFzdGVyfGltYWdlc3wyMDIxODV8aW1hZ2UvanBlZ3xhRFl3TDJnd01TOHhNemt5TXpnd016SXpORE16TkM4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TkRVME9EY3pOakEzT1Rjd01GOHdNREV1YW5Cbnw5MDJlN2JiOWRjOTBiYzQxNmJkYWFjNjVjOTMzMDI3Mzg4ODY0MGIyZmM3NmRjNzNjNzkwMzNjM2NkYzRjYjI5", 
        name: "Cámara fotográfica SONY", 
        brand: "Profesional Alpha ILCE-7M3K Negro", 
        category: "Tecnología",
        subCategory: "Cámaras",
        starts: 5,
        reviews: 11,
        price: 11330000, 
        discount: 35
    }
]

export const data_plp_filters: Filter[] = [
    {
        name: "Marca",
        items: [
            { name: "Canon", quantity: 3 },
            { name: "Nikon", quantity: 2 },
            { name: "Sony", quantity: 1 },
        ]
    },
    {
        name: "Tipo de Cámara",
        items: [
            { name: "Réflex", quantity: 2 },
            { name: "Mirrorless", quantity: 2 },
            { name: "Compacta", quantity: 1 },
        ]
    },
    {
        name: "Resolución",
        items: [
            { name: "16 MP", quantity: 1 },
            { name: "24 MP", quantity: 3 },
            { name: "32 MP o más", quantity: 2 },
        ]
    },
    {
        name: "Conectividad",
        items: [
            { name: "Wi-Fi", quantity: 3 },
            { name: "Bluetooth", quantity: 2 },
            { name: "Cable", quantity: 1 },
        ]
    },
    {
        name: "Precio",
        items: [
            { name: "Menos de $500", quantity: 2 },
            { name: "$500 - $1000", quantity: 3 },
            { name: "Más de $1000", quantity: 1 },
        ]
    },
];