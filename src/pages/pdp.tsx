import Ymbi from '../components/pdp/RelatedProducts';
import Main from "../components/main/Main";

const Pdp = () => {
    const productId = 143; 
    console.log('Cargando página de PDP con el productId:', productId);

    return (
        <Main>
            <h1>Detalles del Producto {productId}</h1>
            <Ymbi productId={productId} />
        </Main>
    );
};

export default Pdp;
