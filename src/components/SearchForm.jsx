import { useState } from "react";
import CustomRadio from "./Shows/CustomRadio";

const SearchForm = ({ onSearch }) => {
  const [searchStr, setsearchStr] = useState("");
  const [searchOption, setSearchOption] = useState("shows");

  // useEffect(()=>{
  //   console.log('Component Mounts')
  // },[searchOption])

  const onsearchChange = (ev) => {
    setsearchStr(ev.target.value);
  };

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };
  const onSubmit = (ev) => {
    ev.preventDefault();
    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>{searchStr}</div>
      <input type="text" value={searchStr} onChange={onsearchChange} />

      {/* <CustomRadio
        label="Shows"
        name="search-option"
        value="shows"
        checked={searchOption === "shows"}
        onChange={onRadioChange}
      />

      <CustomRadio
        label="Actors"
        name="search-option"
        value="actors"
        checked={searchOption === "actors"}
        onChange={onRadioChange}
      /> */}
      <label>
        Shows
        <input
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOption === "shows"}
          onChange={onRadioChange}
        ></input>
      </label>
      <label>
        Actors
        <input
          type="radio"
          name="search-option"
          value="actors"
          checked={searchOption === "actors"}
          onChange={onRadioChange}
        ></input>
      </label>

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
