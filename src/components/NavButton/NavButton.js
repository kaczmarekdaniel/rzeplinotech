import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled(NavLink)`
  color: whitesmoke;
  width: 150px;
  font-size: 1.3rem;
  white-space: nowrap;
  text-align: center;
  &.active {
    color: lightblue;
  }
`;

const NavButton = ({ text, target }) => {
  return <Wrapper to={target}>{text}</Wrapper>;
};

NavButton.propTypes = {};

export default NavButton;
