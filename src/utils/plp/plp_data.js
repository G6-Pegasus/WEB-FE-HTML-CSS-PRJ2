export async function get_plp_data(category, subCategory) {
    try {
        return await import(`./plp/${category}/${subCategory}`)
    } catch (err) {
        return { data_plp_products: [], data_plp_filters: [] }
    }
}