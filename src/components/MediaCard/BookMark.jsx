import { useContext } from "react";
import styled from "styled-components";
import full from "../../assets/assets/icon-bookmark-full.svg";
import empty from "../../assets/assets/icon-bookmark-empty.svg";
import Context from "../../store/Context";

const BookMark = ({ isBookMarked, title }) => {
  const context = useContext(Context);

  const handleClick = () => {
    context.handleBookMark(title);
  };
  return (
    <Container>
      <Button onClick={handleClick}>
        <img src={isBookMarked ? full : empty} alt="bookmard icon" />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  z-index: 2;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: 50%;
  background: hsla(0, 0%, 0%, 0.5);
  img {
    height: 15px;
    width: auto;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export default BookMark;
