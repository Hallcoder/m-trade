import React, { ReactNode } from 'react';
interface Props{
place:string;
price:string;
img:string;
}
const  Product:React.FC<Props> = ({place,price,img}) => {
    return (  
        <div className="flex flex-col min-w-[10em] justify-between rounded-md">
            <div><img src={img} alt="" className="w-full object-cover rounded-sm h-[10em]" /></div>
            <div className="flex justify-between items-center">
                <h3 className=" w-9/12 font-semibold">{place}</h3>
            </div>
            <div className="w-full flex items-center justify-between ">
                <h3 className="font-semibold text-2xl text-red-700">{price}</h3>
            </div>
        </div>
    );
}

export default Product;