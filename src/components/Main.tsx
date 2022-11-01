import * as React from "react";
import Sidebar from "./Sidebar";
import SingleCard from "./SingleCard";
import men from "../assets/pc-men-shoes-banner.jpg";
import women from "../assets/pc-women-shoes-banner.webp";
import accessories from "../assets/pc-use-cate-banner.jpg";
import phone from "../assets/pc-phone-banner.jpg";
import TrendingSlideShow from "./TrendingSlideShow";
import RightSidebar from "./RightSidebar";
import FlashSales from "./FlashSales";
import FlashSale from "./FlashSale";
import Pick from "./Pick";
const HomeMain: React.FC = () => {
  return (
    <main className="flex flex-col w-10/12 m-auto">
      <div id="intro" className="flex w-full h-full">
        <Sidebar />
        <div className="w-8/12">
          <TrendingSlideShow />
          <article className="flex  flex-wrap">
            <SingleCard imageSource={men} />
            <SingleCard imageSource={women} />
            <SingleCard imageSource={phone} />
            <SingleCard imageSource={accessories} />
          </article>
        </div>
        <RightSidebar />
      </div>
      <section id='flashsales' className="flex w-full">
        <FlashSale />
        <FlashSales />
      </section>
      <section id='picks' className="flex flex-wrap mt-4 gap-y-2 p-1">
        <Pick title='Mobile Phone' images={['']}/>
        <Pick title='Mobile Phone' images={['']}/>
        <Pick title='Mobile Phone' images={['']}/>
        <Pick title='Mobile Phone' images={['']}/>
        <Pick title='Mobile Phone' images={['']}/>
        <Pick title='Mobile Phone' images={['']}/>
        <Pick title='Mobile Phone' images={['']}/>
        <Pick title='Mobile Phone' images={['']}/>
       
      </section>
    </main>
  );
};
export default HomeMain;
