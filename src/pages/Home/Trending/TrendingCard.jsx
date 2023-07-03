import styled from "styled-components";
import tvIcon from "../../../assets/assets/icon-category-tv.svg";
import movieIcon from "../../../assets/assets/icon-category-movie.svg";
import useTrendingThumbnail from "../../../hooks/useTrendingThumbnail";
import BookMark from "../../../components/MediaCard/BookMark";
import iconPlay from "../../../assets/assets/icon-play.svg";
const TrendingCard = (props) => {
  const { isBookMarked, title, year, rating, category } = props;
  const [image] = useTrendingThumbnail(title);

  return (
    <TrendingItem>
      <MediaContainer>
        <img src={image} alt="image" />
        <BookMark title={title} isBookMarked={isBookMarked} />
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
      <Absolute>
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
          <Title>{title}</Title>
        </div>
      </Absolute>
    </TrendingItem>
  );
};

export default TrendingCard;

const TrendingItem = styled.div`
  position: relative;
  span {
    font-size: 1.2rem;
  }
`;

const Absolute = styled.div`
  position: absolute;
  bottom: 1.6rem;
  left: 1.6rem;
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
  padding: 9px 0.9rem;
  width: 120px;
  &:hover {
    cursor: pointer;
  }
  span {
    font-size: 18px;
    flex: 1;
    text-align: center;
    font-weight: 400;
    color: var(--pure-white);
  }
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

const MediaContainer = styled.div`
  --width: 240px;
  --heigth: 140px;

  @media (768px <= width <= 1000px) {
    --width: 400px;
    --height: 230px;
  }

  @media (min-width: 1000px) {
    --width: 470px;
    --height: 230px;
  }

  border-radius: 8px;
  overflow: hidden;
  height: var(--height);
  width: var(--width);

  & > img {
    width: var(--width);
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  &:hover div {
    display: flex;
  }
`;

const Title = styled.h3`
  font-size: var(--fs-400);
`;
