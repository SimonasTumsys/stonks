import React from "react";

const ResetButton = (props) => {
  return (
    <button
      type="button"
      className="w-full rounded-md bg-white
    border-gray-300 border mt-2 md:mt-4 h-10 
    hover:bg-gray-200 md:w-56"
      onClick={props.handleResetButtonClick}
    >
      Reset
    </button>
  );
};

export default ResetButton;
