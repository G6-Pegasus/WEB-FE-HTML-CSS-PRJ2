import { Link } from "react-router-dom"
import Main from "../components/main/Main"
import Product from "../components/plp/Product"

const Plp = () => {
    const products = [...Array(5)]

    return <Main>
        <section className="flex flex-col md:flex-row sm:mx-5 mx-2 sm:mb-5 mb-2 gap-5">
            
            <aside className="md:w-1/4 bg-gray-200 p-4"></aside>

            <section className="md:w-3/4 flex flex-col gap-5">
                
                {/* ----------------------------- TITLE ------------------------------ */}
                <section className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <h3 className="text-lg font-bold text-[#211f43]">{products.length} resultados de 11</h3>
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
                    {products.map((_, index) => <Link key={index} className="Block" to={"/"}>
                        <Product 
                            imageUrl="https://g6-pegasus.github.io/WEB-FE-HTML-CSS-PRJ1/img/aire1-plp.PNG" 
                            name="Aire Acondicionado" 
                            brand="M/Split - Olimpo - Inverter 12000 BTU 110V Clase D." 
                            starts={4} reviews={48} 
                            price={2499000} discount={0.5} />
                    </Link>)}
                </section>

            </section>
        
        </section>
    </Main>
}

export default Plp