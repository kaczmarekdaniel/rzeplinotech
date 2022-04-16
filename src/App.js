import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import styled from "styled-components";

import AddNewItem from "./pages/AddNewItem/AddNewItem";
import ShowAllItems from "./pages/ShowAllItems/ShowAllItems";
import Navigation from "./features/Navigation/Navigation";

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Wrapper>
      <Navigation />
      <Content>
        <Routes>
          <Route path="/" exact element={<h1>landing</h1>} />
          <Route path="add-item" exact element={<AddNewItem />} />
          <Route path="all-items" exact element={<ShowAllItems />} />

          <Route path="item/:id" exact element={<ShowAllItems />} />

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Content>
    </Wrapper>
  );
};

App.propTypes = {};

export default App;
