import {FC, useState} from 'react';
import './App.css';
import Store from "./Store";
import {Address, Restaurants} from "./model/restaurants"
import BestMenu from "./BestMenu";

let data:Restaurants = {
    name: "식당",
    category: "western",
    address: {
        city: "seoul",
        detail: "somewhere",
        zipCode: 2341,
    },
    menu: [
        {
            name: "",
            price: 2000,
            category: "pasta"
        }
    ]
}
const App:FC = function () {
  const [restaurants, setRestaurants] = useState<Restaurants>(data);
  const changeAddress = (address:Address) => {
      setRestaurants({
          ...restaurants,
          address: address
      })
  };

    const showBestMenuName = (name: string) => {
        return name
    }

  return (
    <div>
        <Store info = {restaurants} changeAddress = {changeAddress}/>
        <BestMenu name = {"불고기피자"} category = {"피자"} showBestMenuName = {showBestMenuName}/>
    </div>
  )
}

export default App
