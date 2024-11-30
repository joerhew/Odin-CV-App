import { ChangeEvent } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid black;
`

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, name, value, onChange }: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <StyledInput
        name = {name}
        value = {value} 
        onChange = {onChange} />
    </div>
  );
}

export default Input;