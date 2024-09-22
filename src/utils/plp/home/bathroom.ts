import { Product, Filter } from '../interfaces'

export const data_plp_products: Product[] = [
    { 
        id: 31,
        imageUrl: "https://www.alkosto.com/medias/7702985587189-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyNjIzMnxpbWFnZS93ZWJwfGFHWXdMMmc1WlM4eE5EWXpPRFl6TlRVME9EY3dNaTgzTnpBeU9UZzFOVGczTVRnNVh6QXdNVjgzTlRCWGVEYzFNRWd8OGFlY2M0OTMzNTA3YWQ0ZmYwNmQ2YmM4MTQ3ODAyZTllYTljZTkwYjY4OTY1ZDhkMGNiMmQwYWMzNmE1YzEzMw", 
        name: "Toalla de Cuerpo", 
        brand: "CANNON Sasha 70 x 140 cm / 500 grms Blanca", 
        category: "Hogar",
        subCategory: "Baño",
        starts: 5,
        reviews: 1,
        price: 59900, 
        discount: 0 
    },
    { 
        id: 32,
        imageUrl: "https://www.alkosto.com/medias/7702995749980-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w3ODI0fGltYWdlL3dlYnB8YURWbEwyZzNOQzh4TkRRM09EUTROek00T0RFNU1DODNOekF5T1RrMU56UTVPVGd3WHpBd01WODNOVEJYZURjMU1FZ3xiMjY5YTVkY2M2NThiMmM4NTJjNzNjZWFjMTdlMTM0YjMxNGEwNjJmOGI2MzRmZDhhNzYwODI2ZDVlMjlmODgx", 
        name: "Bata de Baño Hombre", 
        brand: "FATELARES Verano 320 grms Blanca", 
        category: "Hogar",
        subCategory: "Baño",
        starts: 5,
        reviews: 1,
        price: 105000, 
        discount: 0 
    },
    { 
        id: 33,
        imageUrl: "https://www.alkosto.com/medias/7593438249613-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0MjIzNnxpbWFnZS93ZWJwfGFETm1MMmhrWlM4eE5ESTVOak01T0RBek56QXlNaTgzTlRrek5ETTRNalE1TmpFelh6QXdNVjgzTlRCWGVEYzFNRWd8MDg2OTBjNTY5ZmFkOGM1YTQ1NjgxNjE2ZmIyMTQyNTVkYTk3OTdjMTExYjJiYmI1ZDRiNDkxMDA2YmQ2NmM3Nw", 
        name: "Tapete de Baño", 
        brand: "URUYEN Gis 40 x 60 cm", 
        category: "Hogar",
        subCategory: "Baño",
        starts: 5,
        reviews: 2,
        price: 36900, 
        discount: 0 
    },
    { 
        id: 34,
        imageUrl: "https://www.alkosto.com/medias/7704512587464-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyOTQ3NHxpbWFnZS93ZWJwfGFEaGlMMmczTkM4eE5ETTJOVEl5TlRjME5qUTJNaTgzTnpBME5URXlOVGczTkRZMFh6QXdNVjgzTlRCWGVEYzFNRWd8MjkzZWE1NzVhMjBiMjQ2YzZhMjA5ZjcxNDk4NmJlMWZmOWRlZmRiNGU5NDVkMzA5ZDNmMTliODViYTQ5ODlhZQ", 
        name: "Cortina de Baño", 
        brand: "K-LINE Blanca 180 x 200 cm", 
        category: "Hogar",
        subCategory: "Baño",
        starts: 5,
        reviews: 1,
        price: 55900, 
        discount: 0 
    },
    { 
        id: 35,
        imageUrl: "https://www.alkosto.com/medias/7593438012484-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w2NjkyfGltYWdlL3dlYnB8YUdRMUwyZzBOaTh4TkRReU1UYzJOVEUyTURrNU1DODNOVGt6TkRNNE1ERXlORGcwWHpBd01WODNOVEJYZURjMU1FZ3xiNDczYmQ4MmU2ZTgzZjhkYTY1YzZhZTMxODNiY2I0OWJhNzBmMGY2MmM5ZTllN2UxNzMzMTk0ZGNmNmEyNGQ0", 
        name: "Vaso Porta Cepillo de Dientes", 
        brand: "URUYEN Oprah Blanco", 
        category: "Hogar",
        subCategory: "Baño",
        starts: 0,
        reviews: 0,
        price: 29900, 
        discount: 0 
    }
]

export const data_plp_filters: Filter[] = [
    {
        name: "Marca",
        items: [
            { name: "Corona", quantity: 2 },
            { name: "DecoBath", quantity: 2 },
            { name: "Decorceramic", quantity: 1 },
        ]
    },
    {
        name: "Tipo de Producto",
        items: [
            { name: "Lavamanos", quantity: 2 },
            { name: "Inodoro", quantity: 2 },
            { name: "Ducha", quantity: 1 },
        ]
    },
    {
        name: "Material",
        items: [
            { name: "Cerámica", quantity: 2 },
            { name: "Porcelana", quantity: 2 },
            { name: "Vidrio", quantity: 1 },
        ]
    },
    {
        name: "Color",
        items: [
            { name: "Blanco", quantity: 2 },
            { name: "Gris", quantity: 2 },
            { name: "Negro", quantity: 1 },
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
