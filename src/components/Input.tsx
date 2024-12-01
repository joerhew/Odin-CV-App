import { ChangeEvent } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`

const LabelDiv = styled.div<{ $visible: boolean }>`
  position: absolute;
  right: calc(50% + 35% + 10px);
  width: 110px;
  opacity: ${props => props.$visible ? 1 : 0};
  pointer-events: none;
  text-align: right;
  transition: opacity 0.3s ease;
`

const InputWrapper = styled.div`
  position: relative;
  width: 70%;
`

const StyledInput = styled.input<{ $hasValue: boolean }>`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${props => props.$hasValue ? '#cccccc' : '#000000'};
  outline: none;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: transparent;
  }
  
  &:focus::placeholder {
    color: #999
  }
`

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, name, value, onChange }: InputProps) {
  const hasValue = value.trim().length > 0;

  return (
    <InputContainer>
      <LabelDiv $visible={!hasValue}>
        <label htmlFor={name}>{label}</label>
      </LabelDiv>
      <InputWrapper>
        <StyledInput
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          $hasValue={hasValue}
          placeholder={hasValue ? label : ''}
        />
      </InputWrapper>
    </InputContainer>
  );
}

export default Input;