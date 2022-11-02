import * as React from 'react';
interface Props{
    percentage:string;
}
const TrailingPercentage:React.FC<Props>  = ({percentage}) => {
    return (  
        <span className='bg-red-600 p-1 absolute -top-4 text-white text-lg'>{percentage}</span>
    );
}

export default TrailingPercentage;