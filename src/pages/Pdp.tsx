import React from 'react';

const Pdp: React.FC = () => {
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

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row items-start mb-8">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img src={product.image} alt="Producto" className="w-full object-cover" />
        </div>
        <div className="lg:w-1/2 lg:pl-6">
          <p className="text-lg font-semibold mb-4">{product.description}</p>
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