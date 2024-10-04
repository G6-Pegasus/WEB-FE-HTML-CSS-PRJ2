import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import * as Interfaces from '../../utils/interfaces'
import { convertNumberToMoney } from '../../utils/functions'
import { useCartStore } from '../../hooks/useCartStore'
import { useShallow } from 'zustand/shallow'
import { useState } from 'react'

const FeaturedProduct = (product : Interfaces.FeaturedProduct) => {
    const { id, imageUrl, name, brand, category, subCategory, price, discount } = product
    const [isProductInCart, setIsProductInCart] = useState<Boolean>(false)
    const { addCartProduct, deleteCartProduct, existsProduct } = useCartStore(useShallow(state => ({ 
        addCartProduct: state.addProduct,
        deleteCartProduct: state.deleteProduct,
        existsProduct: state.existsProduct
    })))

    const handleButton = () => {
        setIsProductInCart(!existsProduct(id))
        if (isProductInCart) deleteCartProduct(id)
        else addCartProduct({...product})
    }

    return (
        <div className="flex flex-col border p-4 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105">
            <Link to={`/${category}/${subCategory}/${id}`} className="flex flex-col grow">
                <img src={imageUrl} alt={`${name} ${brand}`} className="w-full h-auto object-cover" />
                <h2 className="text-lg font-bold text-[#211f43] pb-4 grow">{`${name} ${brand}`}</h2>
                <p className="text-[#888]">
                    <span className="line-through">{convertNumberToMoney(price)}</span>
                </p>
                <p className="text-[#2b8603] text-2xl font-bold">
                    {convertNumberToMoney(price * (1 - discount / 100))} <span className="text-[#888] text-base">(-{convertNumberToMoney(discount)}%)</span>
                </p>
            </Link>
            <div className="py-4">
                <button onClick={handleButton} className="bg-[#3a3a7a] text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-[#211f43] transition duration-200 w-full">
                    <FontAwesomeIcon icon={faCartPlus} className="mr-2 text-xl" />
                    {isProductInCart ? "Eliminar del carrito" : "Agregar al carrito"}
                </button>
            </div>
        </div>
    )
}

export default FeaturedProduct


