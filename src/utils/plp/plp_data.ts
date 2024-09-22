import { data_plp, SubCategories } from "./interfaces"

const location_categories: Record<SubCategories, string> = {
    "Electrodomésticos": "./appliance/appliance.ts",
    "Climatización": "./appliance/climate_control.ts",
    "Refrigeración": "./appliance/cooling.ts",
    "Lavadoras-Secadoras": "./appliance/washing_machine.ts",
    "Celularesc": "./cell/cells.ts",
    "Celulares": "./cell/cell.ts",
    "Tabletas": "./cell/tablet.ts",
    "Smartwatchs": "./cell/smartwatch.ts",
    "Hogar": "./home/home.ts",
    "Salas": "./home/living_room.ts",
    "Comedor": "./home/dining_room.ts",
    "Cocina": "./home/kitchen.ts",
    "Baño": "./home/bathroom.ts",
    "Tecnología": "./technology/technology.ts",
    "Computadores": "./technology/computer.ts",
    "Televisores": "./technology/tv.ts",
    "Audio": "./technology/audio.ts",
    "Video": "./technology/video.ts",
    "Impresión": "./technology/printout.ts",
    "Cámaras": "./technology/camera.ts",
    "": ""
}

const formatNumber = new Intl.NumberFormat('es-CL', { 
    style: 'currency', 
    currency: 'CLP' 
})

export const convertNumberToMoney = (value : number) => formatNumber.format(value)

export async function get_plp_data(category : SubCategories) : Promise<data_plp> {
    try {
        return await import(/* @vite-ignore */ location_categories[category])
    } catch (err) {
        console.log(err)
        return { data_plp_products: [], data_plp_filters: [] }
    }
}

