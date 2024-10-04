import React from 'react';
import { useParams } from 'react-router-dom';
import {useFeaturedProducts} from '../hooks/usePdpData';

const Pdp: React.FC = () => {
  const { category, subCategory, productId } = useParams(); //Obtiene los parámetros de la URL
  
  const product = {
    image: 'url-de-la-imagen-del-producto',
    description: 'Una breve descripción del producto.',
    specifications: {
      'Peso': '1.5 kg',
      'Dimensiones': '10 x 15 x 20 cm',
      'Color': 'Negro',
      'Material': 'Acero inoxidable',
    },
  };
  const relatedProducts = [
    { id: 1, image: 'url-imagen1', name: 'Producto 1' },
    { id: 2, image: 'url-imagen2', name: 'Producto 2' },
    { id: 3, image: 'url-imagen3', name: 'Producto 3' },
    { id: 4, image: 'url-imagen4', name: 'Producto 4' },
  ];

  const { data: products, isLoading, isError } = useFeaturedProducts(category || "" , subCategory || "", productId || "");

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
        <h3 className="text-xl font-semibold mb-4">Especificaciones Técnicas</h3>
        <table className="w-full">
          <tbody>
            {Object.entries(product.specifications).map(([key, value]) => (
              <tr key={key} className="text-left">
                <td className="font-semibold">{key}:</td>
                <td className="pl-4">{value}</td>
              </tr>
            ))}
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