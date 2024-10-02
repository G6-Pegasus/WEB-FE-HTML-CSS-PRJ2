import Main from "../components/main/Main"
import FeaturedProduct from "../components/home/FeaturedProduct"
import Banner from '../components/home/Banner'
import PromotionalImage from "../components/home/PromotionalImage"
import * as Interfaces from '../utils/interfaces'

const Home = () => {
    const data_promotional_images: Interfaces.PromotionalImage[] = []
    const featuredProducts: Interfaces.FeaturedProduct[] = []

    return (
        <Main>
            <div className="flex flex-col items-center ">
                {data_promotional_images.map(({ id, imageUrl, description }) => 
                    <PromotionalImage key={id} imageUrl={imageUrl} description={description} />)}
            </div>

            <h1 className="text-[#211f43] text-center pt-6 font-bold text-2xl">Productos Destacados</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 py-6 mb-5">
                {featuredProducts.map(({ id, imageUrl, name, brand, category, subCategory, price, discount }, index) => {
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
                })}
            </div>
            <Banner bannerUrl="https://i.postimg.cc/YC6Ncf2n/banner.png" />
        </Main>
    )
}

export default Home;