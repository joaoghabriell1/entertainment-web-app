import styled from "styled-components";
import { useContext, useEffect } from "react";
import BookMarkedMovies from "./BookMarkedMovies";
import BookMarkedTvShows from "./BookMarkedTvShows";
import Context from "../../store/Context";
import { Wrapper, Heading } from "../Movies";

const BookMarked = () => {
  const context = useContext(Context);
  const { shows, filter } = context;

  const { isBookmarked } = shows;

  let content;

  const movies = isBookmarked.filter(({ category }) => category === "Movie");
  const tvShows = isBookmarked.filter(
    ({ category }) => category === "TV Series"
  );

  useEffect(() => {
    context.cleanFilter();
  }, []);

  if (filter === "") {
    content = (
      <>
        <div>
          <Heading>Movies</Heading>
          {movies.length > 0 ? (
            <>
              <BookMarkedMovies movies={movies} />
            </>
          ) : (
            <>
              <Message>You have no bookmarked movies.</Message>
            </>
          )}
        </div>
        <div>
          <Heading>TV Shows</Heading>
          {tvShows.length > 0 ? (
            <>
              <BookMarkedTvShows tvShows={tvShows} />
            </>
          ) : (
            <Message>You have no bookmarked TV Shows.</Message>
          )}
        </div>
      </>
    );
  } else {
    content = (
      <>
        <Heading>{`Found ${isBookmarked.length} results for '${filter}'`}</Heading>
        <div>
          <BookMarkedMovies movies={isBookmarked} />
        </div>
      </>
    );
  }
  return <Wrapper>{content}</Wrapper>;
};

const Message = styled.p`
  font-size: 1.5rem;
  color: var(--light-white);
  font-weight: 300;
`;
export default BookMarked;
