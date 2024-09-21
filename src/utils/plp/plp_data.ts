const formatNumber = new Intl.NumberFormat('es-CL', { 
    style: 'currency', 
    currency: 'CLP' 
})

export const convertNumberToMoney = (value : number) => formatNumber.format(value)

export async function get_plp_data(category : string, subCategory: string) {
    try {
        return await import(`./plp/${category}/${subCategory}.ts`)
    } catch (err) {
        return { data_plp_products: [], data_plp_filters: [] }
    }
}