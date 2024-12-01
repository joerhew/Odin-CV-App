import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  border: 1px solid black;
`

interface ButtonProps {
  children: string;
}

function Button({ children }: ButtonProps) {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

export default Button