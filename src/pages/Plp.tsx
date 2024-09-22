import { useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import Filter from "../components/plp/Filter";
import Main from "../components/main/Main";
import {get_plp_data} from "../utils/plp/plp_data";
import * as interfaces from "../utils/plp/interfaces";

type Params = {
  category: interfaces.Subcategories;
  subCategory: interfaces.Subcategories;
}

const Plp = () => {
  const { category="", subCategory } =  useParams<Params>();
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
    <Main>
      <aside className="inline-block m-2 p-4 bg-[#211f43] rounded-lg h-max w-full sm:w-auto">
        <h3 className="text-white font-bold mb-2 text-lg">Filtros</h3>
        {filters.length > 0 ? (
          filters.map((filter) => (
        <Filter key={filter.name} name={filter.name} items={filter.items} />
          ))
        ) : (
          <p className="text-white">Selecciona una subcategoría para ver filtros</p>
        )}
      </aside>
    </Main>
  );
};

export default Plp;