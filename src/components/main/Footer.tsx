import React, { useState } from "react";
interface Dropdown{
    tittle:string
    options:string[]
}
const Dropdown: React.FC<Dropdown> = ({tittle, options })=>{
    const[isOpen, setIsOpen]= useState<boolean>(false);
    const toggleDropdown = ()=>{
        setIsOpen(!isOpen)
    }
    return(
        <div className="w-full md:w-1/3 px-4 py-2">
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-[#e2f0fb] bg-[#f6a019] hover:bg-[#e2f0fb] hover:text-[#f6a019] rounded-md"
            >
                {tittle}
                <span className={isOpen ? 'rotate-180' : 'rotate-0'}> ▼</span>
            </button>
            {isOpen && (
                <div className="mt-2 w-full rounded-md shadow-lg bg-[#e2f0fb] ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                    {options.map((option, index) => (
                    <button
                        key={index}
                        className="block px-4 w-full py-2 text-sm text-[#f6a019] hover:bg-[#f6a019] hover:text-[#e2f0fb] text-left"
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

const Footer : React.FC =() => {
    return (
        <footer className="w-full bg-[#f6a019] text-[#e2f0fb] py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                <Dropdown
                tittle="Our Company"
                options={["About Us", "Careers", "Contact"]}
                />
                <Dropdown
                tittle="Legal"
                options={["Privacy policy", "Terms and conditions", "Cookies policy"]}
                />
                <Dropdown
                tittle="Services"
                options={["Guarantee", "Call Center", "FAQ"]}
                />
            </div>
    </footer>
    )
}

export default Footer