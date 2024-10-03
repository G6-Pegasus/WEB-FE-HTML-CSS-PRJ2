import Main from "../components/main/Main"
import FeaturedProduct from "../components/home/FeaturedProduct"
import Banner from '../components/home/Banner'
import PromotionalImage from "../components/home/PromotionalImage"
import * as Interfaces from '../utils/interfaces'
import { useEffect, useState } from "react";


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
    const [products, setProductos] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        const fetchProductos = async () => {
          try {
            const response = await fetch(
              "https://web-fe-html-css-prj2-api.onrender.com/featuredProducts"
            );
            if (!response.ok) {
              throw new Error("Error al cargar los productos");
            }
            const data = await response.json();
            setProductos(data);
          } catch (err) {
            setError((err as Error).message);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchProductos();
      }, []);
      
    return (
        <Main>
            <div className="flex flex-col items-center ">
                {data_promotional_images.map(({ id, imageUrl, description }) => 
                    <PromotionalImage key={id} imageUrl={imageUrl} description={description} />)}
            </div>

            <h1 className="text-[#211f43] text-center pt-6 font-bold text-2xl">Productos Destacados</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 py-6 mb-5">
           
            {isLoading && (
                <p>Cargando productos...</p>
            )}
            
            {error && (
                <p>Error: {error}</p>
            )}

            {!isLoading && !error && (
                products.map(({ id, imageUrl, name, category, subCategory, price, discount }, index) => {
                    return (
                        <FeaturedProduct
                            key={index}
                            id={id}
                            imageUrl={imageUrl}
                            name={name}
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