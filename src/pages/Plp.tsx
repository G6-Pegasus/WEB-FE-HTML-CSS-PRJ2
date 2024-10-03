import { useState, useEffect } from "react";
import Product from "../components/plp/Product";
import { Link, useParams } from "react-router-dom";
import Main from "../components/main/Main";
import Filter from "../components/plp/Filter";
import * as Interfaces from '../utils/plp/interfaces';
import Banner from "../components/home/Banner";
import { useFilters } from '../hooks/useFiltersData';
import { get_plp_data } from "../utils/plp/plp_data";
import Spinner from "../components/common/spinner";
import Error from "../components/common/error";

type Params = {
    category: Interfaces.SubCategories,
    subCategory: Interfaces.SubCategories
}

const Plp = () => {
    const { category = "", subCategory = "" } = useParams<Params>();
    const [products, setProducts] = useState<Interfaces.Product[]>([]);
    const { data: filters, isLoading: isLoadingFilters, error: filtersError } = useFilters(category as string, subCategory as string);

    useEffect(() => {
        const getData = async () => {
            const { data_plp_products } = await get_plp_data(subCategory ?? (category == "Celulares" ? "Celularesc" : category));
            setProducts(data_plp_products);
        };
        getData();
    }, [category, subCategory]);

    return (
        <Main>
            <section className="flex flex-col md:flex-row gap-5">
                <aside className="inline-block m-2 p-4 bg-[#211f43] rounded-lg h-max max-w-full sm:w-auto md:w-1/4 sm:max-w-xs shadow-">
                    <h3 className="text-white font-bold mb-2 text-lg">Filtros</h3>
                    {isLoadingFilters ? (
                        <Spinner />
                    ) : filtersError ? (
                        <Error message="No se pudo cargar los filtros." />
                    ) : filters && filters.length > 0 ? (
                        filters.map((filter: Interfaces.Filter, index: number) => (
                            <Filter key={index} name={filter.name} items={filter.items} />
                        ))
                    ) : (
                        <p className="text-white">Selecciona una subcategoría para ver filtros</p>
                    )}
                </aside>
                <section className="md:w-3/4 flex flex-col gap-5 mx-4 md:mx-0 md:mb-4">
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
                            const { imageUrl, name, brand, starts, reviews, price, discount } = product;
                            return <Link key={index} className="Block" to="#">
                                <Product imageUrl={imageUrl} name={name} brand={brand} starts={starts}
                                    reviews={reviews} price={price} discount={discount} />
                            </Link>
                        })}
                    </section>
                </section>
            </section>
            <Banner bannerUrl="https://i.postimg.cc/hjVLLgrm/banner-plp.png" />
        </Main>
    );
};

export default Plp;