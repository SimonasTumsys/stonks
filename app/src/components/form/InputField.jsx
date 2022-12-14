import React from "react";
import { strTooLong, hasSpecials, classNames } from "../../utils/utils";

const Inputfield = (props) => {
  const symbolString = props.symbolString;
  const handleTextFieldChange = props.handleTextFieldChange;

  return (
    <>
      <div className="text-center flex flex-col">
        <span
          className={classNames(
            hasSpecials(symbolString) ? "block" : "hidden",
            "text-red-400"
          )}
        >
          Only letters, including spaces, are allowed.
        </span>
        <span
          className={classNames(
            strTooLong(symbolString) ? "block" : "hidden",
            "text-red-400"
          )}
        >
          Query shouldn't be longer than 35 characters.
        </span>
        <input
          onKeyDown={props.handleKeyPress}
          pattern="[A-Za-z ]\{0-35\}"
          className={classNames(
            hasSpecials(symbolString) || strTooLong(symbolString)
              ? "border-red-500 focus:border-red-500 hover:border-red-500"
              : "border-gray-300 hover:border-blue-500 focus:border-blue-500",
            "focus:outline-none border hover:border-2 focus:border-2  rounded px-3 py-1 w-full h-14 "
          )}
          type="text"
          placeholder="Symbol / Symbols separated by space"
          value={symbolString}
          onChange={handleTextFieldChange}
        />
      </div>
    </>
  );
};

export default Inputfield;
