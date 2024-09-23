import { Product, Filter } from '../interfaces'

export const data_plp_products: Product[] = [
    { 
        id: 66,
        imageUrl: "https://www.alkosto.com/medias/010343973381-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyMDg1NnxpbWFnZS93ZWJwfGFHTTFMMmd6T0M4eE5ETTBORGd5TURrNE1UYzVNQzh3TVRBek5ETTVOek16T0RGZk1EQXhYemMxTUZkNE56VXdTQXw5ZjNlZjZjNTdhYzUxYjY3ZmI5YmFkYTlkNDgxMzBhZjk3M2M4MmM1ZmFmOWEzMGNjZmM4NWM4ZTU5Yjg1MzA4", 
        name: "Impresora Multifuncional", 
        brand: "EPSON Ecotank L5590 WiFi Hg-Of - Negro", 
        category: "Tecnología",
        subCategory: "Impresión",
        starts: 5,
        reviews: 168,
        price: 2019000, 
        discount: 40 
    },
    { 
        id: 67,
        imageUrl: "https://www.alkosto.com/medias/010343958067-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNjE0NHxpbWFnZS93ZWJwfGFEVXpMMmd3Wmk4eE5ETXdOalkyTkRjME1qazBNaTh3TVRBek5ETTVOVGd3TmpkZk1EQXhYemMxTUZkNE56VXdTQXxkOTBmZWI1YzA0ZjM0YjA4ODJhNDhlOTJiOWJhMzY3MjhkMTVlNDczOTcwMWU4Y2M1MGU1MDM2NzcxZjYyYmZh", 
        name: "Impresora Multifuncional", 
        brand: "EPSON Ecotank L3210 Hg - Negro", 
        category: "Tecnología",
        subCategory: "Impresión",
        starts: 5,
        reviews: 319,
        price: 1149000, 
        discount: 35 
    },
    { 
        id: 68,
        imageUrl: "https://www.alkosto.com/medias/010343958098-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxOTQ4NnxpbWFnZS93ZWJwfGFEVm1MMmd6TVM4eE5ETXdOalkyTURBeU5ETTFNQzh3TVRBek5ETTVOVGd3T1RoZk1EQXhYemMxTUZkNE56VXdTQXwwODFhNmY5YmQ5MDljZjAzNGFmNGZlYWRmMGQ5NzI0YmUwN2Y3ZTU1ODBhZjU1MmIxNmQ4ZjI5NDU3ZGQxYTVi", 
        name: "Impresora Multifuncional", 
        brand: "EPSON Ecotank L3250 WiFi Hg - Negro", 
        category: "Tecnología",
        subCategory: "Impresión",
        starts: 5,
        reviews: 265,
        price: 1259000, 
        discount: 30 
    },
    { 
        id: 69,
        imageUrl: "https://www.alkosto.com/medias/010343970700-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNDU1MHxpbWFnZS93ZWJwfGFEbGpMMmhoTnk4eE5ETTFPVGczTVRVNE5qTXpOQzh3TVRBek5ETTVOekEzTURCZk1EQXhYemMxTUZkNE56VXdTQXxlN2RhNGQ2NDc0YjFkNmFmOWE0YTc3MzE2YWIwZDMzMjMxMzgyZjRlZDNjMDQzMzNiZjE1Mjc3ZGEyN2E0Njhl", 
        name: "Impresora EPSON", 
        brand: "Ecotank L1250 WiFi Hg - Negro", 
        category: "Tecnología",
        subCategory: "Impresión",
        starts: 5,
        reviews: 89,
        price: 999000, 
        discount: 30 
    },
    { 
        id: 70,
        imageUrl: "https://www.alkosto.com/medias/196068963507-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMjc2OHxpbWFnZS93ZWJwfGFHVTNMMmhqTWk4eE5ETTBNVGt3TWpJd05EazFPQzh4T1RZd05qZzVOak0xTURkZk1EQXhYemMxTUZkNE56VXdTQXwzZWIwZWU0ZjEzODliNTQ4NWM1ZDI1MTY4YzkyNjc3MWU0OTlkNDcyODY4YzQ1ZDIzYmFiMTQyNzM3NzA3N2Q1", 
        name: "Impresora Multifuncional", 
        brand: "HP Smart Tank 580 WiFi Hg - Blanco", 
        category: "Tecnología",
        subCategory: "Impresión",
        starts: 5,
        reviews: 81,
        price: 1199900, 
        discount: 30 
    }
]

export const data_plp_filters: Filter[] = [
    {
        name: "Marca",
        items: [
            { name: "HP", quantity: 3 },
            { name: "Epson", quantity: 2 },
            { name: "Canon", quantity: 1 },
        ]
    },
    {
        name: "Tipo de Impresora",
        items: [
            { name: "Inyección de tinta", quantity: 2 },
            { name: "Láser", quantity: 3 },
            { name: "Multifuncional", quantity: 1 },
        ]
    },
    {
        name: "Conectividad",
        items: [
            { name: "Wi-Fi", quantity: 2 },
            { name: "USB", quantity: 2 },
            { name: "Ethernet", quantity: 1 },
        ]
    },
    {
        name: "Velocidad de Impresión",
        items: [
            { name: "Hasta 20 ppm", quantity: 2 },
            { name: "Hasta 30 ppm", quantity: 2 },
            { name: "Más de 30 ppm", quantity: 1 },
        ]
    },
    {
        name: "Precio",
        items: [
            { name: "Menos de $150", quantity: 2 },
            { name: "$150 - $300", quantity: 3 },
            { name: "Más de $300", quantity: 1 },
        ]
    },
];
