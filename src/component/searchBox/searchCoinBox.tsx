import { useState } from "react";
import useFetchCoinList from "../../hooks/useFetchCoinList";
import { AutoComplete } from "antd";
import "./searchCoinBox.scss";

function SearchBox({
  onSearch,
  disable,
}: {
  onSearch: Function;
  disable: boolean;
}) {
  const [searchString, setSearchString] = useState<string | undefined>();
  const { data } = useFetchCoinList();

  return (
    <>
      <div>
        <AutoComplete
          value={searchString}
          disabled={disable}
          options={
            searchString
              ? data
                  .filter(
                    (item) =>
                      item.name
                        ?.toLocaleLowerCase()
                        .includes(searchString.toLocaleLowerCase() ?? "") &&
                      item.platforms?.ethereum!
                  )
                  .map((coin) => ({ value: coin.id, label: coin.name }))
              : []
          }
          style={{
            width: "50vw",
            textAlign: "initial",
            backgroundColor: "black",
          }}
          onSelect={(value, option) => {
            onSearch(value);
            setSearchString(option.label);
          }}
          onChange={(value) => {
            setSearchString(value);
          }}
          placeholder="Input here"
        />
      </div>
    </>
  );
}

export default SearchBox;
