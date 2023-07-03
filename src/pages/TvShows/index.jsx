import { useContext, useEffect } from "react";
import styled from "styled-components";
import TvShowsList from "./TvShowsList";
import Context from "../../store/Context";

const TvShows = () => {
  const context = useContext(Context);
  const {
    filter,
    shows: { tvShows },
  } = context;

  let headingMessage;
  if (filter === "") {
    headingMessage = "TV Series";
  } else {
    headingMessage = `Found ${tvShows.length} results for '${filter}'`;
  }

  useEffect(() => {
    context.cleanFilter();
  }, []);

  return (
    <Wrapper>
      <Heading>{headingMessage}</Heading>
      <div>
        <TvShowsList tvShows={tvShows} />
      </div>
    </Wrapper>
  );
};

const Heading = styled.h2`
  margin-block: 2.4rem;
`;

const Wrapper = styled.div`
  padding-inline: 1.6rem;
`;

export default TvShows;
