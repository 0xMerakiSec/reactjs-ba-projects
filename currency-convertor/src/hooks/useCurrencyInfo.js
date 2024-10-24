import { useEffect, useState } from "react";
const key = "";
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
