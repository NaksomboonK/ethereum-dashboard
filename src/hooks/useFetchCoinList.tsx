import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { coinListItem } from "../data/coinList";

function useFetchCoinList() {
  const url =
    "https://api.coingecko.com/api/v3/coins/list?include_platform=true";
  const [data, setData] = useState<coinListItem[]>([]);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    let mount = true;

    if (mount) {
      setData([]);
      axios.get<coinListItem[]>(url).then(
        (data) => {
          setData(data.data);
        },
        (error: AxiosError) => {
          setData([]);
          setError(error.message);
        }
      );
    }
    return () => {
      mount = false;
    };
  }, []);

  return { data: data, error: error };
}

export default useFetchCoinList;
