import styled from "styled-components";
const colors = {
  black: '#000000',
  white: '#ffffff'
}

export interface ButtonProps {
  primary?: boolean
  transparent?: boolean
  blackFont?: boolean
  fontOverride?: string
}

export const Button = styled.button<ButtonProps>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? `${colors.black}`:props.transparent? "none": `${colors.white}`};
  color: ${props => props.primary||(props.transparent && !props.blackFont) ? "white" : `${colors.black}`};

  font-size: ${props => props.fontOverride? `${props.fontOverride}`: "1.625em"};
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid #E1A87A;
  border-radius: 0px;
  transition: letter-spacing 0.5s;
  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
    letter-spacing: 2px;
  }
  &:focus {
    outline: none;
  }
`;
