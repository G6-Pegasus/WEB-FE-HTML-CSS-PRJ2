import SubHeader from './SubHeader'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DataConsumer from '../cart/DataContext';

const Header = () => {
    const { data } = DataConsumer()

    return <header className='bg-[#211f43] text-white w-full z-50'>
        <div className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-2 grid-rows-2 gap-4 p-4">
            <div className="flex justify-start items-center gap-[10px] col-span-1 row-span-1 md:col-span-1 md:row-span-1 order-1 md:order-1 p-2">
                <Link className="no-underline text-white h-auto" to="/">
                    <img className="min-w-[60px] min-h-[60px] w-[60px] h-[60px] rounded-[5px]" src="https://i.postimg.cc/JhsLG9DW/logo.jpg" alt="Logo"></img>
                </Link>
                <Link className="no-underline text-white h-auto font-montserrat text-xl font-extrabold sm:block hidden" to="/">
                    <span className="text-left">
                        Pegasus Retail Store
                    </span>
                </Link>
            </div>

            <div className="flex justify-center items-center w-full md:w-auto col-span-2 row-span-1 md:col-span-1 md:row-span-1 order-3 md:order-2 p-2 align-middle h-full">
                <form className="flex justify-center items-center w-full gap-2">
                    <input className="border-none p-2 bg-[#eeeeee] text-[16px] font-medium text-black h-[30px] rounded-[5px] w-full md:w-auto gap-8" type="text" placeholder="Buscar..."></input>
                    <button className="border-none bg-transparent" type="button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff", width: "24px", height: "24px"}} />
                    </button>
                </form>
            </div>

            <div className="flex justify-end items-center font-montserrat text-[14px] text-center gap-4 col-span-1 row-span-1 md:col-span-1md:row-span-1 order-2 md:order-3 p-2">
                <div className="flex justify-center items-center flex-col">
                    <Link className="no-underline text-white" to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff", width: "24px", height: "24px"}} />
                        {data.length > 0 && <span className={'absolute inline-flex items-center px-2 py-1 rounded-full text-white text-sm bg-red-500'}>
                            {data.length}
                        </span>}
                    </Link>
                    <Link className="no-underline text-white" to="/cart">
                        <span className="header-user_section-area-text">
                            Carrito
                        </span>
                    </Link>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <Link className="no-underline text-white" to="#">
                    <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", width: "24px", height: "24px"}} />
                    </Link>
                    <Link className="no-underline text-white" to="#">
                        <span className="header-user_section-area-text">
                            Tu Cuenta
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        <SubHeader/>
    </header>
}

export default Header