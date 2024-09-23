import React from 'react';

interface Item {
  name: string;
  quantity: number;
}

interface FilterProps {
  name: string;
  items: Item[];
}

const Filter: React.FC<FilterProps> = ({ name, items }) => {
  return (
    <div className="mb-2">
      <b className="block text-white font-bold mb-1 text-sm">{name}</b>
      {items.map((item) => (
        <label key={item.name} htmlFor={`checkbox-${item.name}`} className="flex items-center space-x-2 cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id={`checkbox-${item.name}`}
              className="sr-only peer"
            />
            <div
              className="w-4 h-4 border border-gray-300 rounded-sm peer-checked:bg-[#726fad] peer-checked:border-transparent transition-all duration-200 ease-in-out flex items-center justify-center"
            ></div>
            <span className="absolute top-[2px] left-[6px] w-[5px] h-[10px] opacity-0 transform scale-0 rotate-45 border-r-2 border-b-2 border-white transition-all duration-300 delay-150 peer-checked:opacity-100 peer-checked:scale-100"></span>
          </div>
          <span className="text-white text-sm hover:text-[#b7b4f3]">
            {item.name} ({item.quantity})
          </span>
        </label>
      ))}
    </div>
  );
};

export default Filter;
