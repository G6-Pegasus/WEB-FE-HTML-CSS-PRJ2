import React from 'react';
import { useRelatedProducts } from '../../hooks/useRelatedProductsData';
import Spinner from '../common/spinner';
import Error from '../common/error';
import FeaturedProduct from '../home/FeaturedProduct';
import { convertNumberToMoney } from "../../utils/plp/plp_data"; 

interface YmbiProps {
    productId: number;
}

const Ymbi: React.FC<YmbiProps> = ({ productId }) => {
    const { data: relatedProducts, isLoading, isError } = useRelatedProducts(productId);

    if (isLoading) return <Spinner />;
    if (isError) return <Error message="Hubo un error al cargar los productos relacionados." />;

    if (!relatedProducts || relatedProducts.length === 0) {
        return <p>No hay productos relacionados disponibles.</p>;
    }

    return (
        <section className="grid grid-cols-1 sm:grid-cols-4 gap-6 my-10 mx-20">
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
    );
};

export default Ymbi;
