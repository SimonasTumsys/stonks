import React from "react";
import useFetch from "../../hooks/useFetch";
import useFilter from "../../hooks/useFilter";
import { Tooltip } from "@material-tailwind/react";
import { hasSpecials, strTooLong, classNames } from "../../utils/utils";

const SearchButton = (props) => {
  return (
    <div>
      <Tooltip
        content="Wrong Input"
        placement="bottom"
        className={classNames(
          hasSpecials(props.symbol) || strTooLong(props.symbol)
            ? "peer-active:block"
            : "hidden",
          "text-white bg-red-600 w-30 h-6 rounded text-center align-middle"
        )}
      >
        <button
          type="button"
          className={classNames(
            hasSpecials(props.symbol) ||
              strTooLong(props.symbol) ||
              !props.symbol
              ? "hover:bg-blue-500"
              : "hover:bg-blue-600",
            "w-full bg-blue-500 rounded-md border-gray-300 mt-2 md:mt-4 h-10 text-white md:w-56 border peer"
          )}
          onClick={props.handleSearchButtonClick}
          disabled={
            !props.symbol ||
            hasSpecials(props.symbol) ||
            strTooLong(props.symbol)
          }
        >
          Search
        </button>
      </Tooltip>
    </div>
  );
};

export default SearchButton;
