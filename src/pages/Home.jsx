import { useEffect, useState } from "react";
import InputField from "../components/form/InputField";
import DatePicker from "../components/form/DatePicker";
import SearchButton from "../components/form/SearchButton";
import ResetButton from "../components/form/ResetButton";
import CompanyTable from "../components/data/CompanyTable";
import useFilter from "../hooks/useFilter";
import useFetch from "../hooks/useFetch";
import CircularIndeterminate from "../components/data/CircularIndeterminate";
import { makeCompanySymbolArray } from "../utils/utils";

const Home = () => {
  const [url, setUrl] = useState(null);
  const { data, setData, loading, error } = useFetch(url);

  const {
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
  } = useFilter();

  const handleSearchButtonClick = () => {
    // let symbolArray = makeCompanySymbolArray(symbol);
    // console.log(symbolArray);
    let fetchUrl = createFetchUrlForCompanyProfile(symbol);
    setUrl(fetchUrl);
  };

  const handleResetButtonClick = () => {
    setSymbol("");
    setDateFrom(null);
    setDateTo(null);
    setUrl(null);
    setData(null);
  };

  return (
    <div className="pt-8 p-8 h-screen min-h-screen">
      <div
        className="container 
          mx-auto pt-10 max-w-xl px-6 
          h-full border bg-gray-100 rounded min-w-min opacity-95"
      >
        <div className="mb-4">
          <InputField
            symbol={symbol}
            handleTextFieldChange={handleTextFieldChange}
          />
        </div>
        <div className="w-full">
          <DatePicker
            dateFrom={dateFrom}
            handleDateFrom={handleDateFrom}
            dateTo={dateTo}
            handleDateTo={handleDateTo}
          />
        </div>
        <div className="md:flex md:justify-between">
          <SearchButton
            handleSearchButtonClick={handleSearchButtonClick}
            symbol={symbol}
          />
          <ResetButton handleResetButtonClick={handleResetButtonClick} />
        </div>
        <div className="container mt-4 flex justify-center">
          {loading ? <CircularIndeterminate /> : <CompanyTable data={data} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
