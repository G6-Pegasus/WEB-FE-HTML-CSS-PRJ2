import { data_plp, SubCategories } from "./interfaces"

const location_categories: Record<SubCategories, Promise<data_plp>> = {
    "Electrodomésticos": import("./appliance/appliance.ts"),
    "Climatización": import("./appliance/climate_control.ts"),
    "Refrigeración": import("./appliance/cooling.ts"),
    "Lavadoras-Secadoras": import("./appliance/washing_machine.ts"),
    "Celularesc": import("./cell/cells.ts"),
    "Celulares": import("./cell/cell.ts"),
    "Tabletas": import("./cell/tablet.ts"),
    "Smartwatchs": import("./cell/smartwatch.ts"),
    "Hogar": import("./home/home.ts"),
    "Salas": import("./home/living_room.ts"),
    "Comedor": import("./home/dining_room.ts"),
    "Cocina": import("./home/kitchen.ts"),
    "Baño": import("./home/bathroom.ts"),
    "Tecnología": import("./technology/technology.ts"),
    "Computadores": import("./technology/computer.ts"),
    "Televisores": import("./technology/tv.ts"),
    "Audio": import("./technology/audio.ts"),
    "Vídeo": import("./technology/video.ts"),
    "Impresión": import("./technology/printout.ts"),
    "Cámaras": import("./technology/camera.ts")
}

const formatNumber = new Intl.NumberFormat('es-CL', { 
    style: 'currency', 
    currency: 'CLP' 
})

export const convertNumberToMoney = (value : number) => formatNumber.format(value)

export async function get_plp_data(category : SubCategories | "") : Promise<data_plp> {
    if (category === "") return Promise.resolve({ data_plp_products: [], data_plp_filters: [] });
    return await location_categories[category] || Promise.resolve({ data_plp_products: [], data_plp_filters: [] });
}

