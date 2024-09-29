import { createContext, useState, useContext } from "react";
import { FeaturedProduct } from "../../utils/interfaces";

interface DataContextType {
    data: FeaturedProduct[];
    setData: (data: FeaturedProduct[]) => void;
}

const initialContext: DataContextType = {
    data: [],
    setData: () => {}
};

const DataContext = createContext<DataContextType>(initialContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<FeaturedProduct[]>([]);
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default function DataConsumer() {
    return useContext(DataContext)
}