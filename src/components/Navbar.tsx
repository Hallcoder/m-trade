import  React from 'react';
import Search from '../Search';
// import {MdCart} from ''s
const NavBar: React.FC = () => {
    return ( 
        <nav className='flex w-full justify-between border-b shadow-md'>
        <div className='w-9/12 m-auto flex justify-around'>
            <h1 className='text-4xl text-orange-600 mt-2'>Cruz</h1>
            <Search />
            <span className='flex'>
             <h2 className='border-orange-500 border px-2 m-1 rounded-xl flex items-center'>Cart &gt;</h2>
             <div className='flex justify-center items-center'>
                Hi, {"DTBH"}
             </div>
            </span>
        </div>
        </nav>
     );
}

export default NavBar;