import { useState } from "react";
import "./App.css";
import SearchBox from "./component/searchBox/searchCoinBox";
import useFetchCoinInfo from "./hooks/useFetchCoinInfo";
import InfoDashboard from "./component/infoDashboard/infoDashboard";

function App() {
  const [coinId, setCoinId] = useState<string | undefined>();
  const { data, error, loading } = useFetchCoinInfo(coinId);

  return (
    <div className="App">
      <div className={"search-box"}>
        <SearchBox
          onSearch={(id: string) => setCoinId(id)}
          disable={loading}
        ></SearchBox>
      </div>
      <InfoDashboard data={data} loading={loading}></InfoDashboard>
    </div>
  );
}

export default App;
