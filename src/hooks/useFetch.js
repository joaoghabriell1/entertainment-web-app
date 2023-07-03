import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();

      const arrayData = Object.values(data);
      setData(arrayData);
    };
    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;
