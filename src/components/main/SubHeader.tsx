import { useState } from "react";
import { Link } from "react-router-dom";
import { data_navegation_menu as categories } from "../../utils/home/navegation_menu";

const SubHeader  = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [submenuTimeout, setSubmenuTimeout] = useState <number> (0);

    const handleMouseEnter = (category: string) => {
        if (submenuTimeout) {
            clearTimeout(submenuTimeout);
        }
        setSelectedCategory(category);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setSelectedCategory(null);
        }, 200);
        setSubmenuTimeout(timeout);
    };

    return (
        <div className="bg-beige p-0 pl-4">
            <nav>
                <ul className="flex justify-left gap-4 list-none">
                    {categories.map((category) => (
                        <li
                          key={category.name}
                          className="relative"
                          onMouseEnter={() => handleMouseEnter(category.name)}
                          onMouseLeave={handleMouseLeave}
                        >
                            <Link to = {`/${category.name}`} className="font-montserrat text-lg font-medium text-black text-center no-underline">
                                {category.name}
                            </Link>
                            {selectedCategory === category.name && (
                                <ul className="absolute bg-[#211f43] list-none p-0 shadow-lg mt-2 z-10 text-white border-2 border-white">
                                    {category.subcategories.map((subcategory) => (
                                        <li key={subcategory}>
                                            <Link
                                              to = {`/${category.name}/${subcategory}`}
                                              className="block px-4 py-2 text-sm text-center font-roboto text-white no-underline hover:bg-gray-200 hover:text-black"
                                            >
                                                {subcategory}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default SubHeader;