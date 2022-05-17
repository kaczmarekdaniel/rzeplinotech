import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./providers/themeProvider/theme";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import AddNewItem from "./pages/AddNewItem/AddNewItem";
import ShowAllItems from "./pages/ShowAllItems/ShowAllItems";
import Navigation from "./features/Navigation/Navigation";

import DataProvider from "./providers/dataProvider/dataProvider";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundDefault};
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
    <ThemeProvider theme={theme}>
      <DataProvider>
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
      </DataProvider>
    </ThemeProvider>
  );
};

App.propTypes = {};

export default App;
