import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
import useFilter from "./useFilter";

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

  return { data, setData, loading, error };
};

export default useFetch;
