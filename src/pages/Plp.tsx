import React, { useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import Filter from "../components/plp/Filter";
import Header from "../components/main/Header";
import {get_plp_data} from "../utils/plp/plp_data";
import * as interfaces from "../utils/plp/interfaces";

type Params = {
  category: interfaces.Subcategories;
  subCategory: interfaces.Subcategories;
}

const Plp = () => {
  const { category="", subCategory=""} =  useParams<Params>();
  const [filters, setFilters] = useState<interfaces.Filter[]>([]);

  useEffect(() => {
    const getFilters = () => {
      get_plp_data(subCategory ?? category).then((data:interfaces.data_plp) => {
        setFilters(data.data_plp_filters);
      })
    }
    getFilters();
  }, [subCategory]);

  return (
    <div>
      <Header />
      <div className= "m-2">
      <aside className="inline-block p-4 bg-[#211f43] rounded-lg h-max w-full sm:w-auto sm:max-w-xs shadow-">
        <h3 className="text-white font-bold mb-2 text-lg">Filtros</h3>
        {filters.length > 0 ? (
          filters.map((filter) => (
            <Filter key={filter.name} name={filter.name} items={filter.items} />
          ))
        ) : (
          <p className="text-white">Selecciona una subcategoría para ver filtros</p>
        )}
      </aside>
      </div>
    </div>
  );
};

export default Plp;