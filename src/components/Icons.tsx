import styled from 'styled-components'
const colors = {
  black: '#000000',
  white: '#ffffff',
}
const defaultScale = '2'
export interface RightArrowProps {
  color?: string
  offset?: string
  scalingFactor?: number
}

export const RightArrow = styled.i<RightArrowProps>`
    position: relative;
    display: block;
    transform: ${(props) =>
      props.scalingFactor
        ? `scale(var(--ggs,${props.scalingFactor}))`
        : `scale(var(--ggs,${defaultScale}))`};
    margin-left: ${(props) => (props.offset ? props.offset : `0px;`)};
    width: 22px;
    height: 22px
}
&::after,
&::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    right: 3px
}
&::after {
    width: 8px;
    height: 8px;
    border-top: 2px solid;
    border-right: 2px solid;
    transform: rotate(45deg);
    bottom: 7px
}
&::before {
    width: 16px;
    height: 2px;
    bottom: 10px;
    background: ${(props) => (props.color ? props.color : colors.black)};
}`