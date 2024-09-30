import Main from "../components/main/Main"
import FeaturedProduct from "../components/home/FeaturedProduct"
import Banner from '../components/home/Banner'
import PromotionalImage from "../components/home/PromotionalImage"
import * as Interfaces from '../utils/interfaces'

const Home = () => {
    const data_promotional_images: Interfaces.PromotionalImage[] = []
    const featuredProducts: Interfaces.FeaturedProduct[] = [
        {
            id: 1,
            imageUrl: "https://www.alkosto.com/medias/7704353418637-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w5MjY2fGltYWdlL3dlYnB8YURRd0wyaGxNQzh4TkRZeU9EUXpPRFF3T1RJME5pODNOekEwTXpVek5ERTROak0zWHpBd01WODNOVEJYZURjMU1FZ3xmZDEyYTE4MzZhYWUzODM3NTFkODYxYTdhZmQzZmU4YTcxZTE0ZTBiYjM3NjY5OWU5MDE1MWYzZjQ3ZjcwNjlm",
            name: "Estufa de Piso HACEB",
            brand: "4 Puestos Con Horno Gas Natural Romero 50-Torre Negro",
            price: 700000,
            discount: 40
        },
        {
            id: 2,
            imageUrl: "https://www.alkosto.com/medias/7704353418637-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w5MjY2fGltYWdlL3dlYnB8YURRd0wyaGxNQzh4TkRZeU9EUXpPRFF3T1RJME5pODNOekEwTXpVek5ERTROak0zWHpBd01WODNOVEJYZURjMU1FZ3xmZDEyYTE4MzZhYWUzODM3NTFkODYxYTdhZmQzZmU4YTcxZTE0ZTBiYjM3NjY5OWU5MDE1MWYzZjQ3ZjcwNjlm",
            name: "Estufa de Piso HACEB",
            brand: "4 Puestos Con Horno Gas Natural Romero 50-Torre Negro",
            price: 650000,
            discount: 25
        }
    ]

    return (
        <Main>
            <div className="flex flex-col items-center">
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