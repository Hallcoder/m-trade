import * as React from "react";
import { MdAirplay, MdAllInbox } from "react-icons/md";
import cart from '../assets/cart.webp';
import PromotionItem from './PromoItem';
const RightSidebar: React.FC = () => {
  return (
    <aside className="shadow-md min-h-fit w-3/12 m-2">
      <div>
        <img src={cart} alt="" className="h-20 w-20 m-auto mt-10 rounded-full"/>
        <h2 className="text-center font-bold">Hi,{"DTBH"}</h2>
        <article className="w-9/12 m-auto mt-20 flex gap-4">
          <span className="bg-pink-500 h-12 w-12 rounded-full shadow-lg text-white  flex justify-center items-center"><MdAirplay /></span>
          <span className="bg-blue-500 h-12 w-12 rounded-full shadow-lg text-white  flex justify-center items-center"><MdAirplay /></span>
          <span className="bg-yellow-500 h-12 w-12 rounded-full shadow-lg text-white  flex justify-center items-center"><MdAirplay /></span>
        </article>
      </div>
      <div className="flex flex-col mt-4">
<PromotionItem icon={<MdAllInbox />} title={"Great Value"} desc="lorem ipsum dolet aise dem tu thad"/>
<PromotionItem icon={<MdAllInbox />} title={"Great Value"} desc="lorem ipsum dolet aise dem tu thad"/>
<PromotionItem icon={<MdAllInbox />} title={"Great Value"} desc="lorem ipsum dolet aise dem tu thad"/>
<PromotionItem icon={<MdAllInbox />} title={"Great Value"} desc="lorem ipsum dolet aise dem tu thad"/>
<PromotionItem icon={<MdAllInbox />} title={"Great Value"} desc="lorem ipsum dolet aise dem tu thad"/>
      </div>
    </aside>
  );
};
export default RightSidebar;
