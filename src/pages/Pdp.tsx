import React, { useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useProductDescription }  from '../hooks/useProductDescription';
import { convertNumberToMoney } from '../utils/functions';
import Error from '../components/common/Error'
import Spinner from '../components/common/Spinner'
import RelatedProducts from '../components/pdp/RelatedProducts';
import Main from '../components/main/Main';
import { useCartStore } from '../hooks/useCartStore'
import { useShallow } from 'zustand/shallow'

const Pdp: React.FC = () => {
    const { productId = 0 } = useParams()
    const { data: productPDP, isLoading, isError } = useProductDescription(Number(productId))
    const [isProductInCart, setIsProductInCart] = useState<Boolean>(false)
    const { addCartProduct, deleteCartProduct, existsProduct } = useCartStore(useShallow(state => ({ 
        addCartProduct: state.addProduct,
        deleteCartProduct: state.deleteProduct,
        existsProduct: state.existsProduct
    })))

    const [quantity, setQuantity] = useState(1)
    const incrementQuantity = () => setQuantity(quantity < 15 ? quantity + 1 : quantity)
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity)
    const addToCart = () => {
        setIsProductInCart(!existsProduct(productPDP?.id))
        if (isProductInCart) deleteCartProduct(productPDP?.id)
        else addCartProduct({
            imageUrl: productPDP?.imageUrl ?? "",
            name: productPDP?.name ?? "",
            brand: productPDP?.brand ?? "",
            price: productPDP?.price ?? 0,
            discount: productPDP?.discount ?? 0
        }, quantity)
    }

    return <Main>
        <section className="flex flex-col mb-8">
            <div className="w-full flex items-center">
                {isLoading && (<Spinner />)}
                {isError && (<Error message={"No se pudo cargar la informacion del producto"} />)}
                {!isLoading && !isError && productPDP && (
                    <div className="w-full mb-6">
                        <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 m-4 bg-white p-6 rounded-lg shadow-lg'>
                            <div className='flex col-span-1 lg:col-span-2 justify-center'>
                                <img src={productPDP.imageUrl} alt="Producto" className="w-auto h-full" />
                            </div>
                            <div className="col-span-1 lg:col-span-3 lg:pl-6">
                                <h1 className='text-4xl font-semibold text-[#211f43]'>
                                    {productPDP.name}{productPDP.brand}
                                </h1>
                                <p className='line-through text-[#999]'>{convertNumberToMoney(productPDP.price)}</p>
                                <p className='font-bold text-xl text-[#2b8603]'>
                                    {convertNumberToMoney(productPDP.price * (1 - productPDP.discount / 100))} <span>(-{productPDP.discount}%)</span>
                                </p>
                                <p className="text-lg font-semibold mb-4 text-[#211f43]">{productPDP.description}</p>
                                <div className="flex items-center space-x-2">
                                    <div className="flex items-center border border-gray-300 rounded-lg">
                                        <button onClick={decrementQuantity} className="px-2 py-1 bg-gray-100 rounded-l-lg hover:bg-gray-200">
                                            -
                                        </button>
                                        <input
                                          type="text"
                                          value={quantity}
                                          readOnly
                                          className="w-12 text-center border-x-0 focus:outline-none"
                                        />
                                        <button onClick={incrementQuantity} className="px-2 py-1 bg-gray-100 rounded-r-lg hover:bg-gray-200">
                                            +
                                        </button>
                                    </div>
                                    <button onClick={addToCart} className="bg-[#3a3a7a] text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-[#211f43] transition duration-200">
                                        <FontAwesomeIcon icon={faCartPlus} className="mr-2 text-xl" />
                                        {isProductInCart ? "Eliminar del carrito" : "Agregar al carrito"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
      
            <div className="mb-8 p-10">
                <table className="w-full border-t border-b border-gray-400">
                    <thead>
                        <tr>
                            <th colSpan={3} className="text-center py-2 font-bold text-gray-700">
                                Especificaciones Técnicas
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading && (<tr><td><Spinner /></td></tr>)}
                        {isError && (<tr><td><Error message={"No se pudo cargar la informacion del producto"} /></td></tr>)}
                        {!isLoading && !isError && productPDP && Object.entries(productPDP.info ?? {}).map(([key, value], index) => {
                            return (
                              <tr key={index} className="border-t border-gray-300">
                                    <td className="font-semibold py-2">{key}:</td>
                                    <td className="pl-4 py-2 text-right ">{`${key}: ${value}`}</td>
                              </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <RelatedProducts productId={productPDP?.id ?? 0} />
        </section>
    </Main>
}

export default Pdp;