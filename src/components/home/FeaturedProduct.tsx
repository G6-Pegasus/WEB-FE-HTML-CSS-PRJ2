import { featuredProducts } from "../../utils/home/featured_products";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


const FeaturedProduct = () => {
    return (
        <div>
            <h1 className="text-[#211f43] text-center pt-4 font-bold text-2xl">Productos Destacados</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
                {featuredProducts.map((product, index) => {
                    const normalPrice = Math.floor(product.normalPrice);
                    const discountPrice = Math.floor(normalPrice * (1 - product.discount / 100));
                    const formattedPrice = normalPrice.toLocaleString(); 
                    const formattedDiscountPrice = discountPrice.toLocaleString();

                    return (
                        <div key={index} className="border p-4 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105">
                            <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover mb-4" />
                            <h2 className="text-lg font-bold text-[#211f43]">{product.name}</h2>
                            <p className="text-[#888]">
                                <span className="line-through">${formattedPrice}</span>
                            </p>
                            <p className="text-[#2b8603] text-2xl font-bold">
                                ${formattedDiscountPrice} <span className="text-[#888] text-base">({product.discount}%)</span>
                            </p>
                            <div className="py-4">
                                <button className="bg-[#3a3a7a] text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-[#211f43] transition duration-200 w-full">
                                <FontAwesomeIcon icon={faCartPlus} className="mr-2 text-xl" />
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FeaturedProduct;

