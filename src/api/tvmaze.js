const BASE_URL = "https://api.tvmaze.com";

const apiGet = async (queryString) => {
  //throw new Error("some thing bad happened");

  const response = await fetch(`${BASE_URL}${queryString}`);
  const body = await response.json();
  return body;
};

//https://api.tvmaze.com/search/shows?q=${searchStr}

export const searchForShows = (query) => apiGet(`/search/shows?q=${query}`);

export const searchForPeople = (query) => apiGet(`/search/people?q=${query}`);

export const getShowById=(showId)=>apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`)

export const getShowsById=async (showIds)=>{
  const promises=showIds.map(showId=>apiGet(`/shows/${showId}`))
  const result= await Promise.all(promises)
  console.log(result)
  return result

}