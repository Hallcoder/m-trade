import * as React from 'react';
// import {MdHome} from 'react-icons/md';
 const TopNav: React.FC= () => {
    return ( 
    <div className='flex justify-between bg-red-100 h-8 w-full'>
       <div className='ml-4 w-2/12 flex justify-around'>
        <span>
            {/* <MdHome /> */}
            Cruz Home
        </span>
        <span>
            {/* <MdHome /> */}
            Hi,{"DTBH"}
        </span>
       </div>
       <div className='flex justify-around mr-8 w-4/12'>
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