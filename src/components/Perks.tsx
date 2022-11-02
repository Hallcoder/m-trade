import * as React from "react";
import { MdHome , MdAddShoppingCart} from "react-icons/md";
function Perks() {
  return (
    <div className="flex m-auto mt-4 mb-4 w-11/12 ">
      <span className="w-3/12 shadow-md">
        <MdHome className="text-blue-400 text-6xl m-2 bg-white"/>
        <h1 className="font-bold indent-1 m-1">Great Value</h1>
        <p className="indent-1 m-2">Millions of items to select Continuous promotions Personalized products.</p>
      </span>
      <span className="w-3/12 shadow-md bg-white m-2">
        <MdAddShoppingCart className="text-blue-400 text-6xl m-2"/>
        <h1 className="font-bold indent-1 m-1">Great Value</h1>
        <p className="indent-1 m-2">Millions of items to select Continuous promotions Personalized products.</p>
      </span>
      <span className="w-3/12 shadow-md bg-white m-2">
        <MdHome className="text-blue-400 text-6xl m-2"/>
        <h1 className="font-bold indent-1 m-1">Great Value</h1>
        <p className="indent-1 m-2">Millions of items to select Continuous promotions Personalized products.</p>
      </span>
      <span className="w-3/12 shadow-md bg-white m-2">
        <MdHome className="text-blue-400 text-6xl m-2"/>
        <h1 className="font-bold indent-1 m-1">Great Value</h1>
        <p className="indent-1 m-2">Millions of items to select Continuous promotions Personalized products.</p>
      </span>
      <span className="w-3/12 shadow-md bg-white m-2">
        <MdHome className="text-blue-400 text-6xl m-2"/>
        <h1 className="font-bold indent-1 m-1">Great Value</h1>
        <p className="indent-1 m-2">Millions of items to select Continuous promotions Personalized products.</p>
      </span>
    </div>
  );
}

export default Perks;
