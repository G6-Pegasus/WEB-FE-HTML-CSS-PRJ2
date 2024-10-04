import Main from "../components/main/Main"
import FeaturedProduct from "../components/home/FeaturedProduct"
import Banner from '../components/home/Banner'
import PromotionalImages from "../components/home/PromotionalImages"
import { useFeaturedProducts } from "../hooks/useFeaturedProducts"
import Error from '../components/common/Error'
import SkeletonPlaceholder from "../components/common/Skeleton"

const Home = () => {
    const { data: products, isLoading, isError } = useFeaturedProducts();

    return (
        <Main>
            <div className="flex flex-col items-center">
                <PromotionalImages />
            </div>

            <h1 className="text-[#211f43] text-center pt-6 font-bold text-2xl">Productos Destacados</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 py-6 mb-5">
                {isLoading && (<div className="flex flex-col items-center">
                    <SkeletonPlaceholder />
                </div>)}
                
                {isError && (<Error message="Error al cargar los productos" />)}

                {!isLoading && !isError && (
                    products?.map(({id, imageUrl, name, brand, category, subCategory, price, discount }, index) => {
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