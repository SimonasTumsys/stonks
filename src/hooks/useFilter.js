import { useState, useEffect } from "react";
import { toUnixTime, hasSpecials, strTooLong } from "../utils/utils";
import { API_KEY, API_SANDBOX_KEY } from "../utils/constants";
import { useFetch } from "./useFetch";
import {
  API_URL,
  STOCK_PROFILE_URL,
  STOCK_CANDLE_URL,
} from "../utils/constants";

const useFilter = () => {
  const [symbol, setSymbol] = useState("");
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

  const handleTextFieldChange = (e) => {
    setSymbol(e.target.value);
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

  const createFetchUrlForCompanyProfile = (symbol) => {
    let fetchUrl = API_URL + STOCK_PROFILE_URL;
    if (symbol && !hasSpecials(symbol) && !strTooLong(symbol)) {
      fetchUrl += "?symbol=" + symbol.toUpperCase() + "&token=" + API_KEY;
    }
    return fetchUrl;
  };

  const createFetchUrlForPriceHistory = () => {};

  return {
    symbol,
    handleTextFieldChange,
    setSymbol,
    dateFrom,
    handleDateFrom,
    setDateFrom,
    dateTo,
    handleDateTo,
    setDateTo,
    createFetchUrlForCompanyProfile,
  };
};

export default useFilter;
