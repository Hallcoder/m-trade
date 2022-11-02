import * as React from 'react';
interface Props{
title:string;
images:string[];
}
const Pick: React.FC<Props> = ({images,title}) => {
return <article className='flex flex-col hover:shadow-lg hover:border bg-white w-[40vh] min-w-fit mr-1 h-[15vh] text-sm'>
<span className='w-11/12 flex justify-between'>
    <h1 className='font-bold'>{title}</h1>
    <h2>View All</h2>
</span>
<div className='flex gap-1 items-center '>
    {images.map(img => {
        return <img src={img} alt='' className='h-20 w-24 object-cover '></img>
    })}
</div>
</article>
}
export default Pick;