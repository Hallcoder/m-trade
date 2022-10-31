import * as React from 'react';
import CategoryItem from './CategoryItem';
const Sidebar:React.FC = () => {
   
    return <aside className='shadow-md w-3/12 m-2'>
        <h1 className='bg-orange-600 text-white text-2xl px-4 p-2'>
            Shop by Category
        </h1>
        <ul className='flex flex-col'>
           <CategoryItem categoryName='Clothing' subCategories={["Women's,Men's,Cleaning and Hygiene,Shoes Wear"]}/>
           <CategoryItem categoryName='Laptops and Phones' subCategories={["Women's,Men's,Cleaning and Hygiene,Shoes Wear"]}/>
           <CategoryItem categoryName='Luggage Bags' subCategories={["Women's,Men's,Cleaning and Hygiene,Shoes Wear"]}/>
           <CategoryItem categoryName='Watch Jewelry' subCategories={["Women's,Men's,Cleaning and Hygiene,Shoes Wear"]}/>
           <CategoryItem categoryName='Kids & Toys' subCategories={["Women's,Men's,Cleaning and Hygiene,Shoes Wear"]}/>
           <CategoryItem categoryName='Beauty' subCategories={["Women's,Men's,Cleaning and Hygiene,Shoes Wear"]}/>
           <CategoryItem categoryName='Beauty' subCategories={["Women's,Men's,Cleaning and Hygiene,Shoes Wear"]}/>
           <CategoryItem categoryName='Beauty' subCategories={["Women's,Men's,Cleaning and Hygiene,Shoes Wear"]}/>
           <CategoryItem categoryName='Beauty' subCategories={["Women's,Men's,Cleaning and Hygiene,Shoes Wear"]}/>
           <CategoryItem categoryName='Beauty' subCategories={["Women's,Men's,Cleaning and Hygiene,Shoes Wear"]}/>
           <CategoryItem categoryName='Beauty' subCategories={["Women's,Men's,Cleaning and Hygiene,Shoes Wear"]}/>
    
        </ul>
    </aside>
}

export default Sidebar;