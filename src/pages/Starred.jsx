import { useQuery } from "@tanstack/react-query";
import { useStarredShows } from "../lib/useStarredShows";
import { getShowsById } from "../api/tvmaze";
import ShowGrid from "../components/Shows/ShowGrid";

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ["starred", starredShowsIds],
    queryFn: () =>
      getShowsById(starredShowsIds).then((result) =>
        result.map((show) => {
          return {
            show,
          };
        })
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShows?.length===0) {
    return <div>No Shows were Starred</div>
  }
  if (starredShows?.length>0) {
    return <ShowGrid shows={starredShows} />;
  }
  if(starredShowsError){
    return <div>Error occured:{starredShowsError.message}</div>
  }

  return <div>Shows are loading</div>;
};

export default Starred;
