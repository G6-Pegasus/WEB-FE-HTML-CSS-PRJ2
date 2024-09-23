import { Product, Filter } from '../interfaces'

export const data_plp_products: Product[] = [
    { 
        id: 6,
        imageUrl: "https://www.alkosto.com/medias/7704712465906-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0MzY2fGltYWdlL3dlYnB8YUdJMUwyaG1NQzh4TkRVMU5qazBOelV4TXpNM05DODNOekEwTnpFeU5EWTFPVEEyWHpBd01WODNOVEJYZURjMU1FZ3w0NjQyYTRhZjI1MmQ4ZTE0Y2ZhNzE2MTAzOTBkM2NhNzZjNmY4NzNmOTE3NjQ5OTcwOGQ0OGVmMjY4YzQ2MWY1", 
        name: "Nevera", 
        brand: "Mabe No Frost Congelador Superior 297 Litros RMA313FXCC Negra", 
        category: "Electrodomésticos",
        subCategory: "Refrigeración",
        starts: 5,
        reviews: 1021,
        price: 2621900, 
        discount: 20 
    },
    { 
        id: 7,
        imageUrl: "https://www.alkosto.com/medias/7705191041803-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzNjcyfGltYWdlL3dlYnB8YURnMkwyaG1aQzh4TkRVek9EVTROekV4TVRRMU5DODNOekExTVRreE1EUXhPREF6WHpBd01WODNOVEJYZURjMU1FZ3xkYzBiYmU1YmNkOTNjMDU3YzI1ODMyNTRlMzllMjYxOGM5NzMwZWZlNzE5MWRjZWMzNDZkNDMxZTM5NmNjYmM5", 
        name: "Nevera", 
        brand: "No Frost CHALLENGER 231 Litros CR249 Titanium", 
        category: "Electrodomésticos",
        subCategory: "Refrigeración",
        starts: 5,
        reviews: 1006,
        price: 1619900, 
        discount: 35 
    },
    { 
        id: 8,
        imageUrl: "https://www.alkosto.com/medias/7704353446234-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w1MzY0fGltYWdlL3dlYnB8YURoaEwyaGtaaTh4TkRVek9EVXdNek0xTmpRME5pODNOekEwTXpVek5EUTJNak0wWHpBd01WODNOVEJYZURjMU1FZ3w0NDQ3MWZlODRkOTQzOTNjNjkwNTlhYWZhMmFlZDQ0Mzc0ZmY4YWFiY2JlMzI4YTJiYmVkNDYxOTYyYjlhNDBh", 
        name: "Nevera", 
        brand: "HACEB No Frost Congelador Superior 379 Litros N404 Titanio", 
        category: "Electrodomésticos",
        subCategory: "Refrigeración",
        starts: 5,
        reviews: 391,
        price: 2779900, 
        discount: 20 
    },
    { 
        id: 9,
        imageUrl: "https://www.alkosto.com/medias/8806091920232-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzOTQwfGltYWdlL3dlYnB8YUdGaEwyZzNPUzh4TkRVMk16VTJNRFV5TVRjMU9DODRPREEyTURreE9USXdNak15WHpBd01WODNOVEJYZURjMU1FZ3xkNTkzNjA1ZmM2NzNiZTA4MzE4YjRkZmY1Yjg3Njc3ZWM2YzJmNDlmNWZlYWQ1M2NiOTkwNjA5MjE4MGIzNjhh", 
        name: "Nevecón", 
        brand: "SAMSUNG Side by Side 628 Litros RS22T5200B1/CO Grafito", 
        category: "Electrodomésticos",
        subCategory: "Refrigeración",
        starts: 5,
        reviews: 110,
        price: 6509000, 
        discount: 45 
    },
    { 
        id: 10,
        imageUrl: "https://www.alkosto.com/medias/8806095362991-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzNjQwfGltYWdlL3dlYnB8YURZd0wyaG1ZeTh4TkRVMk1UUXpNREUzTlRjM05DODRPREEyTURrMU16WXlPVGt4WHpBd01WODNOVEJYZURjMU1FZ3w2YjkyZjlkNzU5NzYzYTE3OGMwN2I2MmQ5M2I3ODg5MDk5ZDcyOGVkMWQ3YTY4ODk4OTZjMDMzNmQzYzJjYjZj", 
        name: "Nevera", 
        brand: "SAMSUNG No Frost Congelador superior 301 Litros Brutos RT31DG5220S9CO Gris", 
        category: "Electrodomésticos",
        subCategory: "Refrigeración",
        starts: 4,
        reviews: 48,
        price: 2700000, 
        discount: 20 
    }
]

export const data_plp_filters: Filter[] = [
    {
        name: "Marca",
        items: [
            { name: "Samsung", quantity: 2 },
            { name: "LG", quantity: 2 },
            { name: "Whirlpool", quantity: 1 },
        ]
    },
    {
        name: "Capacidad",
        items: [
            { name: "200-299 litros", quantity: 1 },
            { name: "300-399 litros", quantity: 2 },
            { name: "400 litros o más", quantity: 2 },
        ]
    },
    {
        name: "Tipo de Nevera",
        items: [
            { name: "Congelador", quantity: 1 },
            { name: "Doble puerta", quantity: 2 },
            { name: "Puerta sencilla", quantity: 2 },
        ]
    },
    {
        name: "Color",
        items: [
            { name: "Blanco", quantity: 2 },
            { name: "Negro", quantity: 1 },
            { name: "Gris", quantity: 2 },
        ]
    },
    {
        name: "Eficiencia Energética",
        items: [
            { name: "A", quantity: 2 },
            { name: "B", quantity: 2 },
            { name: "C", quantity: 1 },
        ]
    },
];
