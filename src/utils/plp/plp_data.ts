import { data_plp } from "./interfaces"

const formatNumber = new Intl.NumberFormat('es-CL', { 
    style: 'currency', 
    currency: 'CLP' 
})

export const convertNumberToMoney = (value : number) => formatNumber.format(value)

export async function get_plp_data(category : string, subCategory: string) : Promise<data_plp> {
    try {
        return await import(`./plp/${category}/${subCategory ?? category}.ts`)
    } catch (err) {
        return { data_plp_products: [], data_plp_filters: [] }
    }
}