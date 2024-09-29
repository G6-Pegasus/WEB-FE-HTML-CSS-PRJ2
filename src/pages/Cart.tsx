import Main from "../components/main/Main"
import { convertNumberToMoney } from "../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import DataConsumer from '../components/cart/DataContext';
import { Link } from "react-router-dom";

const Cart = () => {
    const { data: products } = DataConsumer();

    return <Main>
        <aside className="px-4 pb-4 grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-4">
            <section className="grid col-span-1 row-span-1 lg:col-start-1 lg:col-span-2 gap-4">
                {products.map(({ id, name, quantity, brand, category, subCategory, imageUrl, price, discount }) => {
                    return <article key={id} className="w-full h-auto gap-5 flex items-center justify-evenly flex-col md:flex-row border rounded-lg p-5 md:p-2">
                        <img className="w-3/4 md:w-40" src={imageUrl} alt={`${name} ${brand}`} />
                        <form className="flex flex-col justify-center">
                            <Link to={`${category}/${subCategory}/${id}`}>
                                <h2 className="text-2xl font-bold text-[#413543]">{`${name} ${brand}`}</h2>
                            </Link>
                            {discount > 0 && <del className="text-gray-400 text-base">{convertNumberToMoney(price)}</del>}
                            <p className="text-[#2b8603] text-xl font-bold mb-2">{convertNumberToMoney(price * (1 - discount / 100))} UND</p>
                            
                            <div className="flex gap-2 flex-col sm:flex-row sm:justify-between">
                                <div className="">
                                    <label><b>Metodo de envío:</b></label>
                                    <fieldset className="flex gap-3">
                                        <input type="radio" name="shipping-method" value="standard" /> Estandar
                                        <input type="radio" name="shipping-method" value="express" /> Express
                                        <input type="radio" name="shipping-method" value="overnight" /> Overnight
                                    </fieldset>
                                </div>
                                
                                <div className="flex flex-row justify-between sm:flex-col">
                                    <fieldset className="flex gap-2">
                                        <label htmlFor="cart-quantity"><b>Cantidad:</b></label>
                                        <select id="cart-quantity" value={quantity}>
                                            {[...Array(15)].map((_, index) => <option key={index} value={index}>{index}</option>)}
                                        </select>
                                    </fieldset>
                                    <fieldset className="flex items-center gap-2 text-red-500 cursor-pointer hover:underline">
                                        <FontAwesomeIcon icon={faTrash} />
                                        <button>Eliminar</button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </article>
                })}
            </section>
            <section className="grid col-auto row-auto lg:row-span-1 lg:col-start-3 lg:col-span-1"></section>
        </aside>
    </Main>
}

export default Cart