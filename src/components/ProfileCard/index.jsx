import styled from "styled-components";
import AuthContext from "../../store/AuthContext";
import { useContext } from "react";

const ProfileCard = () => {
  const context = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const clickHandler = () => {
    context.logout();
  };

  return (
    <ProfileContainer>
      <InfoContainer>
        <h3>User</h3>
        <div>
          <p>{user.email}</p>
        </div>
      </InfoContainer>
      <LogoutButton onClick={clickHandler}>logout</LogoutButton>
    </ProfileContainer>
  );
};

const InfoContainer = styled.div`
  flex: 1;
  text-align: center;
  p {
    font-size: 15px;
    word-break: break-all;
  }
`;

const ProfileContainer = styled.div`
  position: absolute;
  padding: 1rem;
  z-index: 999;
  left: 110%;
  bottom: 0;
  height: 200px;
  width: 220px;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background: var(--semi-dark-blue);

  @media (max-width: 1000px) {
    right: 40px;
    left: auto;
    top: 80px;
    z-index: 999;
  }

  @media (max-width: 350px) {
    width: 150px;
    height: 150px;
  }
`;

const LogoutButton = styled.button`
  background: var(--light-red);
  padding-block: 0.7rem;
  border-radius: 5px;
  color: inherit;
  font-weight: 300;
  text-transform: capitalize;
  border: 0;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
export default ProfileCard;
