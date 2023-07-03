import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ItemImg = (props) => {
  return (
    <>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                filter:
                  "invert(100%) sepia(0%) saturate(0%) hue-rotate(52deg) brightness(200%) contrast(102%)",
              }
            : { color: "blue" }
        }
        to={props.path}
      >
        <ImgContainer url={props.url}></ImgContainer>
      </NavLink>
    </>
  );
};

const ImgContainer = styled.div`
  aspect-ratio: 1/1;
  width: 1.7rem;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export default ItemImg;
