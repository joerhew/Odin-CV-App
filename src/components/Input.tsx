import { ChangeEvent } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: grid;  
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: 30% 50%;
`

const LabelDiv = styled.div`
  display: flex;
  align-items: center;
`

const InputDiv = styled.div`
  display: flex;
  align-items: center
`

const StyledInput = styled.input`
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid black;
  min-width: 100%;
`

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, name, value, onChange }: InputProps) {
  return (
    <InputContainer>
      <LabelDiv>
        <label>{label}</label>
      </LabelDiv>
      <InputDiv>
        <StyledInput
          name = {name}
          value = {value} 
          onChange = {onChange} />
      </InputDiv>
    </InputContainer>
  );
}

export default Input;