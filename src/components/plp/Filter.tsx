interface Item {
    name: string,
    quantity: number
}

interface FilterProps {
    name: string,
    items: Item[]
}

const Filter = ({ name, items } : FilterProps) => {
    return <></>
}

export default Filter