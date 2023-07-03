import { Ul } from "../Home/Recomended/RecomendedList";
import ShowCard from "../../components/MediaCard";

const BookMarkedTvShows = ({ tvShows }) => {
  return (
    <div>
      <Ul>
        {tvShows?.map(
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
    </div>
  );
};

export default BookMarkedTvShows;
