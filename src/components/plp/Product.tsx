import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { convertNumberToMoney } from "../../utils/plp/plp_data"
import * as Interfaces from '../../utils/plp/interfaces'

const Product = ({ imageUrl, name, brand, starts, reviews, price, discount }: Interfaces.Product) => {
    return (
        <div className="flex md:flex-row md:justify-evenly flex-col gap-5 bg-white p-4 rounded-lg border border-rounded mb-4 cursor-pointer">
            <section className="flex md:w-3/6 justify-center items-center">
                <img src={imageUrl} alt={`${name} ${brand}`} className="w-3/6 h-auto rounded-lg" />
            </section>

            <section className="text-gray-600 md:w-3/6 flex flex-col justify-between p-2">
                <h3 className="text-lg text-black font-bold">{name}</h3>
                <h5 className="text-gray-500 font-bold">{brand}</h5>
                <h6 className="text-md">
                    <b>{starts.toFixed(1)} </b>
                    {[...Array(starts)].map((_, index) => (
                        <FontAwesomeIcon key={index} icon={faStar} style={{ color: "#FFD43B" }} />
                    ))}
                    {[...Array(5 - starts)].map((_, index) => (
                        <FontAwesomeIcon key={index} icon={emptyStar} style={{ color: "#FFD43B" }} />
                    ))}
                </h6>
                <p>({reviews} reseñas)</p>
                {discount > 0 && <del className="text-gray-400">{convertNumberToMoney(price)}</del>}
                <b className="text-[#2b8603]">
                    {convertNumberToMoney(price * (1 - discount / 100))} 
                    {discount > 0 && <span> (-{Math.round(discount)}%)</span>}
                </b>
                <button className="mt-2 bg-[#211f43] text-white py-2 px-4 rounded-md cursor-pointer">
                    <FontAwesomeIcon icon={faCartPlus} /> Comprar ahora
                </button>
            </section>
        </div>
    );
};

export default Product;