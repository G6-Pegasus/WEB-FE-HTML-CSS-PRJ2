import React, { useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { useFeaturedProducts } from '../hooks/usePdpData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { PDPInfo}  from '../hooks/usePdpInfo';

const Pdp: React.FC = () => {
  const { category, subCategory, productId } = useParams()

  const { data: products, isLoading, isError } = useFeaturedProducts(category || "", subCategory || "", productId || "")
  const { data: productInfo } = PDPInfo(category || "", subCategory || "", productId || "");
  const normalPrice = products ? Math.floor(products.price) : 0;
  const discountPrice = products ? Math.floor(normalPrice * (1 - products.discount / 100)) : 0

  const [quantity, setQuantity] = useState(1)
  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="grid grid-rows-4 gap-4 mb-8">
      <div className="w-full flex items-center">
        {isLoading && (<p>Insertar Spinner</p>)}
        {isError && (<p>Insertar componente error</p>)}
        {!isLoading && !isError && products && (
          <div className="w-full mb-6">
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 m-4 bg-white p-6 rounded-lg shadow-lg'>
              <div className='item-self:center col-span-1 lg:col-span-3 justify-center'>
                <img src={products.imageUrl} alt="Producto" className="w-auto h-full" />
              </div>
              <div className="col-span-1 lg:col-span-2 lg:pl-6">
                <h1 className='text-4xl font-semibold text-[#211f43]'>
                  {products.name}{products.brand}
                </h1>
                <p className='line-through text-[#999]'>${normalPrice.toLocaleString()}</p>
                <p className='font-bold text-xl text-[#2b8603]'>
                  ${discountPrice.toLocaleString()} <span>({products.discount}%)</span>
                </p>
                <p className="text-lg font-semibold mb-4 text-[#211f43]">{products.description}</p>
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
                  <button className="bg-[#3a3a7a] text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-[#211f43] transition duration-200">
                    <FontAwesomeIcon icon={faCartPlus} className="mr-2 text-xl" />
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mb-8">
      <table className="w-1/2 border-t border-b border-gray-400">
        <thead>
          <tr>
            <th colSpan={3} className="text-center py-2 font-bold text-gray-700">
              Especificaciones Técnicas
            </th>
          </tr>
        </thead>
        <tbody>

                { productInfo?.map((spec: string, index: number) => {
      const [key, value] = spec.split(':').map(part => part.trim());

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
          <div>
            <h3 className="text-xl font-semibold mb-4">Te podría interesar</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((product) => (
                <div key={product.id} className="border rounded-lg p-4">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                  <p className="text-center">{product.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Pdp;