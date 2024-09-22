import Main from "../components/main/Main"
import FeaturedProduct from "../components/home/FeaturedProduct"
import { featuredProducts } from "../utils/home/featured_products"
import BannerImage from '../components/home/Banner'
import PromotionalImage from "../components/home/PromotionalImage"
import { data_promotional_images } from "../utils/home/promotional_image"

const Home = () => {
    return (
        <Main>
            <div className="flex flex-col items-center ">
                {data_promotional_images.map(({ imageUrl, description }, index) => 
                    <PromotionalImage key={index} imageUrl={imageUrl} description={description} />)}
            </div>

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

            <BannerImage bannerUrl="https://i.postimg.cc/YC6Ncf2n/banner.png" />
        </Main>
    )
}

export default Home;