export async function get_plp_data(category, subCategory) {
    try {
        const { data_plp_products, data_plp_filters } = await import(`./plp/${category}/${subCategory}`)
        return { data_plp_products, data_plp_filters }
    } catch (err) {
        return { data_plp_products: [], data_plp_filters: [] }
    }
}