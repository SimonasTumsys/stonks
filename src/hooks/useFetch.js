import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: "GET",
      headers: { "X-Finnhub-Token": API_KEY },
      "Content-Type": "application/json",
    })
      .then((response) => response.json)
      .then((requestData) => setData(requestData))
      .catch((err) => setError(err));
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
