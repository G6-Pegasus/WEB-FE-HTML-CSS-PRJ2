import Product from "../components/plp/Product";
import { Link, useParams } from "react-router-dom";
import Main from "../components/main/Main";
import Filter from "../components/plp/Filter";
import * as Interfaces from '../utils/interfaces'
import Banner from "../components/home/Banner";
import { useFilters } from '../hooks/useFiltersData';
import Spinner from "../components/common/Spinner";
import Error from "../components/common/Error";
import { useProducts } from "../hooks/useProducts";
import SkeletonPlaceholder from "../components/common/Skeleton";
import { useState } from "react";

type Params = {
    category: Interfaces.SubCategories,
    subCategory: Interfaces.SubCategories
}

const PRODUCTS_PER_PAGE: number = 5;

const Plp = () => {
    const { category = "", subCategory = "" } = useParams<Params>();
    const { data: products, isLoading: isLoadingProducts, error: productsError } = useProducts(category, subCategory)
    const { data: filters, isLoading: isLoadingFilters, error: filtersError } = useFilters(category, subCategory);
    const [sortValue, setSortValue] = useState<string>("Relevancia");
    
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = Math.ceil((products?.length ?? 0) / PRODUCTS_PER_PAGE)
    const handleNextPage = () => setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage);
    const handlePreviousPage = () => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);

    function getSort (a: Interfaces.Product, b: Interfaces.Product) : number {
        if (sortValue === "Relevancia") return a["reviews"] - b["reviews"];
        if (sortValue === "Fecha de carga") return b["loadDate"]?.localeCompare(a["loadDate"] ?? "2020-01-01") ?? 0;
        if (sortValue === "Precio menor a mayor") return  a["price"] - b["price"];
        return  b["price"] - a["price"]
    }

    return (
        <Main>
            <section className="flex flex-col md:flex-row gap-5 m-2">
                <aside className="inline-block p-4 bg-[#211f43] rounded-lg h-max max-w-full sm:w-auto md:w-1/4 sm:max-w-xs shadow-">
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
                        <h3 className="text-lg font-bold text-[#211f43]">{products?.length ?? 0} resultados de {products?.length ?? 0}</h3>
                        <section className="flex items-center">
                            <label htmlFor="Orderby-plp" className="mr-2">Ordenar por:</label>
                            <select onChange={e => setSortValue(e.target.value)} name="options" id="Orderby-plp" className="border border-gray-300 rounded-md p-1">
                                {[
                                    "Relevancia", "Fecha de carga", 
                                    "Precio menor a mayor", "Precio mayor a menor"
                                ].map((value, index) => <option key={index} value={value}>{value}</option>)}
                            </select>
                        </section>
                    </section>

                    {/* --------------------- LIST OF PRODUCTS ---------------------- */}
                    <section className="grid gap-4">
                        {isLoadingProducts ? (
                            <SkeletonPlaceholder />
                        ) : productsError ? (
                            <Error message="No se pudo cargar los productos" />
                        ) : products && products.length > 0 ? (
                            <>
                                {products.sort(getSort).slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE)
                                    .map(({ id, imageUrl, name, brand, category, subCategory, starts, reviews, price, discount }, index) => {
                                    const url = `/${category}/${subCategory}/${id}`

                                    return <Link key={index} className="Block" to={url}>
                                        <Product imageUrl={imageUrl} name={name} brand={brand} starts={starts / 10} 
                                            reviews={reviews} price={price} discount={discount} />
                                    </Link>
                                })}
                                <div className="flex items-center justify-between mb-5">
                                    <button
                                        onClick={handlePreviousPage}
                                        disabled={currentPage === 1}
                                        className={`px-4 py-2 rounded bg-[#3a3a7a] text-white hover:opacity-70 ${
                                        currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                    >
                                        Anterior
                                    </button>

                                    <span className="text-gray-700">
                                        Página {currentPage} de {totalPages}
                                    </span>

                                    <button
                                        onClick={handleNextPage}
                                        disabled={currentPage === totalPages}
                                        className={`px-4 py-2 rounded bg-[#3a3a7a] text-white hover:opacity-70 ${
                                        currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                    >
                                        Siguiente
                                    </button>
                                </div>
                            </>
                        ) : (
                            <p className="text-white">No se encontraron productos</p>
                        )}
                    </section>

                </section>

            </section>
        
            <Banner bannerUrl="https://i.postimg.cc/hjVLLgrm/banner-plp.png"/>
        </Main>
    );
};

export default Plp;