import { Product, Filter } from '../interfaces'

export const data_plp_products: Product[] = [
    { 
        id: 21,
        imageUrl: "https://www.alkosto.com/medias/6941812726457-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNjI3MHxpbWFnZS93ZWJwfGFHRmhMMmcwT1M4eE5ETTFORFkwTkRVd01EVXhNQzgyT1RReE9ERXlOekkyTkRVM1h6QXdNVjgzTlRCWGVEYzFNRWd8MWE1NTFlYjljYTA1NDA1YzcyOTFmNWFkY2RhYzQ2YzQyYmM4YjllZDdmMTBkZWYyMTc5M2I5Mzk5ZjJhNjYxNA", 
        name: "Reloj REDMI Watch", 
        brand: "3 47 mm Active Gris", 
        category: "Celulares",
        subCategory: "Smartwatchs",
        starts: 5,
        reviews: 48,
        price: 230000, 
        discount: 32 
    },
    { 
        id: 22,
        imageUrl: "https://www.alkosto.com/medias/6941812756201-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyMTA5NHxpbWFnZS93ZWJwfGFHUTJMMmd3WlM4eE5ETTJOVGt3TlRrM056TTNOQzgyT1RReE9ERXlOelUyTWpBeFh6QXdNVjgzTlRCWGVEYzFNRWd8MjFiMTczZjBkNmU3Nzg4NjQzZTU0ZjQ4NDA1OTIxOTY4ZjgwYmFiYWY5MzA3NWU1OGVlNTU4NmNhNTExOWFiYw", 
        name: "Reloj REDMI Watch", 
        brand: "4 47.5 mm Negro", 
        category: "Celulares",
        subCategory: "Smartwatchs",
        starts: 5,
        reviews: 220,
        price: 430000, 
        discount: 45 
    },
    { 
        id: 23,
        imageUrl: "https://www.alkosto.com/medias/6942103104831-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyOTYyOHxpbWFnZS93ZWJwfGFEY3pMMmhoTXk4eE5ETTJORFkwTnpFeU9URXhPQzgyT1RReU1UQXpNVEEwT0RNeFh6QXdNVjgzTlRCWGVEYzFNRWd8NGJiYzIxMmVhYWM1M2U5MDY4NmUzNzZjMGI2MTNjMDQ4ZDZkMWZjY2QwZGU2M2Q3NjFjOGE1YTAwNzIyMzM1ZQ", 
        name: "Reloj HUAWEI GT4", 
        brand: "46 mm Negro", 
        category: "Celulares",
        subCategory: "Smartwatchs",
        starts: 5,
        reviews: 44,
        price: 800000, 
        discount: 0 
    },
    { 
        id: 24,
        imageUrl: "https://www.alkosto.com/medias/194253772187-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMzYyNnxpbWFnZS93ZWJwfGFHUTNMMmc1T1M4eE5ETTFOalUxTmpZM056RTFNQzh4T1RReU5UTTNOekl4T0RkZk1EQXhYemMxTUZkNE56VXdTQXxkMzBiMWRmNDJjN2MzZGIzNGMzYmQxZTk4ZWE4MGU0NTY4YmQ3Yjc5ZmJkMDVhOTBmODQ1NThmZmQ0NDQ1ODJh", 
        name: "Apple Watch SE", 
        brand: "GPS de 44 mm Caja de Aluminio en Azul Medianoche, Correa Deportiva Azul Medianoche Talla S|M", 
        category: "Celulares",
        subCategory: "Smartwatchs",
        starts: 5,
        reviews: 66,
        price: 1600000, 
        discount: 0 
    },
    { 
        id: 25,
        imageUrl: "https://www.alkosto.com/medias/194253817420-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMzI2NnxpbWFnZS93ZWJwfGFEYzFMMmhqTkM4eE5ETTFOall3TURjeE56TTBNaTh4T1RReU5UTTRNVGMwTWpCZk1EQXhYemMxTUZkNE56VXdTQXxlM2Y1MDNiZTc5ODYxN2M1ODg5MTVlZmNiY2E2YWRjOTc2MjRmZjJmZmMyNTcwNWMxNTdhNGFlYWFiY2RkMDNi", 
        name: "Apple Watch Series 9", 
        brand: "GPS de 41 mm Caja de Aluminio en Rosa, Correa Deportiva Rosa Claro Talla S|M", 
        category: "Celulares",
        subCategory: "Smartwatchs",
        starts: 5,
        reviews: 74,
        price: 2259000, 
        discount: 30 
    }
]

export const data_plp_filters: Filter[] = [
    {
        name: "Marca",
        items: [
            { name: "Apple", quantity: 3 },
            { name: "Samsung", quantity: 2 },
            { name: "Xiaomi", quantity: 1 },
        ]
    },
    {
        name: "Tamaño de Pantalla",
        items: [
            { name: "1.2 pulgadas", quantity: 1 },
            { name: "1.4 pulgadas", quantity: 3 },
            { name: "1.6 pulgadas", quantity: 2 },
        ]
    },
    {
        name: "Conectividad",
        items: [
            { name: "Bluetooth", quantity: 3 },
            { name: "Wi-Fi", quantity: 2 },
            { name: "LTE", quantity: 1 },
        ]
    },
    {
        name: "Resistencia al Agua",
        items: [
            { name: "Hasta 30m", quantity: 2 },
            { name: "Hasta 50m", quantity: 3 },
            { name: "Hasta 100m", quantity: 1 },
        ]
    },
    {
        name: "Precio",
        items: [
            { name: "Menos de $200", quantity: 2 },
            { name: "$200 - $400", quantity: 3 },
            { name: "Más de $400", quantity: 1 },
        ]
    },
];
