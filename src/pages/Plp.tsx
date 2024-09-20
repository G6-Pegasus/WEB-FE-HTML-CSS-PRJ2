import React, {useState, useEffect} from 'react';
import Filter from '../components/plp/Filter';
import {data_plp_filters} from '../utils/plp/appliance/cooling';

const Plp = () => {
  const [filters, setFilters] = useState<Array<{ name: string; items: Array<{ name: string; quantity: number }> }>>([]);

  useEffect(() => {
    setFilters(data_plp_filters);
  }, []);

  return (
    <aside className="inline-block ml-2 p-4 bg-[#211f43] col-span-1 row-start-2 row-end-4 rounded-lg h-max m-3">
      <h3 className="text-white font-bold  mb-2 text-lg">Filtrar por</h3>
      {filters.map((filter) => (
        <Filter key={filter.name} name={filter.name} items={filter.items} />
      ))}
      <button className="mt-2 p-2 bg-[#dcdce0] text-[#211f43] rounded hover:bg-[#aeaebe8a] hover:text-white">Aplicar</button>
    </aside>
  );
};

export default Plp;
