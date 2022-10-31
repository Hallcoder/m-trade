import * as React from "react";
const SingleCard: React.FC<{ imageSource: string }> = ({ imageSource }) => {
  return (
    <div className="w-6/12">
      <img src={imageSource} className='h-2/12' alt="card product" />
    </div>
  );
};
export default SingleCard;
