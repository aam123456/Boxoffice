import ActorsCard from "./ActorsCard";
import { FlexGrid } from '../common/FlexGrid'

const ActorsGrid = ({actors}) => {
  return (
    <FlexGrid>
      {actors.map((data) => (
        <ActorsCard
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          image={data.person.image ? data.person.image.medium : "/noimage.png"}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
        />
      ))}
    </FlexGrid>
  );
};
export default ActorsGrid;
