import * as interfaces from "./interfaces";


const location_subcategories: Record<interfaces.Subcategories, string> = {
    "Climatización": "./appliance/climate_control.ts",
    "Refrigeración": "./appliance/cooling.ts",
    "Lavadoras-Secadoras": "./appliance/washing_machine.ts",
    "Computadores": "./technology/computer.ts",
    "Televisores": "./technology/tv.ts",
    "Audio": "./technology/audio.ts",
    "Vídeo": "./technology/video.ts",
    "Impresión": "./technology/printout.ts",
    "Cámaras": "./technology/camera.ts",
    "Celulares": "./cell/cell.ts",
    "Tabletas": "./cell/tablet.ts",
    "Smartwatchs": "./cell/smartwatch.ts",
    "Salas": "./home/living_room.ts",
    "Comedor": "./home/dining_room.ts",
    "Cocina": "./home/kitchen.ts",
    "Baño": "./home/bathroom.ts",
    "": ""
}

export async function get_plp_data(category: interfaces.Subcategories): Promise<interfaces.data_plp> {
    try {
        if(category === "") return { data_plp_products: [], data_plp_filters: [] };
        const { data_plp_products, data_plp_filters } = await import(/* @vite-ignore */ location_subcategories[category]);
        return { data_plp_products, data_plp_filters };
    } catch (err) {
        console.error(err);
        return { data_plp_products: [], data_plp_filters: [] };
    }
}
