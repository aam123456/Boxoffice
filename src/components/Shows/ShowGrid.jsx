
import ShowCard from "./ShowCard";
import { useStarredShows } from "../../lib/useStarredShows";
import { FlexGrid } from '../common/FlexGrid'


const ShowGrid = ({ shows }) => {
  const[starredShows,dispatchStarred] =useStarredShows()
  console.log({ starredShows });

  const onstarMeClick = (showId) => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: "UNSTAR", showId });
    } else {
      dispatchStarred({ type: "STAR", showId });
    }
  };
  return (
    <FlexGrid>
      {shows.map((data) => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : "/noimage.png"}
          summary={data.show.summary}
          onstarMeClick={onstarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
