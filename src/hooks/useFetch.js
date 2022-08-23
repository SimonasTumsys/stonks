import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
import { createFetchUrlForCompanyProfile } from "./useFilter";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((requestData) => setData(requestData))
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  // useEffect(() => {
  //   let array = data;
  //   setLoading(true);
  //   (async () => {
  //     const response = await fetch(url, {
  //       method: "GET",
  //     });
  //     const requestData = await response.json();
  //     array.push(requestData);
  //     setData(array);
  //   })();
  //   setLoading(false);
  // }, [url]);

  return { data, setData, loading, error };
};

export default useFetch;
