import React from "react";
import { AiFillStar } from "react-icons/ai";
function Rating() {
  return (
    <div className="flex w-1/12 text-orange-500">
      <AiFillStar className="text-xl" />
      <h1>5.0</h1>
    </div>
  );
}

export default Rating;
