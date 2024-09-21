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
    <div className="bg-beige p-4">
      <nav>
        <ul className="flex justify-left gap-4 list-none">
          {categories.map((category) => (
            <li
              key={category.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(category.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to = {`/${category}`} className="font-montserrat text-lg font-medium text-black text-center no-underline">
                {category.name}
              </Link>
              {selectedCategory === category.name && (
                <ul className="absolute bg-white list-none p-0 shadow-lg mt-2 z-10">
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory}>
                      <Link
                        to = {`/${category}/${subcategory}`}
                        className="block px-4 py-2 text-sm text-center font-roboto text-black no-underline hover:bg-gray-200"
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