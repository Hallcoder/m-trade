import React, { ReactNode } from 'react';
interface Props{
    title:string;
    desc:string;
    icon:ReactNode
}
const PromotionItem:React.FC<Props> = ({title,desc,icon}) => {
    return ( 
        <div className='flex items-center text-sm m-4'>
            <h1 className='text-2xl m-2 text-blue-500'>{icon}</h1>
            <span>
                <h2 className='font-bold'>{title}</h2>
                <p className='text-gray-600'>{desc}</p>
            </span>
        </div>
     );
}

export default PromotionItem;