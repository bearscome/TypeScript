import {FC} from "react";
import {Menu} from "./model/restaurants";
interface BestMenuProps extends Omit<Menu, "price"> {
    showBestMenuName(name:string): string
}

const BestMenu:FC<BestMenuProps> = ({name, category,  /*showBestMenuName*/}) => {


    return (
        <div>
            {name}
            {category}
        </div>
    )
}

export default BestMenu;
