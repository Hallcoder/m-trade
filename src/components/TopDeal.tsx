import * as React from 'react';
import TrailingPercentage from './TrailingPercentage';
interface Props{
    name:string;
    price:number
    image:string
}
const TopDeal: React.FC<Props> = ({name,image,price}) => {
    return <span className='min-h-[12vh] m-2 relative w-[10vw] border shadow-xl'>
        <TrailingPercentage percentage='-12%' />
        <img src={image} alt="" className='h-4/6 w-full'/>
        <h1 className='text-xl text-red-600'>{price}</h1>
        <h2>{name}</h2>
    </span>
}

export default TopDeal;