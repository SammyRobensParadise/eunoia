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

export interface LeftArrowProps {
  color?: string
  offset?: string
  scalingFactor?: number
}

export interface DownArrowProps {
  color?: string
  offset?: string
  scalingFactor?: number
}

export interface UpArrowProps {
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
  height: 22px;
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    right: 3px;
  }
  &::after {
    width: 8px;
    height: 8px;
    border-top: 2px solid;
    border-right: 2px solid;
    transform: rotate(45deg);
    bottom: 7px;
    border-color: ${(props) => (props.color ? props.color : colors.black)};
  }
  &::before {
    width: 16px;
    height: 2px;
    bottom: 10px;
    background: ${(props) => (props.color ? props.color : colors.black)};
  }
`

export const LeftArrow = styled.i<LeftArrowProps>`
  position: relative;
  display: block;
  transform: ${(props) =>
    props.scalingFactor
      ? `scale(var(--ggs,${props.scalingFactor}))`
      : `scale(var(--ggs,${defaultScale}))`};
  margin-left: ${(props) => (props.offset ? props.offset : `0px;`)};
  width: 22px;
  height: 22px;
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 3px;
  }
  &::after {
    width: 8px;
    height: 8px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    transform: rotate(45deg);
    bottom: 7px;
    border-color: ${(props) => (props.color ? props.color : colors.black)};
  }
  &::before {
    width: 16px;
    height: 2px;
    bottom: 10px;
    background: ${(props) => (props.color ? props.color : colors.black)};
  }
`
export const DownArrow = styled.i<DownArrowProps>`
  position: relative;
  display: block;
  transform: ${(props) =>
    props.scalingFactor
      ? `scale(var(--ggs,${props.scalingFactor}))`
      : `scale(var(--ggs,${defaultScale}))`};
  margin-left: ${(props) => (props.offset ? props.offset : `0px;`)};
  width: 22px;
  height: 22px;
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    bottom: 4px;
  }
  &::after {
    width: 8px;
    height: 8px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    transform: rotate(-45deg);
    left: 7px;
    border-color: ${(props) => (props.color ? props.color : colors.black)};
  }
  &::before {
    width: 2px;
    height: 16px;
    left: 10px;
    background: ${(props) => (props.color ? props.color : colors.black)};
  }
`
export const UpArrow = styled.i<UpArrowProps>`
  position: relative;
  display: block;
  transform: ${(props) =>
    props.scalingFactor
      ? `scale(var(--ggs,${props.scalingFactor}))`
      : `scale(var(--ggs,${defaultScale}))`};
  margin-left: ${(props) => (props.offset ? props.offset : `0px;`)};
  width: 22px;
  height: 22px;
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    top: 4px;
  }
  &::after {
    width: 8px;
    height: 8px;
    border-top: 2px solid;
    border-left: 2px solid;
    transform: rotate(45deg);
    left: 7px;
    border-color: ${(props) => (props.color ? props.color : colors.black)};
  }
  &::before {
    width: 2px;
    height: 16px;
    left: 10px;
    background: ${(props) => (props.color ? props.color : colors.black)};
  }
`
