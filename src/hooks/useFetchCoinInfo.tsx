import axios, { AxiosError } from "axios";
import  { useEffect, useState } from "react";
import { CoinItem } from "../data/coinItem";

function useFetchCoinInfo(coinId: string | undefined) {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=2&interval=daily`;
  const [data, setData] = useState<CoinItem | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    let mount = true;
    if (mount && coinId) {
      setLoading(true);
      axios.get<CoinItem>(url).then(
        (data) => {
          setData(data.data);
          setLoading(false);
        },
        (error: AxiosError) => {
          setData(undefined);
          setLoading(false);
          setError(error.message);
        }
      );
    }
    return () => {
      mount = false;
    };
  }, [coinId]);

  return { data: data, error: error, loading: loading };
}

export default useFetchCoinInfo;
