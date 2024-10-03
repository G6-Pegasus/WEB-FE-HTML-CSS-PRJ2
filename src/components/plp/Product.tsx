import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { faStar as emptyStar, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
import * as Interfaces from '../../utils/interfaces'
import { convertNumberToMoney } from '../../utils/functions'

const Product = ({ imageUrl, name, brand, starts, reviews, price, discount }: Interfaces.Product) => {
    return (
        <div className="flex md:flex-row md:justify-evenly flex-col gap-5 bg-white p-4 rounded-lg border border-rounded mb-4 cursor-pointer">
            <section className="flex md:w-3/6 justify-center items-center">
                <img src={imageUrl} alt={`${name} ${brand}`} className="w-3/6 h-auto rounded-lg" />
            </section>

            <section className="text-gray-600 md:w-3/6 flex flex-col justify-between p-2 gap-y-1">
                <h3 className="text-lg text-black font-bold">{name}</h3>
                <h5 className="text-gray-500 font-bold">{brand}</h5>
                <h6 className="text-md">
                    <b>{starts.toFixed(1)} </b>
                    {[...Array(Math.floor(starts))].map((_, index) => (
                        <FontAwesomeIcon key={index} icon={faStar} style={{ color: "#FFD43B" }} />
                    ))}
                    {!Number.isInteger(starts) && <FontAwesomeIcon icon={faStarHalfStroke} style={{ color: "#FFD43B" }} />}
                    {[...Array(5 - Math.ceil(starts))].map((_, index) => (
                        <FontAwesomeIcon key={index} icon={emptyStar} style={{ color: "#FFD43B" }} />
                    ))}
                </h6>
                <p className="text-xs">({reviews} reseñas)</p>
                {discount > 0 && <del className="text-gray-400 text-sm">{convertNumberToMoney(price)}</del>}
                <b className="text-[#2b8603] text-base">
                    {convertNumberToMoney(price * (1 - discount / 100))} 
                    {discount > 0 && <span> (-{Math.round(discount)}%)</span>}
                </b>
                <button className="mt-2 text-white py-2 px-4 rounded-md cursor-pointer  transition-colors duration-300 ease-in-out bg-[#211f43] hover:bg-[#2b8603]">
                    <FontAwesomeIcon icon={faCartPlus} /> Comprar ahora
                </button>
            </section>
        </div>
    );
};

export default Product;