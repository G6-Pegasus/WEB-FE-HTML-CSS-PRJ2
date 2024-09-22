import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Tecnología",
    subcategories: [
      "Computadores",
      "Televisores",
      "Audio",
      "Vídeo",
      "Impresión",
      "Cámaras",
    ],
  },
  {
    name: "Electrodomésticos",
    subcategories: ["Climatización", "Refrigeración", "Lavadoras-Secadoras"],
  },
  {
    name: "Celulares",
    subcategories: ["Celulares", "Tabletas", "Smartwatchs"],
  },
  {
    name: "Hogar",
    subcategories: ["Salas", "Comedor", "Cocina", "Baño"],
  },
];

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

  const renderSVG = (category: string) => {
    const arrowDown = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ fill: "rgba(0, 0, 0, 1)" }}
      >
        <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
      </svg>
    );

    const arrowUp = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ fill: "rgba(0, 0, 0, 1)" }}
      >
        <path d="M6.293 13.293l1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
      </svg>
    );

    return selectedCategory === category ? arrowUp : arrowDown;
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
                className="w-full text-sm border bg-white rounded-lg py-2 px-3 text-black no-underline hover:text-[#726fad] transition duration-200 text-left md:text-center flex justify-between items-center"
              >
                <span className="mr-2">{category.name}</span>
                {renderSVG(category.name)}
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