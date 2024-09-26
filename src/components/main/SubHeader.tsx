import { useState } from "react";
import { Link } from "react-router-dom";
import { data_navegation_menu as categories } from "../../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const SubHeader = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [submenuTimeout, setSubmenuTimeout] = useState<number>(0);

  const handleMouseEnter = (category: string) => {
    if (window.innerWidth > 768) {
      if (submenuTimeout) {
        clearTimeout(submenuTimeout);
      }
      setSelectedCategory(category);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      const timeout = setTimeout(() => {
        setSelectedCategory(null);
      }, 200);
      setSubmenuTimeout(timeout);
    }
  };

  const handleCategoryClick = (category: string) => {
    if (window.innerWidth <= 768) {
      setSelectedCategory(selectedCategory === category ? null : category);
    }
  };

  return (
    <div className="bg-[#f5f5e7] p-2 shadow-md w-full">
      <nav>
        <ul className="flex flex-wrap md:flex-row flex-col justify-start gap-4 list-none w-full">
          {categories.map((category) => (
            <li
              key={category.name}
              className="relative w-full md:w-auto"
              onMouseEnter={() => handleMouseEnter(category.name)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleCategoryClick(category.name)}
                className="w-full text-sm  py-2 px-3 text-black no-underline hover:text-[#726fad] transition duration-200 text-left md:text-center flex justify-between items-center"
              >
                <span className="mr-2">{category.name}</span>
                {<FontAwesomeIcon icon={selectedCategory === category.name ? faChevronUp : faChevronDown} />}
              </button>
              <ul
                className={`bg-white list-none p-0 shadow-lg mt-2 z-10 w-full md:w-[200px] rounded-lg border border-gray-200 overflow-hidden ${
                  selectedCategory === category.name ? "block" : "hidden"
                } md:absolute md:block ${
                  selectedCategory === category.name ? "md:hover:block" : "md:hidden"
                }`}
              >
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory}>
                    <Link
                      to={`/${category.name}/${subcategory}`}
                      className="block px-4 py-2 text-sm text-black no-underline hover:bg-[#726fad1c] hover:text-[#726fad] transition duration-200"
                    >
                      {subcategory}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SubHeader;