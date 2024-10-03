import React from 'react';
import { useRelatedProducts } from '../../hooks/useRelatedProductsData';
import Error from '../common/error';
import FeaturedProduct from '../home/FeaturedProduct';
import SkeletonPlaceholder from '../common/skeleton'; 
import { convertNumberToMoney } from "../../utils/plp/plp_data"; 

const Ymbi: React.FC = () => {
    const productId = 123; 
    const { data: relatedProducts, isLoading, isError } = useRelatedProducts(productId);

    return (
        <div>
            <h2 className="text-[#211f43] text-center pt-6 font-bold text-2xl">Te podría interesar</h2>
            {isLoading ? (
                <section className="flex justify-center items-center grid-cols-1 sm:grid-cols-4 gap-6 mt-5 mb-10 mx-auto w-3/4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <SkeletonPlaceholder key={index} />
                    ))}
                </section>
            ) : isError ? (
                <div className="my-10">
                    <Error message="Hubo un error al cargar los productos relacionados." />
                </div>
            ) : !relatedProducts || relatedProducts.length === 0 ? (
                <p>No hay productos relacionados disponibles.</p>
            ) : (
                <section className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-5 mb-10 mx-auto w-3/4">
                    {relatedProducts.map((product, index) => {
                        const formattedPrice = convertNumberToMoney(product.price || 0);
                        const formattedDiscountPrice = convertNumberToMoney(
                            (product.price || 0) * (1 - (product.discount || 0) / 100)
                        );

                        return (
                            <FeaturedProduct
                                key={product.id}
                                product={{
                                    imageUrl: product.imageUrl || '',
                                    name: product.name || 'Producto sin nombre',
                                    normalPrice: product.price || 0,
                                    discount: product.discount || 0
                                }}
                                formattedPrice={formattedPrice}
                                formattedDiscountPrice={formattedDiscountPrice}
                                index={index}
                            />
                        );
                    })}
                </section>
            )}
        </div>
    );
};

export default Ymbi;
