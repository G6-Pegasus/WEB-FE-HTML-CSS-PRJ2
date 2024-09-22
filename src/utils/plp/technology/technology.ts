import { Product, Filter } from '../interfaces'

export const data_plp_products: Product[] = [
    { 
        id: 51,
        imageUrl: "https://www.alkosto.com/medias/4548736108011-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0MzMyOHxpbWFnZS93ZWJwfGFHUmxMMmcxTUM4eE5ESTVNemd3T0RRME56VXhPQzgwTlRRNE56TTJNVEE0TURFeFh6QXdNVjgzTlRCWGVEYzFNRWd8Mjg0MjMyNjA1Mjg3MTA5ZTgyNDFhOGQ4MTU4NDYzNDlhODA1MTQwNzAyNWIyZDIxODVhMmMyZmYyYWM1ZDFmOQ", 
        name: "Minicomponente SONY", 
        brand: "MHC-V73D 550 Watts Negro Torre de Sonido", 
        category: "Tecnología",
        subCategory: "Audio",
        starts: 5,
        reviews: 86,
        price: 3599900, 
        discount: 40 
    },
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
        id: 61,
        imageUrl: "https://www.alkosto.com/medias/4711387480731-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyOTg3MnxpbWFnZS93ZWJwfGFHTXdMMmhpWVM4eE5EUXhNRFV4TmpNMk5UTTBNaTgwTnpFeE16ZzNORGd3TnpNeFh6QXdNVjgzTlRCWGVEYzFNRWd8Y2EyYjE0M2EzMjI1ZWI2OGEzODk0ZmZkNTczNzE4OWRhOTVjYmI0ZWEzMDNjODgwOTdlYmQ2MTFmMTVkNTU4Mg", 
        name: "Computador Portátil", 
        brand: "ASUS Vivobook Go 15.6\" Pulgadas E1504FA - AMD Ryzen 5 - RAM 16GB - Disco SSD 1 TB - Negro", 
        category: "Tecnología",
        subCategory: "Computadores",
        starts: 5,
        reviews: 47,
        price: 3799900, 
        discount: 40 
    },
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
        id: 76,
        imageUrl: "https://www.alkosto.com/medias/7702271847102-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyMjQ2MnxpbWFnZS93ZWJwfGFESmhMMmcxT1M4eE5EWXhOVFV5TVRFMk5UTTBNaTgzTnpBeU1qY3hPRFEzTVRBeVh6QXdNVjgzTlRCWGVEYzFNRWd8MGRmYzE3ZGU1YjgyZjA2OWFhYTI3Mjk0Y2M1Y2QwNzMzMmEyODI2NjAzNzc2NzIwNWUwZjZlNzJjZjA1YzNkMw", 
        name: "Sistema de Video seguridad", 
        brand: "DVR VTA Inalámbrico 1Tera + 4 cámaras 1080P", 
        category: "Tecnología",
        subCategory: "Video",
        starts: 5,
        reviews: 1,
        price: 2499900, 
        discount: 0 
    }
]

export const data_plp_filters: Filter[] = []