import * as React from 'react';
const Search:React.FC  = () =>{
    return ( 
    <div>
      <span>
        <input type="text" placeholder='Search here...' className="outline-none border-none"/>
        <button>Search</button>
        </span>
    </div> 
    );
}

export default Search;