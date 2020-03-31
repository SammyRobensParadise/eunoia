import styled from "styled-components";
const colors = {
  black: '#000000',
  white: '#ffffff'
}
const defaultSize = '72px'
export interface CircleButtonProps {
  primary?: boolean
  transparent?: boolean
  blackFont?: boolean
  fontOverride?: string
  height?: string
}

export const CircleButton = styled.button<CircleButtonProps>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? `${colors.black}`:props.transparent? "none": `${colors.white}`};
  color: ${props => props.primary||(props.transparent && !props.blackFont) ? "white" : `${colors.black}`};
  font-size: ${props => props.fontOverride? `${props.fontOverride}`: "1.625em"};
  width: ${props => props.height? props.height: defaultSize};
  height: ${props => props.height? props.height: defaultSize};
  border: 2px solid #E1A87A;
  border-radius: 100%;
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