import React, { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCcApplePay } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcAmex } from '@fortawesome/free-brands-svg-icons';
import { faCcDinersClub } from '@fortawesome/free-brands-svg-icons';

interface Dropdown {
    tittle: string
    options: string[]
}

const Dropdown: React.FC<Dropdown> = ({ tittle, options }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="w-full md:w-1/3 px-4 py-2">
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-[#ffffff] bg-inherit hover:text-[#ffffff] rounded-md whitespace-nowrap transition-all duration-300 hover:text-base"
            >
                {tittle}
                <span className={isOpen ? 'rotate-180' : 'rotate-0'}><FontAwesomeIcon icon={faChevronDown} style={{ color: "#ffffff" }} /></span>
            </button>
            {isOpen && (
                <div className="mt-2 w-full rounded-md shadow-lg bg-inherit ring-1 ring-black ring-opacity-5 whitespace-nowrap">
                    <div className="py-1">
                        {options.map((option, index) => (
                            <button
                                key={index}
                                className="block px-4 w-full py-2 text-sm text-[#ffffff] transition-all duration-300 hover:text-base hover:text-blue-200 text-left"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-[#202020] text-[#ffffff] py-8">
            <div className="flex flex-wrap justify-between items-center px-8">
                <h1 className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
                    Pegasus Retail Store S.A.S 900.123.456-7 
                </h1>
                <div className="flex space-x-4 mb-4 md:mb-0 justify-center w-full md:w-auto">
                    <FontAwesomeIcon icon={faSquareFacebook} style={{ color: "#ffffff" }} />
                    <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} />
                    <FontAwesomeIcon icon={faXTwitter} style={{ color: "#ffffff" }} />
                </div>
                <div className="flex space-x-4 justify-center w-full md:w-auto">
                    <FontAwesomeIcon icon={faCcVisa} style={{ color: "#ffffff" }} />
                    <FontAwesomeIcon icon={faCcAmex} style={{ color: "#ffffff" }} />
                    <FontAwesomeIcon icon={faCcApplePay} style={{ color: "#ffffff" }} />
                    <FontAwesomeIcon icon={faCcMastercard} style={{ color: "#ffffff" }} />
                    <FontAwesomeIcon icon={faCcDinersClub} style={{ color: "#ffffff" }} />
                </div>
            </div>
            <div className="px-8">
                <hr className="mx- 8 my-4 border-t border-gray-400" />
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full">
                <Dropdown
                    tittle="Nuestra Compañía"
                    options={["Sobre Nosotros", "Historia", "Equipo", "Contacto", "Carreras"]}
                />
                <Dropdown
                    tittle="Información Legal"
                    options={["Política de Privacidad", "Términos y Condiciones", "Aviso Legal", "Política de Cookies"]}
                />
                <Dropdown
                    tittle="Servicios"
                    options={["Envíos y Entregas", "Devoluciones y Cambios", "Atención al Cliente", "Garantías", "Instalación y Montaje"]}
                />
            </div>
        </footer>
    )
}

export default Footer;
