import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
import Item from "../../components/Item/Item";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 966px;
  width: 100%;
  height: auto;
  min-height: 90vh;
`;

const ShowAllItems = (props) => {
  const [response, setResponse] = useState(null);
  const url = "http://localhost:4500/item";

  useEffect(() => {
    console.log("started");
    const getItems = async () => {
      try {
        const items = await axios.get(url);
        const data = items.data.data;
        setResponse(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };

    getItems();
  }, []);
  return (
    <Wrapper>
      {response != null ? (
        <>
          {response.map((item) => (
            <>
              <Item item={item} />
            </>
          ))}
        </>
      ) : (
        <p>...{response}</p>
      )}
    </Wrapper>
  );
};

ShowAllItems.propTypes = {};

export default ShowAllItems;
