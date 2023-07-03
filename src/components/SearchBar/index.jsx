import { useLocation } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import searchIcon from "../../assets/assets/icon-search.svg";
import Context from "../../store/Context";

const SearchBar = () => {
  const { pathname } = useLocation();
  const context = useContext(Context);
  const { filter, shows } = context;
  let message;

  if (pathname === "/") {
    message = "Search for you favorite movie or TV show";
  }
  if (pathname === "/movies") {
    message = "Search for you favorite movie";
  }
  if (pathname === "/series") {
    message = "Search for you favorite TV show";
  }
  if (pathname === "/book-marked") {
    message = "Search for you bookmarked shows";
  }

  const path = (pathname) => {
    if (pathname === "/") {
      message = "Search for you favorite movie or tv show";
      return "all";
    }
    if (pathname === "/movies") {
      return "movies";
    }
    if (pathname === "/series") {
      return "tvShows";
    }
    if (pathname === "/book-marked") {
      return "isBookmarked";
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    let type = path(pathname);

    context.setFilter(value);
    context.filterShows(type, value);
  };

  return (
    <Container>
      <div>
        <img src={searchIcon} alt="icon" />
      </div>
      <Input
        onChange={handleChange}
        value={filter}
        type="text"
        name="media"
        placeholder={message}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.6rem;
  padding-inline: 1.6rem;
  img {
    aspect-ratio: 1/1;
    width: 2.4rem;
  }

  @media (min-width: 1000px) {
    margin-left: 15rem;
  }
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: 0;
  width: 100%;
  font-size: var(--fs-400);
  padding-left: 1rem;
  color: inherit;
  font-weight: 300;
  &::placeholder {
    color: var(--pure-white);
    opacity: 0.5;
    font-weight: 300;
  }
`;

export default SearchBar;
