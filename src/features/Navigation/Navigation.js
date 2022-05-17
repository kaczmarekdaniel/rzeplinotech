import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import NavButton from "../../components/NavButton/NavButton";

import { DataContext } from "../../providers/dataProvider/dataProvider";

const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Navigation = (props) => {
  const { deleteUser } = useContext(DataContext);
  deleteUser();
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
