import * as React from 'react';
import {MdHome,MdAccountBox} from 'react-icons/md';
 const TopNav: React.FC= () => {
    const iconClass = 'text-gray-600 text-2xl';
    const headingClass = 'text-lg font-semibold';
    return ( 
    <div className='flex justify-between bg-red-100 h-8 w-full'>
       <div className='ml-4 w-2/12 flex justify-around'>
        <span className='flex items-center'>
            <MdHome className={iconClass} />
          <h3 className={headingClass}>Cruz Home</h3>
        </span>
        <span className='flex items-center'>
            <MdAccountBox className={iconClass}/>
           <h3 className={headingClass}> Hi,{"DTBH"}</h3>
        </span>
       </div>
       <div className='flex justify-around  mr-8 w-4/12'>
       <span>
            {/* <MdHome /> */}
            Save big on our app
        </span>
        <span>
            {/* <MdHome /> */}
           Language
        </span>
        <span>
            {/* <MdHome /> */}
            Chat With us
        </span>
       </div>
    </div> 
    );
}

export default TopNav;