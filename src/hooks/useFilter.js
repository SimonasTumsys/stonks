import { useState, useEffect } from "react";
import { toUnixTime } from "../utils/utils";
import {
  API_URL,
  STOCK_PROFILE_URL,
  STOCK_CANDLE_URL,
} from "../utils/constants";

function useFilter() {
  const [compName, setCompName] = useState("");
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

  const handleTextFieldChange = (e) => {
    setCompName(e.target.value);
  };

  const handleDateFrom = (newValue) => {
    if (dateTo && newValue <= dateTo) {
      setDateFrom(newValue);
    } else if (!dateTo && newValue <= new Date().getTime()) {
      setDateFrom(newValue);
    }
  };

  const handleDateTo = (newValue) => {
    if (
      newValue &&
      newValue.getTime() >= dateFrom.getTime() &&
      newValue <= new Date().getTime()
    ) {
      setDateTo(newValue);
    }
  };

  const createFetchUrlForCompanyProfile = () => {
    let fetchUrl = API_URL + STOCK_PROFILE_URL;
  };

  const createFetchUrlForPriceHistory = () => {};

  return {
    compName,
    handleTextFieldChange,
    dateFrom,
    handleDateFrom,
    dateTo,
    handleDateTo,
  };
}

export default useFilter;
