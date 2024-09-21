import { featuredProducts } from "../../utils/home/featured_products";

const FeaturedProduct = () => {
    return (
        <div>
            <h1 className="text-[#211f43] text-center pt-4 font-bold text-2xl">Productos Destacados</h1>
            <div className="grid grid-cols-4 gap-6 p-8">
                {featuredProducts.map((product, index) => {
                    const formattedPrice = new Intl.NumberFormat('es-CO', {
                        style: 'currency', 
                        currency: 'COP',
                    }).format(product.normalPrice);

                    const formattedDiscountPrice = new Intl.NumberFormat('es-CO', {
                        style: 'currency', 
                        currency: 'COP',
                    }).format(product.normalPrice - (product.normalPrice * (product.discount / 100)));

                    return (
                        <div key={index} className="border p-4 rounded-lg shadow-md">
                            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4" />
                            <h2 className="text-lg font-bold text-[#211f43]">{product.name}</h2>
                            <p className="text-[#888]">
                                <span className="line-through">{formattedPrice}</span>
                            </p>
                            <p className="text-[#2b8603] text-2xl font-bold">
                                {formattedDiscountPrice} <span className="text-[#888] text-base">({product.discount}%)</span>
                            </p>
                            <button className="bg-[#211f43] text-[#ffffff] ">
                                añadir al carrito
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FeaturedProduct;

