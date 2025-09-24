import React, { useEffect, useState } from "react";

function useFetch(url = "", method = "GET") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
      method,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        setData(data);
      })
      .catch((err) => console.err(err))
      .finally(() => setIsLoading(false));
  }, [url, method]);

  return { data, isLoading };
}

export default useFetch;
