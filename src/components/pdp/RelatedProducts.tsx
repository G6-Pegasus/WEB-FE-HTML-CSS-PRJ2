import { useRelatedProducts } from '../../hooks/useRelatedProducts';
import Error from '../common/Error';
import FeaturedProduct from '../home/FeaturedProduct';
import SkeletonPlaceholder from '../common/Skeleton'; 

const RelatedProducts = ({ productId }: { productId: number }) => {
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
                <div className="my-10 w-1/2 mx-auto text-center">
                    <Error message="No se pudo cargar los productos relacionados." />
                </div>
            ) : !relatedProducts || relatedProducts.length === 0 ? (
                <p>No hay productos relacionados disponibles.</p>
            ) : (
                <section className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-5 mb-10 mx-auto w-3/4">
                    {relatedProducts.map((product, index) => <FeaturedProduct 
                        key={index}
                        id={product.id}
                        imageUrl={product.imageUrl}
                        name={product.name}
                        brand={product.brand}
                        category={product.category}
                        subCategory={product.subCategory}
                        price={product.price}
                        discount={product.discount} />)}
                </section>
            )}
        </div>
    );
};

export default RelatedProducts;
