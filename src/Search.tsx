import * as React from 'react';
import { buttonClass } from './constants';
const Search:React.FC  = () =>{
    return ( 
    <div className='border border-orange-600 w-5/12 flex justify-between m-1 rounded-2xl'>
      <span className='w-full flex justify-between rounded-lg min-h-fit'>
        <input type="text" placeholder='Search here...' className="outline-none ml-2  border-none"/>
        <button className={buttonClass.concat('m-1')}>Search</button>
        </span>
    </div> 
    );
}

export default Search;