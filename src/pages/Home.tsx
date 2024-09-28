import Main from "../components/main/Main"
import FeaturedProduct from "../components/home/FeaturedProduct"
import { featuredProducts } from "../utils/home/featured_products"
import Banner from '../components/home/Banner'
import PromotionalImage from "../components/home/PromotionalImage"

import React from 'react';


const Home: React.FC = () => {
    return (
        <Main>
            <div className="flex flex-col items-center ">
            <PromotionalImage />
            </div>

            <h1 className="text-[#211f43] text-center pt-6 font-bold text-2xl">Productos Destacados</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 py-6 mb-5">
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
            <Banner bannerUrl="https://i.postimg.cc/YC6Ncf2n/banner.png" />
        </Main>
    )
}

export default Home;