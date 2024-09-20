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
      <b className="block text-white font-semibold mb-1">{name}</b>
      {items.map((item) => (
        <label key={item.name} className="block text-white">
          <input type="checkbox" className=" mr-1 checked:bg-black-500" id={`checkbox-${item.name}`} />
          {item.name} ({item.quantity})
        </label>
      ))}
    </div>
  );
};

export default Filter;