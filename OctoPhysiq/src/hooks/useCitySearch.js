import React, { useState, useEffect } from 'react';

function useCitySearch(city) {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    async function fetchSearchResults() {
      let responseBody = {};
      setLoading(true);
      try {
        const response = await fetch(
          `https://still-oasis-59846.herokuapp.com/?city=${city}&id=${process.env.REACT_APP_WEATHERAPI_KEY}`,
          { signal: controller.signal }
        );
        responseBody = await response.json();
      } catch (e) {
        if (e instanceof DOMException) {
          console.log("== HTTP request cancelled")
        } else {
          setError(true);
          throw e;
        }
      }
      if (!ignore) {
        setLoading(false);
        setError(false);
        console.log(responseBody);
        setData(responseBody.list || []);
      }
    }
    if (city) {
      fetchSearchResults()
      return () => {
      controller.abort();
      ignore = true;
      }
    }
  }, [city]);
  //console.log(data);
  return [ data, loading, error ];
}

export default useCitySearch;