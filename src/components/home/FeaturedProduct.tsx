import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

interface FeaturedProductProps {
    product: {
        imageUrl: string
        name: string
        normalPrice: number
        discount: number
    }
    formattedPrice: string
    formattedDiscountPrice: string
    index: number
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product, formattedPrice, formattedDiscountPrice, index }) => {
    return (
        <div key={index} className="border p-4 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105">
            <Link to="#" className="block">
                <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover" />
                <div className="p-4">
                    <h2 className="text-lg font-bold text-[#211f43]">{product.name}</h2>
                    <p className="text-[#888]">
                        <span className="line-through">${formattedPrice}</span>
                    </p>
                    <p className="text-[#2b8603] text-2xl font-bold">
                        ${formattedDiscountPrice} <span className="text-[#888] text-base">({product.discount}%)</span>
                    </p>
                </div>
            </Link>
            <div className="py-4">
                <button className="bg-[#3a3a7a] text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-[#211f43] transition duration-200 w-full">
                    <FontAwesomeIcon icon={faCartPlus} className="mr-2 text-xl" />
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default FeaturedProduct


