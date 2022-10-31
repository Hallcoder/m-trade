import * as React from "react";
import cart from '../assets/cart.webp';
const RightSidebar: React.FC = () => {
  return (
    <aside className="shadow-md min-h-fit w-3/12 m-2">
      <div>
        <img src={cart} alt="" className="h-20 w-20 m-auto mt-10 rounded-full"/>
        <h2 className="text-center font-bold">Hi,{"DTBH"}</h2>
        <article>
          <span></span>
          <span></span>
          <span></span>
        </article>
      </div>
      <div></div>
    </aside>
  );
};
export default RightSidebar;
