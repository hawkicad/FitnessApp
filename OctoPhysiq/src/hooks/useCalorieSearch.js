import React, { useState, useEffect } from 'react';

function useCalorieSearch(food) {
  const [ data, setData ] = useState([]);
  const [ length, setLength ] = useState(0);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': `${process.env.REACT_APP_CALORIE_RAPIDAPI_HOST}`,
		'X-RapidAPI-Key': `${process.env.REACT_APP_RAPIDAPI_KEY}`
      }
  }

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    async function fetchSearchResults() {
      let responseBody = {};
      setLoading(true);
      try {
        const response = await fetch(
          `https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${food}`,
          options,
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
        setData(responseBody || []);
        setLength(responseBody.items.length || 0);
      }
    }
    if (food) {
      fetchSearchResults()
      return () => {
      controller.abort();
      ignore = true;
      }
    }
  }, [food]);
  //console.log(data);
  return [ data, length, loading, error ];
}

export default useCalorieSearch;