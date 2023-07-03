import styled from "styled-components";
import useThumbnail from "../../hooks/useThumbnail";
import movieIcon from "../../assets/assets/icon-category-movie.svg";
import tvIcon from "../../assets/assets/icon-category-tv.svg";
import BookMark from "./BookMark";
import iconPlay from "../../assets/assets/icon-play.svg";

const ShowCard = (props) => {
  const { title, year, rating, category, isBookMarked } = props;
  const [image] = useThumbnail(title);

  return (
    <Li>
      <MediaContainer>
        <BookMark isBookMarked={isBookMarked} title={title} />
        <img src={image} alt="" />
        <HoverContainer>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            target="blank"
          >
            <PlayButton>
              <img src={iconPlay} alt="play video icon" />
              <span>Play</span>
            </PlayButton>
          </a>
        </HoverContainer>
      </MediaContainer>
      <Info>
        <span>{year}</span>
        <span>&#x2022;</span>
        <Category>
          {category === "Movie" ? (
            <img src={movieIcon} alt="movie icon" />
          ) : (
            <img src={tvIcon} alt="movie icon" />
          )}
          {category}
        </Category>
        <span>&#x2022;</span>
        <span>{rating}</span>
      </Info>
      <div>
        <h3>{title}</h3>
      </div>
    </Li>
  );
};
const Li = styled.li`
  position: relative;
`;

const Info = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-top: 0.8rem;
  align-items: center;
`;

const Category = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  img {
    aspect-ratio: 1/1;
    width: 10px;
    height: 10px;
  }
`;

const HoverContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  border-radius: 8px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  a {
    text-decoration: none;
  }
`;

const PlayButton = styled.button`
  z-index: 2;
  background: hsla(100, 100%, 100%, 0.25);
  display: flex;
  border-radius: 100vh;
  border: 0;
  align-items: center;
  font-size: 18px;
  padding: 9px 0.9rem;
  width: 120px;
  &:hover {
    cursor: pointer;
  }

  span {
    flex: 1;
    text-align: center;
    font-weight: 400;
    color: var(--pure-white);
  }
`;

const MediaContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  min-height: 100px;
  max-height: 180px;
  position: relative;
  & > img {
    width: 100%;
    object-fit: fit;
    object-position: center center;
  }

  &:hover div {
    display: flex;
  }
`;

export default ShowCard;
