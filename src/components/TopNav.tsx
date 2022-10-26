import * as React from 'react';
// import {MdHome} from 'react-icons/md';
 const TopNav: React.FC= () => {
    return ( 
    <div className='bg-red-100 h-8 w-full'>
       <div>
        <span>
            {/* <MdHome /> */}
            Cruz Home
        </span>
        <span>
            {/* <MdHome /> */}
            Hi,{"user"}
        </span>
       </div>
       <div>
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