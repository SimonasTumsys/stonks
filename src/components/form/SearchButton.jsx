import React from "react";

function SearchButton(props) {
  return (
    <button
      type="button"
      className="w-full bg-blue-500 rounded-md 
    border-gray-300 mt-2 md:mt-4 h-10 text-white
    hover:bg-blue-600 md:w-56 border"
    >
      Search
    </button>
  );
}

export default SearchButton;
