import * as interfaces from "./interfaces";


const location_subcategories: Record<interfaces.Subcategories, string> = {
    "Climatización": "./appliance/climate_control.ts",
    "Refrigeración": "./appliance/cooling.ts",
    "Lavadoras-Secadoras": "./appliance/washing_machine.ts",
    "": ""
}

export async function get_plp_data(category: interfaces.Subcategories): Promise<interfaces.data_plp> {
    try {
        if(category === "") return { data_plp_products: [], data_plp_filters: [] };
        const { data_plp_products, data_plp_filters } = await import(location_subcategories[category]);
        return { data_plp_products, data_plp_filters };
    } catch (err) {
        console.error(err);
        return { data_plp_products: [], data_plp_filters: [] };
    }
}
