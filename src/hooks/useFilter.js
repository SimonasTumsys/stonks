import { useState } from "react";

const useFilter = () => {
  const [symbolString, setSymbolString] = useState("");
  const [dateFrom, setDateFrom] = useState(new Date(2022, 7, 23));
  const [dateTo, setDateTo] = useState(new Date());

  const handleTextFieldChange = (e) => {
    setSymbolString(e.target.value);
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

  return {
    symbolString,
    handleTextFieldChange,
    setSymbolString,
    dateFrom,
    handleDateFrom,
    setDateFrom,
    dateTo,
    handleDateTo,
    setDateTo,
  };
};

export default useFilter;
