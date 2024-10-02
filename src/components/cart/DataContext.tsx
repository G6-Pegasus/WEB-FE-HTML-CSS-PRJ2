import { createContext, useState, useContext } from "react";
import { CartProduct } from "../../utils/interfaces";

interface DataContextType {
    data: CartProduct[];
    setData: (data: CartProduct[]) => void;
}

const initialContext: DataContextType = {
    data: [],
    setData: () => {}
};

const DataContext = createContext<DataContextType>(initialContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<CartProduct[]>([]);
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default function DataConsumer() {
    return useContext(DataContext)
}