import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import useFilter from "../../hooks/useFilter";

function Datepicker() {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const { dateFrom, handleDateFrom, dateTo, handleDateTo } = useFilter();

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {!isMobile ? (
          <div className="flex justify-between">
            <DesktopDatePicker
              label="Date From"
              inputFormat="dd/MM/yyyy"
              value={dateFrom}
              onChange={handleDateFrom}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{
                    backgroundColor: "#fff",
                    svg: { color: "darkGreen" },
                  }}
                />
              )}
            />
            <DesktopDatePicker
              label="Date To"
              inputFormat="dd/MM/yyyy"
              value={dateTo}
              onChange={handleDateTo}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{
                    backgroundColor: "#fff",
                    svg: dateFrom ? { color: "darkGreen" } : { color: "gray" },
                  }}
                />
              )}
              disabled={!dateFrom}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <MobileDatePicker
              label="Date From"
              inputFormat="dd/MM/yyyy"
              value={dateFrom}
              onChange={handleDateFrom}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{
                    backgroundColor: "#fff",
                  }}
                />
              )}
            />
            <MobileDatePicker
              label="Date To"
              inputFormat="dd/MM/yyyy"
              value={dateTo}
              onChange={handleDateTo}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{
                    backgroundColor: "#fff",
                  }}
                />
              )}
              disabled={!dateFrom}
            />
          </div>
        )}
      </LocalizationProvider>
    </>
  );
}

export default Datepicker;
