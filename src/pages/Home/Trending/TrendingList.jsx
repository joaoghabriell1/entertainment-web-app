import styled from "styled-components";
import TrendingCard from "./TrendingCard";

const TrendingList = ({ shows }) => {
  return (
    <TrendingUl>
      {shows.map(
        ({ title, year, rating, thumbnail, category, isBookmarked }) => {
          return (
            <TrendingCard
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
    </TrendingUl>
  );
};

const TrendingUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  padding-right: 1.6rem;
  padding-bottom: 1.6rem;
  overflow: hidden;
  overflow-x: scroll;
  gap: 1.6rem;

  &::-webkit-scrollbar {
    background-color: none;
    width: 15px;
  }

  /* background of the scrollbar except button or resizer */
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* scrollbar itself */
  &::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 26px;
    border: 4px solid #fff;
  }

  /* set button(top and bottom of the scrollbar) */
  &::-webkit-scrollbar-button {
    display: none;
  }
`;

export default TrendingList;
