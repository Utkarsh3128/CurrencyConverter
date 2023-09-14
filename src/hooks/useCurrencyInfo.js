// custom hooks
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); // since we can't hold data in normal variable as it will never update the UI

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency])) // this will return json file of currency
      .catch((error) => {
        alert(error);
      });
  }, [currency]);
  
  return data;
}

export default useCurrencyInfo;
