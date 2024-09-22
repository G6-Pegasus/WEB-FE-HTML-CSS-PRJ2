import Main from "../components/main/Main"
import FeaturedProduct from "../components/home/FeaturedProduct"
import { featuredProducts } from "../utils/home/featured_products"

const Home = () => {
    return (
        <Main breadcrumbPages={[]}>
            <h1 className="text-[#211f43] text-center pt-4 font-bold text-2xl">Productos Destacados</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
                {featuredProducts.map((product, index) => {
                    const normalPrice = Math.floor(product.normalPrice)
                    const discountPrice = Math.floor(normalPrice * (1 - product.discount / 100))
                    const formattedPrice = normalPrice.toLocaleString() 
                    const formattedDiscountPrice = discountPrice.toLocaleString()
                    return (
                        <FeaturedProduct
                            key={index}
                            product={product}
                            index={index}
                            formattedPrice={formattedPrice}
                            formattedDiscountPrice={formattedDiscountPrice}
                        />
                    )
                })}
            </div>
        </Main>
    )
}

export default Home