import { useState } from "react";
import InputField from "../components/form/InputField";
import DatePicker from "../components/form/DatePicker";
import SearchButton from "../components/form/SearchButton";
import ResetButton from "../components/form/ResetButton";
import CompanyTable from "../components/data/CompanyTable";
import useFilter from "../hooks/useFilter";
import CircularIndeterminate from "../components/data/CircularIndeterminate";
import { makeCompanySymbolArray, getYesterday } from "../utils/utils";
import useCompanyProfileFetch from "../hooks/useCompanyProfileFetch";
import { Switch } from "@mui/material";
import HistoryModal from "../components/data/HistoryModal";
import usePriceHistory from "../hooks/usePriceHistory";
import useCandleFetch from "../hooks/useCandleFetch";

const Home = (props) => {
  const [symbols, setSymbols] = useState([]);
  const { profileData, setProfileData, profileLoading } =
    useCompanyProfileFetch(symbols);

  const {
    symbolString,
    handleTextFieldChange,
    setSymbolString,
    dateFrom,
    handleDateFrom,
    setDateFrom,
    dateTo,
    handleDateTo,
    setDateTo,
  } = useFilter();

  const handleSearchButtonClick = () => {
    const symbolArray = makeCompanySymbolArray(symbolString);
    setSymbols(symbolArray);
  };

  const handleResetButtonClick = () => {
    setSymbolString("");
    setDateFrom(new Date(2022, 7, 1));
    setDateTo(new Date());
    setSymbols([]);
    setResolution("15");
    setCompanyName(null);
  };

  const [url, setUrl] = useState(null);
  const [companyName, setCompanyName] = useState(null);

  const {
    historyModal,
    toggleHistoryModal,
    resolution,
    setResolution,
    handleResolutionChange,
    symbol,
    setSymbol,
  } = usePriceHistory();

  const { candleData, setCandleData, candleLoading, candleError } =
    useCandleFetch(url);

  return (
    <div className="pt-8 p-8 h-screen min-h-screen">
      <HistoryModal
        historyModal={historyModal}
        toggleHistoryModal={toggleHistoryModal}
        resolution={resolution}
        handleResolutionChange={handleResolutionChange}
        symbol={symbol}
        dateFrom={dateFrom}
        dateTo={dateTo}
        candleLoading={candleLoading}
        candleData={candleData}
        setCandleData={setCandleData}
        setUrl={setUrl}
        companyName={companyName}
      />
      <div className="absolute top-0 left-0">
        <Switch color="default" onChange={props.handleStonkSwitch} />
      </div>
      <div
        className="container 
          mx-auto pt-10 max-w-xl px-6 
          h-full border bg-gray-100 rounded min-w-min opacity-95 overflow-auto "
      >
        <div className="mb-4">
          <InputField
            symbolString={symbolString}
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
            symbol={symbolString}
          />
          <ResetButton handleResetButtonClick={handleResetButtonClick} />
        </div>
        {symbols.length > 0 ? (
          <div className="container mt-4 flex justify-center overflow-auto">
            {profileLoading ? (
              <CircularIndeterminate />
            ) : (
              <CompanyTable
                profileData={profileData}
                historyModal={historyModal}
                toggleHistoryModal={toggleHistoryModal}
                setSymbol={setSymbol}
                symbol={symbol}
                resolution={resolution}
                dateFrom={dateFrom}
                dateTo={dateTo}
                setUrl={setUrl}
                setCompanyName={setCompanyName}
                candleData={candleData}
              />
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
