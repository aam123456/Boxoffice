import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchForShows, searchForPeople } from "./../api/tvmaze";
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/Shows/ShowGrid";
import ActorsGrid from "../components/Actors/ActordGrid";

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ["search", filter],
    queryFn: () =>
      filter.searchOption === "shows"
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus:false,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured:{apiDataError.message}</div>;
    }

    if (apiData?.length === 0) {
      return <div>No Results</div>;
    }
    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;











// const [apiData, setApiData] = useState(null);
// const [apiDataError, setApiDataError] = useState(null);
// try {
//   setApiDataError(null);
//   let result;

//   if (searchOption === "shows") {
//     result = await searchForSho})ws(q);
//   } else {
//     result = await searchForPeople(q);
//   }
//   setApiData(result);
// } catch (error) {
//   setApiDataError(error);
// }
