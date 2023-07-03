import styled from "styled-components";
import home from "../../assets/assets/icon-nav-home.svg";
import movies from "../../assets/assets/icon-nav-movies.svg";
import series from "../../assets/assets/icon-nav-tv-series.svg";
import nav from "../../assets/assets/icon-nav-bookmark.svg";
import { NavLink } from "react-router-dom";
import ItemImg from "./ItemImg";

const NavBar = () => {
  return (
    <Nav>
      <Ul>
        <ListItem>
          <ItemImg path="/" url={home} />
        </ListItem>
        <ListItem>
          <ItemImg path="movies" url={movies} />
        </ListItem>
        <ListItem>
          <ItemImg path="series" url={series} />
        </ListItem>
        <ListItem>
          <ItemImg path="book-marked" url={nav} />
        </ListItem>
      </Ul>
    </Nav>
  );
};
const Nav = styled.nav`
  @media (min-width: 1000px) {
    flex: 1;
  }
`;
const Ul = styled.ul`
  display: flex;
  gap: 2.4rem;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (min-width: 1000px) {
    flex-direction: column;
    margin-top: 7.5rem;
    gap: 4rem;
  }
`;

const ListItem = styled.li`
  img {
    aspect-ratio: 1/1;
    background-image: url("../../assets");
    width: 1.6rem;
  }

  img:hover {
    fill: white;
  }
  &:hover {
  }
`;

export default NavBar;
