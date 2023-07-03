import { useContext, useEffect } from "react";
import styled from "styled-components";
import MoviesList from "./MoviesList";
import Context from "../../store/Context";

const Movies = () => {
  const context = useContext(Context);
  const {
    filter,
    shows: { movies },
  } = context;
  useEffect(() => {
    context.cleanFilter();
  }, []);

  let headingMessage;
  if (filter === "") {
    headingMessage = "Movies";
  } else {
    headingMessage = `Found ${movies.length} results for '${filter}'`;
  }

  return (
    <Wrapper>
      <Heading>{headingMessage}</Heading>
      <div>
        <MoviesList movies={movies} />
      </div>
    </Wrapper>
  );
};

export const Heading = styled.h2`
  margin-block: 2.4rem;
`;

export const Wrapper = styled.div`
  padding-inline: 1.6rem;
`;

export default Movies;
