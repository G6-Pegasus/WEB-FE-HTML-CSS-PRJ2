import { Product, Filter } from '../interfaces'

export const data_plp_products: Product[] = [
    { 
        id: 71,
        imageUrl: "https://www.alkosto.com/medias/8806095482446-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0MjA5NHxpbWFnZS93ZWJwfGFETXlMMmhpTmk4eE5EVXdOemcyTlRnek16VXdNaTg0T0RBMk1EazFORGd5TkRRMlh6QXdNVjgzTlRCWGVEYzFNRWd8ZjJhMDUyNWY0ZTcwYTQ1MmE1NDFiMGMxOThjMjNlMDdmYjQ4MTcwNWM3ZWU5YWJiN2NlNzMzMGY3MWZkOWQxOA", 
        name: "TV SAMSUNG", 
        brand: "65\" Pulgadas 165.1 cm 65DU7000 4K-UHD LED Smart TV", 
        category: "Tecnología",
        subCategory: "Televisores",
        starts: 5,
        reviews: 50,
        price: 4099000, 
        discount: 45 
    },
    { 
        id: 72,
        imageUrl: "https://www.alkosto.com/medias/8806096082249-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0NjU3NHxpbWFnZS93ZWJwfGFEa3lMMmd5T0M4eE5EVTBOelExTlRJM09URXpOQzg0T0RBMk1EazJNRGd5TWpRNVh6QXdNVjgzTlRCWGVEYzFNRWd8NTFmN2E2NzFlODk1N2M1MzI0ODhkZjNhNDZjYjk1YzRlZTZlMzQ0MGE4N2VlYjhjODEyNzFjMTMxZGJkMzNjYg", 
        name: "TV LG", 
        brand: "55\" Pulgadas 139 Cm 55UT8050PSB 4K-UHD LED Smart TV", 
        category: "Tecnología",
        subCategory: "Televisores",
        starts: 5,
        reviews: 36,
        price: 3399900, 
        discount: 50 
    },
    { 
        id: 73,
        imageUrl: "https://www.alkosto.com/medias/8806095483252-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w1MDA0MHxpbWFnZS93ZWJwfGFEWTJMMmc1TkM4eE5ETTRPVFl4T0Rnek5UUTROaTg0T0RBMk1EazFORGd6TWpVeVh6QXdNVjgzTlRCWGVEYzFNRWd8ODI3YmU1ZDg2YmU2NTNmNjdjMDFkNjE3NzI5MTA2YzUzMjRhMzlhMjc5OWM1N2Y5MGFhNWVhOGUzYTBhY2Q4NA", 
        name: "TV SAMSUNG", 
        brand: "75\" Pulgadas 190,5 cm DU8000 4K UHD LED Smart TV", 
        category: "Tecnología",
        subCategory: "Televisores",
        starts: 5,
        reviews: 2,
        price: 6199900, 
        discount: 42
    },
    { 
        id: 74,
        imageUrl: "https://www.alkosto.com/medias/8806084530950-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyOTQ2NnxpbWFnZS93ZWJwfGFEaGhMMmd4WVM4eE5EVTJPRGcwTURjeU5EVXhNQzg0T0RBMk1EZzBOVE13T1RVd1h6QXdNVjgzTlRCWGVEYzFNRWd8NmRjMWM0Nzk2MTI5MjgwMzQwMTUxNTYwY2YxYTMxN2E2ZTE1MWVlNDc1ZjQ3NmNjODJhODc3Njk5OWUxZWIyMA", 
        name: "TV LG", 
        brand: "65\" Pulgadas 165 Cm 65UT7300 4K-UHD LED Smart TV", 
        category: "Tecnología",
        subCategory: "Televisores",
        starts: 4,
        reviews: 10,
        price: 4129900, 
        discount: 48 
    },
    { 
        id: 75,
        imageUrl: "https://www.alkosto.com/medias/7705946478175-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNDU4NnxpbWFnZS93ZWJwfGFERTRMMmcwT0M4eE5EWXlPVEV4TkRReE16QTROaTgzTnpBMU9UUTJORGM0TVRjMVh6QXdNVjgzTlRCWGVEYzFNRWd8YjFmNGExNDJiYzM4ZmFiZjVmMTg0ZTZjYjdiMzI1ZTVlZDczMWZiZmQyYTE0ODRjY2Q3N2Y4ZWM3ZjU3M2I0YQ", 
        name: "TV KALLEY", 
        brand: "50\" Pulgadas 127 cm GTV50UHDQV2 4K-UHD QLED Smart TV Google", 
        category: "Tecnología",
        subCategory: "Televisores",
        starts: 5,
        reviews: 254,
        price: 2849900, 
        discount: 30 
    }
]

export const data_plp_filters: Filter[] = [
    {
        name: "Marca",
        items: [
            { name: "Samsung", quantity: 3 },
            { name: "LG", quantity: 2 },
            { name: "Sony", quantity: 1 },
        ]
    },
    {
        name: "Tamaño de Pantalla",
        items: [
            { name: "32 pulgadas", quantity: 1 },
            { name: "42 pulgadas", quantity: 2 },
            { name: "50 pulgadas o más", quantity: 3 },
        ]
    },
    {
        name: "Resolución",
        items: [
            { name: "4K", quantity: 2 },
            { name: "Full HD", quantity: 2 },
            { name: "HD", quantity: 2 },
        ]
    },
    {
        name: "Tipo de Pantalla",
        items: [
            { name: "LED", quantity: 2 },
            { name: "OLED", quantity: 2 },
            { name: "QLED", quantity: 2 },
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
