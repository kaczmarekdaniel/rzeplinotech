import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import NavButton from "../../components/NavButton/NavButton";

const Wrapper = styled.div`
  width: 100%;
  height: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Navigation = (props) => {
  return (
    <Wrapper>
      <NavButton text={"strona główna"} target={"/"} />
      <NavButton text={"dodaj"} target={"/add-item"} />
      <NavButton text={"wszystkie przedmioty"} target={"/all-items"} />
    </Wrapper>
  );
};

Navigation.propTypes = {};

export default Navigation;
