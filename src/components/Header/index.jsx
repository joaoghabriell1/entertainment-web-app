import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../NavBar";
import ProfileCard from "../ProfileCard";
import logo from "../../assets/assets/logo.svg";
import profile from "../../assets/assets/image-avatar-2.svg";

const Header = () => {
  const [profileCard, setProfileCard] = useState(false);

  const clickHandler = () => {
    setProfileCard((prev) => !prev);
  };

  return (
    <HeaderTag>
      <LogoContainer>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </LogoContainer>
      <NavBar />
      <ProfileContainer onClick={clickHandler}>
        <img src={profile} alt="" />
      </ProfileContainer>
      {profileCard ? <ProfileCard /> : null}
    </HeaderTag>
  );
};

export default Header;

const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--semi-dark-blue);
  padding: 2rem;

  @media (min-width: 1000px) {
    position: fixed;
    left: 3.2rem;
    border-radius: 20px;
    top: 3.2rem;
    bottom: 3.2rem;
    z-index: 2;
    padding-inline: 3.5rem;
    flex-direction: column;
  }
`;

const LogoContainer = styled.div`
  img {
    width: 25px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const ProfileContainer = styled.div`
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid var(--pure-white);
  cursor: pointer;
  img {
    aspect-ratio: 1/1;
    width: 3rem;
  }
`;
