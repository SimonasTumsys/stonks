import { useEffect, useState } from "react";
import { SERVER_URL } from "../utils/constants";
import { dateToString } from "../utils/utils";

const useCandleFetch = (url, compName, dFrom, dTo) => {
  const [candleData, setCandleData] = useState(null);
  const [candleLoading, setCandleLoading] = useState(false);
  const [candleError, setCandleError] = useState(null);

  useEffect(() => {
    setCandleLoading(true);
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((requestData) => {
        setCandleData(requestData);
        compName &&
          fetch(SERVER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              requestTimestamp: dateToString(new Date()),
              companyName: compName,
              closingPrices: requestData["c"],
              candleTimestamps: requestData["t"],
              dateFrom: dateToString(dFrom),
              dateTo: dateToString(dTo),
            }),
          })
            .then((response) => response.json())
            .then((responseData) => console.log(responseData));
      })
      .catch((err) => setCandleError(err))
      .finally(() => {
        setCandleLoading(false);
      });
  }, [url]);

  return { candleData, setCandleData, candleLoading, candleError };
};

export default useCandleFetch;
