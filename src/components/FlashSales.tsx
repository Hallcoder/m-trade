import React, { useRef } from "react";
import Product from "./Product";
// import Dubai from '../images/dubai.jpg';
// import Toronto from '../images/toronto.jpg';
// import Istanbul from '../images/istanbul.jpg';
// import Rwanda from '../images/rwanda.jpg';
// import Header from './common/header';
// import Rating from "./rating";
function FlashSales() {
  let divRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col w-10/12 m-auto">
      {/* <div><Header divRef={divRef} title={"Top Destinations"}/></div>   */}
      <div
        ref={divRef}
        className="flex h-[35vh] flex-nowrap gap-4  OverFlow m-auto w-10/12 max-w-screen"
      >
        <Product price={"$400.00"} img={""} place={"Dubai, Doha City"} />
        <Product
          price={"$400.00"}
          img={""}
          place={"Canada, Toronto Mountains  "}
        />
        <Product price={"$400.00"} img={""} place={"Turkey, Istanbul City"} />
        <Product
          price={"$400.00"}
          img={""}
          place={"Rwanda, Kigali Clean  City"}
        />
        <Product
          price={"$400.00"}
          img={""}
          place={"Canada, Toronto Mountains  "}
        />
        <Product
          price={"$400.00"}
          img={""}
          place={"Rwanda, Kigali Clean  City"}
        />
        <Product price={"$400.00"} img={""} place={"Turkey, Istanbul City"} />
        <Product
          price={"$400.00"}
          img={""}
          place={"Rwanda, Kigali Clean  City"}
        />
      </div>
    </div>
  );
}

export default FlashSales;
