import {FC} from "react";
import {Address, Restaurants} from "./model/restaurants";

interface StroeProps {
    info: Restaurants,
    changeAddress(address: Address): void,
}

const Store:FC<StroeProps> = ({info}) => {
    return (
        <div>
            {info.name}
        </div>
    )
};

export default Store;
