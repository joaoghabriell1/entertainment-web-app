import styled from "styled-components";
import ShowCard from "../../components/MediaCard";
import { Ul } from "../Home/Recomended/RecomendedList";

const TvShowsList = ({ tvShows }) => {
  let content;
  if (tvShows.length > 0) {
    content = (
      <Ul>
        {tvShows.map(
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

export default TvShowsList;
