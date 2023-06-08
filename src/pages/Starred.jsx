import { useQuery } from "@tanstack/react-query";
import { useStarredShows } from "../lib/useStarredShows";
import { getShowsById } from "../api/tvmaze";
import ShowGrid from "../components/Shows/ShowGrid";
import {TextCenter} from '../components/common/TextCenter'

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
    return <TextCenter>No Shows were Starred</TextCenter>
  }
  if (starredShows?.length>0) {
    return <ShowGrid shows={starredShows} />;
  }
  if(starredShowsError){
    return <TextCenter>Error occured:{starredShowsError.message}</TextCenter>
  }

  return <TextCenter>Shows are loading</TextCenter>;
};

export default Starred;
