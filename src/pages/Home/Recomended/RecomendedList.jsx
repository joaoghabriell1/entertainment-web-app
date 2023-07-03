import { styled } from "styled-components";
import ShowCard from "../../../components/MediaCard";

const RecomendedList = (props) => {
  const { allShows } = props;
  let content;

  if (allShows.length > 0) {
    content = (
      <Ul>
        {allShows.map(
          ({ title, year, rating, isBookmarked, thumbnail, category }) => {
            return (
              <ShowCard
                key={title}
                title={title}
                year={year}
                rating={rating}
                thumbnail={thumbnail}
                category={category}
                isBookMarked={isBookmarked}
              />
            );
          }
        )}
      </Ul>
    );
  }
  return <div>{content}</div>;
};

export const Ul = styled.ul`
  --min-width: 150px;
  --max-width: 1fr;
  --column: auto-fit;

  @media (768px <= width <= 1250px) {
    --min-width: 220px;
    --column: 3;
  }

  @media (min-width: 1250px) {
    --min-width: 280px;
    --column: 4;
  }

  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(
    var(--column),
    minmax(var(--min-width), var(--max-width))
  );
  gap: 1.5rem;

  @media (min-width: 1024px) {
    column-gap: 4rem;
    row-gap: 3.2rem;
  }
`;

export default RecomendedList;
