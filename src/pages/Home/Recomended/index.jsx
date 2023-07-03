import { useContext } from "react";
import styled from "styled-components";
import RecomendedList from "./RecomendedList";
import Context from "../../../store/Context";

const Recomended = ({ shows }) => {
  const context = useContext(Context);
  const { filter } = context;
  const { all } = shows;

  let headingMessage;
  if (filter === "") {
    headingMessage = "Recomended for you";
  } else {
    headingMessage = `Found ${all.length} results for '${filter}'`;
  }
  return (
    <>
      <Wrapper>
        <Heading>{headingMessage}</Heading>
        <div>
          <RecomendedList allShows={all} />
        </div>
      </Wrapper>
    </>
  );
};
const Heading = styled.h2`
  margin-block: 2.4rem;
  line-height: 1;
`;
const Wrapper = styled.div`
  padding-inline: 1.6rem;
`;
export default Recomended;
