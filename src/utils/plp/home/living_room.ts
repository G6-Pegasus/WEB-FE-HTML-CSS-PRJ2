import { Product, Filter } from '../interfaces'

export const data_plp_products: Product[] = [
    { 
        id: 46,
        imageUrl: "https://www.alkosto.com/medias/840101953856-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w3ODk2fGltYWdlL3dlYnB8YURZMUwyZ3dZaTh4TkRNek56UXlNREU1TnpreE9DODROREF4TURFNU5UTTROVFpmTURBeFh6YzFNRmQ0TnpVd1NBfGI5ODAzZjk0MDIwNGJlYTA1ZDMyNTdkYzIyNWY3MGUwYTdiZjY5Yzc1ZGNlODUzNjM2ZjY1ODUzOTc1NjkwYjc", 
        name: "Cuadro Sombras", 
        brand: "FREE HOME 51 x 71 cms", 
        category: "Hogar",
        subCategory: "Salas",
        starts: 0,
        reviews: 0,
        price: 99900, 
        discount: 20 
    },
    { 
        id: 47,
        imageUrl: "https://www.alkosto.com/medias/6549561708825-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w5MjE4MHxpbWFnZS93ZWJwfGFHVXpMMmd4TlM4eE5ESTVPRFV4TWpRNU1EVXlOaTgyTlRRNU5UWXhOekE0T0RJMVh6QXdNVjgzTlRCWGVEYzFNRWd8NDY0MjVjODI0YzA0ODU2NzJmODA4NzZlOWViOTNjZGY0ZGU4ZmEyYTZhOTBmMTQxYmI5YzBiZTlhNDgxZGNhMQ", 
        name: "Tapete Decorativo", 
        brand: "DIB 40 x 60 cm Home Corazón", 
        category: "Hogar",
        subCategory: "Salas",
        starts: 5,
        reviews: 5,
        price: 65900, 
        discount: 15 
    },
    { 
        id: 48,
        imageUrl: "https://www.alkosto.com/medias/7700149268974-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w3NTg0NHxpbWFnZS93ZWJwfGFERXpMMmd4T0M4eE5EUTFNREUxTURZd05EZ3pNQzgzTnpBd01UUTVNalk0T1RjMFh6QXdNVjgzTlRCWGVEYzFNRWd8ZWIyOTFmZmFkMmM1MDJkYzBhODIxNzhkZDNhZmJlZmM4NjljYmEwNDY4ZWI4OGU4ZWU1NWVmYjU1MDE4ODdmNA", 
        name: "Cojín Decorativo", 
        brand: "K-LINE Tizón Algodón Poliester 45 x 45 cm", 
        category: "Hogar",
        subCategory: "Salas",
        starts: 5,
        reviews: 2,
        price: 39900, 
        discount: 0 
    },
    { 
        id: 49,
        imageUrl: "https://www.alkosto.com/medias/840101962667-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w5MjMwfGltYWdlL3dlYnB8YUdJM0wyaGpaUzh4TkRNMU1ESTJNekkxTlRBM01DODROREF4TURFNU5qSTJOamRmTURBeFh6YzFNRmQ0TnpVd1NBfGVmMGRkODQzZDdiMzAyYmQ5NWQ4YmI3NTMyYTNiMTU4YTVlMmZjOWJmMDg4ZDcwZDQwZWU0ZGYwNjc3OWQzZDc", 
        name: "Florero FREE HOME", 
        brand: "Cerámica Blanco 20 cm", 
        category: "Hogar",
        subCategory: "Salas",
        starts: 5,
        reviews: 1,
        price: 53200, 
        discount: 0 
    },
    { 
        id: 50,
        imageUrl: "https://www.alkosto.com/medias/840101956123-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzNTEzNnxpbWFnZS93ZWJwfGFHTTRMMmhsT1M4eE5ETXpPRFE1TXpRNE1EazVNQzg0TkRBeE1ERTVOVFl4TWpOZk1EQXhYemMxTUZkNE56VXdTQXw4ZjkyNWU4YzZiZTllNzNmNWI2MmE4NWQyMmU3NmFlY2JkNjhmNjU4YjBkZGM1NDU1NzNmOTgxMzgyMmM2M2Y3", 
        name: "Cuadro Decorativo con Marco FREE HOME Jarrón y Ramas 40 x 60 cm", 
        brand: "Jarrón y Ramas 40 x 60 cm", 
        category: "Hogar",
        subCategory: "Salas",
        starts: 5,
        reviews: 2,
        price: 99900, 
        discount: 45 
    }
]

export const data_plp_filters: Filter[] = [
    {
        name: "Marca",
        items: [
            { name: "Modular", quantity: 2 },
            { name: "Challenger", quantity: 2 },
            { name: "Decorceramic", quantity: 1 },
        ]
    },
    {
        name: "Color",
        items: [
            { name: "Gris", quantity: 2 },
            { name: "Beige", quantity: 2 },
            { name: "Negro", quantity: 1 },
        ]
    },
    {
        name: "Material",
        items: [
            { name: "Cuero", quantity: 1 },
            { name: "Tela", quantity: 2 },
            { name: "Sintético", quantity: 2 },
        ]
    },
    {
        name: "Tamaño",
        items: [
            { name: "2 puestos", quantity: 2 },
            { name: "3 puestos", quantity: 2 },
            { name: "Esquinero", quantity: 1 },
        ]
    },
    {
        name: "Estilo",
        items: [
            { name: "Moderno", quantity: 2 },
            { name: "Clásico", quantity: 2 },
            { name: "Vintage", quantity: 1 },
        ]
    },
];
