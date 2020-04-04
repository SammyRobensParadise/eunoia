import React from 'react'
import { action } from '@storybook/addon-actions'
import { CircleButton } from '../components/CircleButton'
import styled from 'styled-components'
const IconWrapper = styled.div`
  transform: scale(2);
  margin-left: 20px;
`
interface IconProps {
  bg?: string
}
const Icon = styled.i<IconProps>`
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 22px;
    height: 22px;
&::after,
&::before {
    content: "";
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
}
&::before {
    width: 16px;
    height: 2px;
    bottom: 10px;
    background: ${(props) => (props.bg ? props.bg : `#000000`)};
    }`
export default {
  title: 'CircleButton',
  component: CircleButton,
}
// stoires
export const Default = () => (
  <CircleButton onClick={action('clicked')}>
    <IconWrapper>
      <Icon bg={'#000000'} />
    </IconWrapper>
  </CircleButton>
)
export const Primary = () => (
  <CircleButton primary onClick={action('clicked')}>
    <IconWrapper>
      <Icon bg={'#ffffff'} />
    </IconWrapper>
  </CircleButton>
)
export const Transparent = () => <CircleButton transparent onClick={action('clicked')} />
export const Height = () => (
  <div>
    <CircleButton height="20px" onClick={action('clicked')} />
    <CircleButton height="40px" onClick={action('clicked')} />
    <CircleButton height="60px" onClick={action('clicked')} />
    <CircleButton height="80px" onClick={action('clicked')} />
    <CircleButton height="100px" onClick={action('clicked')} />
  </div>
)
