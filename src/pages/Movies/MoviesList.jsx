import ShowCard from "../../components/MediaCard";
import { Ul } from "../Home/Recomended/RecomendedList";

const MoviesList = ({ movies }) => {
  let content;
  if (movies.length > 0) {
    content = (
      <Ul>
        {movies.map(
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

export default MoviesList;
