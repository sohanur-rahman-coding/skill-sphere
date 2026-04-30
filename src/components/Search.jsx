'use client'

import { useState } from "react";

const Search = () => {
    const {value , setValue} = useState('')
    const handleInput = (e)=>{
        const getValue = e.target.value;
        console.log(getValue);
    }
  return (
    <div>
      <div className="relative max-w-md mx-auto my-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
        onChange={handleInput}
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all shadow-sm"
          placeholder="Search for courses (e.g. React, UI/UX)..."
        />
        <button className="absolute inset-y-1.5 right-1.5 px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
