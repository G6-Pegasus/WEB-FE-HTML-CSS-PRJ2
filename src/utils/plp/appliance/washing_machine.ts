import { Product, Filter } from '../interfaces'

export const data_plp_products: Product[] = [
    { 
        id: 11,
        imageUrl: "https://www.alkosto.com/medias/7708228051547-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w1MjI0fGltYWdlL3dlYnB8YUdGakwyZ3dOeTh4TkRjd05EVXpOelF6TmpFNU1DODNOekE0TWpJNE1EVXhOVFEzWHpBd01WODNOVEJYZURjMU1FZ3wzZTg1MWU1OTUzN2VhMjkxZDAxNThiZmJhMzVlMWY5NGE2Y2E1YWZmODAxZGUwNmRhMWQ4NjVhNjc2MWVhMjE4", 
        name: "Lavadora", 
        brand: "WHIRLPOOL Carga Superior 20 Kilos WW20LTAHLA Gris", 
        category: "Electrodomésticos",
        subCategory: "Lavadoras-Secadoras",
        starts: 5,
        reviews: 1298,
        price: 2860000, 
        discount: 30 
    },
    { 
        id: 12,
        imageUrl: "https://www.alkosto.com/medias/8806095362762-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w2MTkyfGltYWdlL3dlYnB8YURWakwyZzRaUzh4TkRVNE16RTRPVEF4TWpVeE1DODRPREEyTURrMU16WXlOell5WHpBd01WODNOVEJYZURjMU1FZ3wzNjE0M2E2ZDMzYmZkZDg5ZjRjNjRlMDI5MDc4ZDlkNDU5N2M5ODVmNzljOTdhYjU1ZmM0ODAwODRiOTNlZWFm", 
        name: "Lavadora", 
        brand: "SAMSUNG Carga Superior 19 kilos WA19CG6441BD Gris", 
        category: "Electrodomésticos",
        subCategory: "Lavadoras-Secadoras",
        starts: 4,
        reviews: 488,
        price: 2000000, 
        discount: 23 
    },
    { 
        id: 13,
        imageUrl: "https://www.alkosto.com/medias/7501545587429-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w1MzM4fGltYWdlL3dlYnB8YURFNUwyZzNPQzh4TkRZeU56a3dNekUzTmpjek5DODNOVEF4TlRRMU5UZzNOREk1WHpBd01WODNOVEJYZURjMU1FZ3xjN2NhODkxMzgzNjRmMjI2MjM4OTc1MDBiMmUzOTM1OWNlMjRiNzA2OGRlMjdlOGQ5NzRkZGEzYWMyOWY3Njhm", 
        name: "Lavadora", 
        brand: "WHIRLPOOL Carga Superior 25 Kilos 8MWTWLA41WJG Gris", 
        category: "Electrodomésticos",
        subCategory: "Lavadoras-Secadoras",
        starts: 4,
        reviews: 101,
        price: 3800000, 
        discount: 30 
    },
    { 
        id: 14,
        imageUrl: "https://www.alkosto.com/medias/8806084853080-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w3NzY2fGltYWdlL3dlYnB8YUdOa0wyZzROeTh4TkRVNE9EZ3dOamd5TXprMk5pODRPREEyTURnME9EVXpNRGd3WHpBd01WODNOVEJYZURjMU1FZ3xjZDEwNWI2ZTcyNzZkN2ViZjU5NzA5YTA0OGRmYWNhODBhNTkyM2I3MTkwMzYzOTQ0NDkxMzk2NDI4Y2MyZWEx", 
        name: "Lavadora", 
        brand: "LG Carga Superior 16KG WT16MVTB Negro", 
        category: "Electrodomésticos",
        subCategory: "Lavadoras-Secadoras",
        starts: 4,
        reviews: 48,
        price: 3700000, 
        discount: 23
    },
    { 
        id: 15,
        imageUrl: "https://www.alkosto.com/medias/8806091653338-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNzU4MnxpbWFnZS93ZWJwfGFEYzVMMmhrTmk4eE5EVTRPRGc0T1RVek1ETTVPQzg0T0RBMk1Ea3hOalV6TXpNNFh6QXdNVjgzTlRCWGVEYzFNRWd8YWZmOWRmMjhhMzdkZmRjNmM1ODhhZjA4ZDVmMDc1MThhZWI4OTRmNmZkOWY0MWYyZWMwYmE1OTIyMGQwNTgyMw", 
        name: "Torre de Lavado y Secado", 
        brand: "LG Wash Tower en un solo cuerpo 22 Kilos WK22VS6P Gris con Inteligencia Artificial", 
        category: "Electrodomésticos",
        subCategory: "Lavadoras-Secadoras",
        starts: 5,
        reviews: 4,
        price: 12000000, 
        discount: 50 
    }
]

export const data_plp_filters: Filter[] = [
    {
        name: "Marca",
        items: [
            { name: "Samsung", quantity: 2 },
            { name: "LG", quantity: 3 },
            { name: "Whirlpool", quantity: 2 },
        ]
    },
    {
        name: "Capacidad de carga",
        items: [
            { name: "5-7 kg", quantity: 1 },
            { name: "7-9 kg", quantity: 2 },
            { name: "Más de 9 kg", quantity: 2 },
        ]
    },
    {
        name: "Tipo de Lavadora",
        items: [
            { name: "Carga superior", quantity: 2 },
            { name: "Carga frontal", quantity: 3 },
            { name: "Automática", quantity: 1 },
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
        name: "Eficiencia Energética",
        items: [
            { name: "A", quantity: 2 },
            { name: "B", quantity: 3 },
            { name: "C", quantity: 1 },
        ]
    },
];
