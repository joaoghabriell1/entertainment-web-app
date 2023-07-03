import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const RootLayout = (props) => {
  return (
    <>
      <Header />
      <SearchBar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

const Main = styled.main`
  @media (min-width: 1000px) {
    margin-left: 15rem;
  }
`;

export default RootLayout;
