import Main from "../components/main/Main"
import { convertNumberToMoney } from "../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { deliveryOptionsArr } from "../utils/interfaces";
import { useCartStore } from "../components/cart/CartStore";
import { useShallow } from "zustand/shallow";

const Cart = () => {
    const { products, updateCartProduct, deleteCartProduct, getSummary } = useCartStore(useShallow(state => ({
        products: state.products,
        updateCartProduct: state.updateProduct,
        deleteCartProduct: state.deleteProduct,
        getSummary: state.getSummary
    })))

    return <Main>
        <aside className="px-4 pb-4 flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-3 gap-4">
            <section className={`grid col-span-1 row-span-1 lg:col-start-1 lg:col-span-2 gap-4 ${products.length === 0 ? "hidden" : ""}`}>
                {products.map((product) => {
                    const { id, name, quantity, brand, category, subCategory, imageUrl, price, discount, deliveryMethod } = product
                    return <article key={id} className="w-full h-auto gap-5 flex items-center justify-evenly flex-col md:flex-row border rounded-lg p-5 md:p-4">
                        <img className="w-3/4 md:w-40" src={imageUrl} alt={`${name} ${brand}`} />
                        <form onSubmit={e => {
                            e.preventDefault()
                            deleteCartProduct(id)
                        }} className="flex flex-col justify-center">
                            <Link to={`${category}/${subCategory}/${id}`}>
                                <h2 className="text-2xl font-bold text-[#413543]">{`${name} ${brand}`}</h2>
                            </Link>
                            {discount > 0 && <del className="text-gray-400 text-base">{convertNumberToMoney(price)}</del>}
                            <p className="text-[#2b8603] text-xl font-bold mb-2">{convertNumberToMoney(price * (1 - discount / 100))} UND</p>
                            
                            <div className="flex gap-2 flex-col sm:flex-row sm:justify-between">
                                <div className="">
                                    <label><b>Metodo de envío:</b></label>
                                    <fieldset className="flex gap-3">
                                        {deliveryOptionsArr.map((option, index) => <label key={index}>
                                            <input onChange={() => updateCartProduct(id, { quantity: quantity ?? 1, deliveryMethod: option })} 
                                                type="radio" checked={deliveryMethod === option} name="shipping-method" value={option} /> {option}
                                        </label>)}
                                    </fieldset>
                                </div>
                                
                                <div className="flex flex-row justify-between sm:flex-col">
                                    <fieldset className="flex gap-2">
                                        <label htmlFor="cart-quantity"><b>Cantidad:</b></label>
                                        <select id="cart-quantity" onChange={e => updateCartProduct(id, { quantity: parseInt(e.target.value), deliveryMethod: deliveryMethod ?? "Estandar" })} value={quantity ?? 1}>
                                            {[...Array(15)].map((_, index) => <option key={index+1} value={index+1}>{index+1}</option>)}
                                        </select>
                                    </fieldset>
                                    <fieldset className="flex items-center gap-2 text-red-500 cursor-pointer hover:underline">
                                        <FontAwesomeIcon icon={faTrash} />
                                        <button type="submit">Eliminar</button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </article>
                })}
            </section>
            <section className="grid col-auto row-auto lg:row-span-1 lg:col-start-3 lg:col-span-1 p-5 h-fit border rounded-lg">
                <h2 className="text-center font-bold text-3xl mb-5">Resumen de Compra</h2>
                
                <table>
                    <tbody>
                        {getSummary().map(([name, value], index) => name === "" ? (
                            <tr key={index}>
                                <td colSpan={3}>
                                    <hr className="my-2" />
                                </td>
                            </tr>
                        ) : (
                            <tr key={index}>
                                <td className="text-xl">{name}</td>
                                <td className="text-xl text-end">{convertNumberToMoney(value)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                <button className="border rounded-md p-1.5 mt-2 bg-[#211f43] text-white font-bold">Start Payment</button>
            </section>
        </aside>
    </Main>
}

export default Cart