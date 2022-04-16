import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border: 1px solid white;
  margin: 10px;
`;

const ItemData = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  font-size: 1.2rem;
  background: white;
  color: black;
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemRecord = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  p {
    margin: 0;
    text-align: left;
  }

  .label {
    margin-top: 10px;
    font-size: 1rem;
  }
`;

const Item = ({ item }) => {
  return (
    <Wrapper>
      <ItemData>
        <ItemRecord>
          <p className="label">Nazwa:</p>
          <p>
            {item.name}, {item.producer}
          </p>
        </ItemRecord>
        <ItemRecord>
          <p className="label">Właściciel:</p>
          <p>{item.owner}</p>
        </ItemRecord>
      </ItemData>
    </Wrapper>
  );
};

Item.propTypes = {};

export default Item;
