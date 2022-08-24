import { useEffect, useState } from "react";
import useSkipFirstRender from "./useSkipFirstRender";

const useFetch = (url) => {
  const [candleData, setCandleData] = useState(null);
  const [candleLoading, setCandleLoading] = useState(false);
  const [candleError, setCandleError] = useState(null);

  useEffect(() => {
    setCandleLoading(true);
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((requestData) => setCandleData(requestData))
      .catch((err) => setCandleError(err))
      .finally(() => {
        setCandleLoading(false);
      });
  }, [url]);

  return { candleData, setCandleData, candleLoading, candleError };
};

export default useFetch;
