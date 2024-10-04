import Main from "../components/main/Main"
import FeaturedProduct from "../components/home/FeaturedProduct"
import Banner from '../components/home/Banner'
import PromotionalImages from "../components/data/PromotionalImages"
import * as Interfaces from '../utils/interfaces'
import { useFeaturedProducts } from "../hooks/useFeaturedProductsData"


interface Product {
    id: number
    imageUrl: string
    name: string
    brand: string
    category: string
    subCategory: string
    loadDate: string
    description: string
    info: {
        [key : string ]: string;
    }
    starts: number 
    reviews: number
    price: number 
    discount: number
}



const Home = () => {
    const data_promotional_images: Interfaces.PromotionalImage[] = []
    const { data: products, isLoading, isError } = useFeaturedProducts();

    return (
        <Main>
            <div className="flex flex-col items-center">
                <PromotionalImages />
            </div>

            <h1 className="text-[#211f43] text-center pt-6 font-bold text-2xl">Productos Destacados</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 py-6 mb-5">
                {isLoading && (
                    <p>Cargando productos...</p>
                )}
                
                {isError && (
                    <p>Error!!!</p>
                )}

                {!isLoading && !isError && (
                    products.map(({id, imageUrl, name, category, subCategory, price, discount }, index) => {
                        return (
                            <FeaturedProduct
                                key={index}
                                id={id}
                                imageUrl={imageUrl}
                                name={name}
                                brand={brand}
                                category={category}
                                subCategory={subCategory}
                                price={price}
                                discount={discount}
                            />
                        )
                    })
                )}
            </div>
            <Banner bannerUrl="https://i.postimg.cc/YC6Ncf2n/banner.png" />
        </Main>
    )
}

export default Home;