import { useEffect, useState } from "react";
import InputField from "../components/form/InputField";
import DatePicker from "../components/form/DatePicker";
import SearchButton from "../components/form/SearchButton";
import ResetButton from "../components/form/ResetButton";
import CompanyTable from "../components/data/CompanyTable";
import useFilter from "../hooks/useFilter";
import useFetch from "../hooks/useFetch";
import CircularIndeterminate from "../components/data/CircularIndeterminate";
import {
  makeCompanySymbolArray,
  isEmptyObject,
  makeUniqueObjectArray,
  createFetchUrlForCompanyProfile,
} from "../utils/utils";
import useCompanyProfileFetch from "../hooks/useCompanyProfileFetch";

const Home = () => {
  // const [url, setUrl] = useState(null);
  // const { data, setData, loading, error } = useFetch(url);
  const [symbols, setSymbols] = useState([]);
  const { profileData, setProfileData, profileLoading } =
    useCompanyProfileFetch(symbols);

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
  } = useFilter();

  const handleSearchButtonClick = () => {
    const newSymbols = makeCompanySymbolArray(symbol);
    setSymbols(newSymbols);
  };

  const handleResetButtonClick = () => {
    setSymbol("");
    setDateFrom(null);
    setDateTo(null);
    setSymbols([]);
  };

  return (
    <div className="pt-8 p-8 h-screen min-h-screen">
      <div
        className="container 
          mx-auto pt-10 max-w-xl px-6 
          h-full border bg-gray-100 rounded min-w-min opacity-95 overflow-auto "
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
        {symbols.length > 0 ? (
          <div className="container mt-4 flex justify-center overflow-auto">
            {profileLoading ? (
              <CircularIndeterminate />
            ) : (
              <CompanyTable loading={profileLoading} data={profileData} />
            )}
          </div>
        ) : (
          <div className="flex justify-center">
            <span className="pt-8 text-gray-600 text-3xl font-thin font-sans">
              Try searching!
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
