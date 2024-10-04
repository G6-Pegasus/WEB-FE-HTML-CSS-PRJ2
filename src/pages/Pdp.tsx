import React from 'react';
import { useParams } from 'react-router-dom';
import {useFeaturedProducts} from '../hooks/usePdpData';
import { PDPInfo}  from '../hooks/usePdpInfo'; 


const Pdp: React.FC = () => {
  const { category, subCategory, productId } = useParams(); // Obtiene los parámetros de la URL
  
  
  const { data: productInfo } = PDPInfo(category || "", subCategory || "", productId || "");

  const relatedProducts = [
    { id: 1, image: 'url-imagen1', name: 'Producto 1' },
    { id: 2, image: 'url-imagen2', name: 'Producto 2' },
    { id: 3, image: 'url-imagen3', name: 'Producto 3' },
    { id: 4, image: 'url-imagen4', name: 'Producto 4' },
  ];

  const { data: products, isLoading, isError } = useFeaturedProducts(category || "", subCategory || "", productId || "");


  const priceDiscount = Number(
    ((products?.price ?? 0) - (products?.price ?? 0) * (products?.discount ?? 0) / 100).toFixed(2));  

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row items-start mb-8">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          {
            isLoading && (
              <p>Insertar Spinner</p>
            )
          }
          {
            isError && (
              <p>Insertar componente error</p>
            )
          }
          {!isLoading && !isError && (
              <div>
                <div>
                  <img src={products.imageUrl} alt="Producto" className="w-full object-cover" />
                </div>
                <div className="lg:w-1/2 lg:pl-6">
                  <h1>{products.name}</h1>
                  <p>{products.price}</p>
                  <p>{products.discount}</p>
                  <p>{priceDiscount}</p>
                  <p className="text-lg font-semibold mb-4 text-black">{products.description}</p>
                </div>
              </div>
            )
          }
        </div>
      </div>
      <div className="mb-8">
  <h3 className="text-xl font-semibold mb-4"></h3>
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
  );
};

export default Pdp;