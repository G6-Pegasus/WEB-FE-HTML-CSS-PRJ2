import { Link, useParams } from "react-router-dom"
import Main from "../components/main/Main"
import Product from "../components/plp/Product"
import { useState, useEffect } from "react"
import { get_plp_data } from "../utils/plp/plp_data"
import * as Interfaces from '../utils/plp/interfaces'

type Params = {
    category: Interfaces.SubCategories,
    subCategory: Interfaces.SubCategories
}

const Plp = () => {
    const { category = "", subCategory } = useParams<Params>();
    const [products, setProducts] = useState<Interfaces.Product[]>([])
    const [filters, setFilters] = useState<Interfaces.Filter[]>([])

    useEffect(() => {
        const getData = async () => {
            const { data_plp_products, data_plp_filters } = await get_plp_data(subCategory ?? (category == "Celulares" ? "Celularesc" : category))
            setProducts(data_plp_products)
            setFilters(data_plp_filters)
        }
        getData()
    }, [category, subCategory])

    return <Main>
        <section className="flex flex-col md:flex-row sm:mx-5 mx-2 sm:mb-5 mb-2 gap-5">
            
            <aside className="md:w-1/4 bg-gray-200 p-4"></aside>

            <section className="md:w-3/4 flex flex-col gap-5">
                
                {/* ----------------------------- TITLE ------------------------------ */}
                <section className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <h3 className="text-lg font-bold text-[#211f43]">{products.length} resultados de {products.length}</h3>
                    <section className="flex items-center">
                        <label htmlFor="Orderby-plp" className="mr-2">Ordenar por:</label>
                        <select name="options" id="Orderby-plp" className="border border-gray-300 rounded-md p-1">
                            {[
                                "Relevancia", "Fecha de carga", 
                                "Precio menor a mayor", "Precio mayor a menor"
                            ].map((value, index) => <option key={index} value={value}>{value}</option>)}
                        </select>
                    </section>
                </section>

                {/* --------------------- LIST OF PRODUCTS ---------------------- */}
                <section className="grid gap-4">
                    {products.map((product, index) => {
                        const { id, imageUrl, name, brand, category, subCategory, starts, reviews, price, discount } = product
                        const url = `/${category}/${subCategory}/${id}`

                        return <Link key={index} className="Block" to={url}>
                            <Product imageUrl={imageUrl} name={name} brand={brand} starts={starts} 
                                reviews={reviews} price={price} discount={discount} />
                        </Link>
                    })}
                </section>

            </section>
        
        </section>
    </Main>
}

export default Plp