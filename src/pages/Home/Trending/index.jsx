import { useContext } from "react";
import styled from "styled-components";
import TrendingList from "./TrendingList";
import Context from "../../../store/Context";

const Trending = () => {
  const context = useContext(Context);
  const { shows } = context;
  return (
    <Wrapper>
      <Heading>Trending</Heading>
      <div>
        <TrendingList shows={shows.trending} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-left: 1.6rem;
`;

const Heading = styled.h2`
  margin-block: 2.6rem 1.6rem;
`;
export default Trending;
