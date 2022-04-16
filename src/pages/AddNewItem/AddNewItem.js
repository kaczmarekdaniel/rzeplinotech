import React, { useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Input = styled.input.attrs({
  type: "text",
})`
  width: 250px;
  height: 35px;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 20px;
  background: transparent;
  color: white;
  border: 2px solid white;
  transition: 0.3s;
  &:hover {
    color: black;
    background: lightblue;
    border-color: lightblue;
  }
`;

const AddNewItem = (props) => {
  const url = "http://localhost:4500/item";

  const itemName = useRef();
  const itemProducer = useRef();
  const itemOwner = useRef();
  const formHandler = async () => {
    const data = {
      name: itemName.current?.value,
      producer: itemProducer.current?.value,
      owner: itemOwner.current?.value,
    };
    try {
      const response = await axios.post(url, data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
    itemName.current.value = "";
    itemProducer.current.value = "";
    itemOwner.current.value = "";
  };
  return (
    <div>
      <h2 className="">Dodaj</h2>
      <InputContainer>
        <Label className="" htmlFor="full_name">
          Nazwa
        </Label>
        <Input ref={itemName} placeholder="Nazwa" type="text" />
      </InputContainer>
      <InputContainer>
        <Label>Producent</Label>
        <Input ref={itemProducer} placeholder="Producent" />
      </InputContainer>
      <InputContainer>
        <Label className="">Właściciel</Label>
        <Input ref={itemOwner} placeholder="Właściciel" />
      </InputContainer>

      <SubmitButton
        onClick={() => {
          formHandler();
        }}
      >
        Dodaj
      </SubmitButton>
    </div>
  );
};

AddNewItem.propTypes = {};

export default AddNewItem;
