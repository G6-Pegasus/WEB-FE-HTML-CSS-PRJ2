import { Product, Filter } from '../interfaces'

export const data_plp_products: Product[] = [
    { 
        id: 1,
        imageUrl: "https://www.alkosto.com/medias/757638348522-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0MDkzNnxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJoak1DOW9NalF2TVRFMU5qZzJNelF4TXpRMU5UZ3VhbkJufGY2YzFiMTJkMzlkOWIwNjQ2NzVjNjdjMjlhMGFhNzI5ZDdmYmM5ZjFlZjlkM2EzNjQwODBmMjMxNmE0NDE1MjE", 
        name: "Aire Acondicionado", 
        brand: "MABE 12000 BTU Tipo Split Inverter 110V Blanco", 
        category: "Electrodomésticos",
        subCategory: "Climatización",
        starts: 5,
        reviews: 48,
        price: 2483900, 
        discount: 35 
    },
    { 
        id: 2,
        imageUrl: "https://www.alkosto.com/medias/8806094786309-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxODUxMHxpbWFnZS93ZWJwfGFERmtMMmhtWkM4eE5ETTVPVEl5TmpBMU1qWXpPQzg0T0RBMk1EazBOemcyTXpBNVh6QXdNVjgzTlRCWGVEYzFNRWd8NTFiOWJhNTUxOTgyZDE1Y2ZkZTM5YTJjYWEwNGNkMmM2ODQ3NDAxZjUzZDI4YTQ2YzRkOGUxYzFkZTE5YzY2Mg", 
        name: "Aire acondicionado", 
        brand: "SAMSUNG 18.000 Btu Tipo Split inverter WindFree 220V Blanco AR18CVFCMWK/CB", 
        category: "Electrodomésticos",
        subCategory: "Climatización",
        starts: 5,
        reviews: 5,
        price: 3726900, 
        discount: 40 
    },
    { 
        id: 3,
        imageUrl: "https://www.alkosto.com/medias/8806094786361-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxOTY3MnxpbWFnZS93ZWJwfGFHRTRMMmcxWmk4eE5ETTFNREV5TURneE1qVTNOQzg0T0RBMk1EazBOemcyTXpZeFh6QXdNVjgzTlRCWGVEYzFNRWd8OGU4YjNhMTg1ODA3NTNjZjA2NjQ0ODAzMDk2MGRjN2IwOWJmNDcyMDcyYjZiMjZiYWNmNzc3ZjIwOWE2YzRjYQ", 
        name: "Aire acondicionado", 
        brand: "SAMSUNG 24.000 Btu Tipo Split inverter WindFree 220V Blanco AR24CVFCMWK/CB", 
        category: "Electrodomésticos",
        subCategory: "Climatización",
        starts: 4,
        reviews: 7,
        price: 4549900, 
        discount: 50 
    },
    { 
        id: 4,
        imageUrl: "https://www.alkosto.com/medias/757638348546-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0MDkzNnxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJoak1TOW9Nell2TVRFMU5qZzJNemd5TmpNek1qWXVhbkJufDllNWE4NWY3MmU2MDY2MmJjMWM3YTcyZmY4M2E1N2Q4YWQzYjkzNmQ3MWE5YjdmMzRjNjQxZDdkYjMxNGEwNmY", 
        name: "Aire Acondicionado", 
        brand: "MABE 12000 BTU Tipo Split Inverter 220V Blanco", 
        category: "Electrodomésticos",
        subCategory: "Climatización",
        starts: 4,
        reviews: 130,
        price: 2483900, 
        discount: 43 
    },
    { 
        id: 5,
        imageUrl: "https://www.alkosto.com/medias/757638376372-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzMjYyfGltYWdlL3dlYnB8YURRekwyaGhNQzh4TkRNeE9USXpPRFEwTnpFek5DODNOVGMyTXpnek56WXpOekpmTURBeFh6YzFNRmQ0TnpVd1NBfGFhZTU4YWIyZDRmZjA0YjRiNGU1ZGZkMTg5ZDJhYmI2MTljY2FhNzQwNTkyNGY2YWYzYjRmODc2ZjEwODYzMWM", 
        name: "Aire Acondicionado", 
        brand: "MABE 12000 BTU Tipo Split Convencional 110V Blanco", 
        category: "Electrodomésticos",
        subCategory: "Climatización",
        starts: 5,
        reviews: 136,
        price: 1839900, 
        discount: 20 
    }
]

export const data_plp_filters: Filter[] = [
    {
        name: "Marca",
        items: [
            { name: "Challenger", quantity: 2 },
            { name: "Haceb", quantity: 1 },
            { name: "Mabe", quantity: 1 },
            { name: "Olimpo", quantity: 1 },
            { name: "Panasonic", quantity: 2 },
            { name: "Samsung", quantity: 2 },
            { name: "Whirpool", quantity: 1 },
            { name: "Wurden", quantity: 1 },
        ]
    },
    {
        name: "Color",
        items: [
            { name: "Blanco", quantity: 11 },
            { name: "Negro", quantity: 0 },
            { name: "Gris", quantity: 0 },
        ]
    },
    {
        name: "Eficiencia energética",
        items: [
            { name: "A", quantity: 0 },
            { name: "B", quantity: 1 },
            { name: "C", quantity: 9 },
            { name: "D", quantity: 1 },
            { name: "E", quantity: 0 },
        ]
    },
    {
        name: "Capacidad de enfriamiento",
        items: [
            { name: "9.000 Btu", quantity: 1 },
            { name: "12.000 Btu", quantity: 9 },
            { name: "18.000 Btu", quantity: 0 },
            { name: "24.000 Btu", quantity: 1 },
        ]
    },
    {
        name: "Descuentos",
        items: [
            { name: "5% y más", quantity: 1 },
            { name: "10% y más", quantity: 4 },
            { name: "20% y más", quantity: 2 },
            { name: "30% y más", quantity: 2 },
            { name: "40% y más", quantity: 2 },
        ]
    },
];
