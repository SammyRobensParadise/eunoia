import styled from 'styled-components'
import React from 'react'
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

type DribbbleIconProps = {
  color: string
  scalingFactor: number
}

type GithubIconProps = {
  color: string
  scalingFactor: number
}

type MediumIconProps = {
  color: string
  scalingFactor: number
}

type LinkedinIconProps = {
  color: string
  scalingFactor: number
}
type HomeIconProps = {
  color: string
  scalingFactor: number
}

type MenuIconProps = {
  color: string
  scalingFactor: number
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
export const DribbbleIcon = ({ color, scalingFactor }: DribbbleIconProps) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${scalingFactor ? 36 * scalingFactor : 36}`}
        height={`${scalingFactor ? 36 * scalingFactor : 36}`}
        viewBox="0 0 36 36"
      >
        <path
          id="Icon_simple-dribbble"
          data-name="Icon simple-dribbble"
          d="M18,36A18,18,0,1,1,36,18,18.024,18.024,0,0,1,18,36ZM33.18,20.463a22.549,22.549,0,0,0-9.576-.657,66.492,66.492,0,0,1,2.988,10.962,15.421,15.421,0,0,0,6.592-10.305ZM24.007,32.175A63.963,63.963,0,0,0,20.722,20.52l-.1.03c-8.685,3.023-11.79,9.038-12.06,9.6A15.335,15.335,0,0,0,24,32.178Zm-17.43-3.87c.348-.6,4.568-7.583,12.5-10.147.2-.067.405-.126.608-.18-.39-.878-.81-1.75-1.248-2.61a56.67,56.67,0,0,1-15.8,2.182l-.006.468A15.327,15.327,0,0,0,6.579,28.3ZM2.947,14.873A57.091,57.091,0,0,0,17.163,13a98.21,98.21,0,0,0-5.7-8.892A15.413,15.413,0,0,0,2.949,14.864ZM14.4,3.078a82.038,82.038,0,0,1,5.733,9c5.468-2.047,7.785-5.16,8.059-5.553A15.34,15.34,0,0,0,14.4,3.074ZM29.9,8.3a20.555,20.555,0,0,1-8.586,6.06c.36.735.7,1.477,1.02,2.229.12.27.225.54.33.8a36,36,0,0,1,10.71.5,15.216,15.216,0,0,0-3.465-9.57Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
export const GithubIcon = ({ color, scalingFactor }: GithubIconProps) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${scalingFactor ? 36 * scalingFactor : 36}`}
        height={`${scalingFactor ? 35.109 * scalingFactor : 35.109}`}
        viewBox="0 0 36 35.109"
      >
        <path
          id="Icon_simple-github"
          data-name="Icon simple-github"
          d="M18,.445a18,18,0,0,0-5.693,35.077c.9.169,1.23-.387,1.23-.866,0-.428-.015-1.56-.023-3.06-5.007,1.086-6.063-2.415-6.063-2.415a4.771,4.771,0,0,0-2-2.632c-1.63-1.116.126-1.094.126-1.094A3.774,3.774,0,0,1,8.333,27.31a3.836,3.836,0,0,0,5.243,1.5,3.838,3.838,0,0,1,1.14-2.407c-4-.45-8.2-2-8.2-8.9a6.944,6.944,0,0,1,1.852-4.83,6.4,6.4,0,0,1,.158-4.764s1.507-.483,4.95,1.845a16.97,16.97,0,0,1,9,0C25.9,7.428,27.4,7.911,27.4,7.911a6.577,6.577,0,0,1,.18,4.764,6.973,6.973,0,0,1,1.845,4.83c0,6.915-4.208,8.438-8.212,8.88a4.309,4.309,0,0,1,1.215,3.33c0,2.409-.022,4.344-.022,4.929,0,.472.315,1.035,1.237.855A17.978,17.978,0,0,0,18,.445"
          transform="translate(0 -0.445)"
          fill={color}
        />
      </svg>
    </div>
  )
}

export const MediumIcon = ({ color, scalingFactor }: MediumIconProps) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${scalingFactor ? 31.5 * scalingFactor : 31.5}`}
        height={`${scalingFactor ? 31.5 * scalingFactor : 31.5}`}
        viewBox="0 0 31.5 31.5"
      >
        <path
          id="Icon_awesome-medium"
          data-name="Icon awesome-medium"
          d="M0,2.25v31.5H31.5V2.25ZM26.17,9.71l-1.687,1.617a.5.5,0,0,0-.19.471V23.7a.484.484,0,0,0,.19.471l1.652,1.617v.359h-8.3V25.8l1.709-1.659c.169-.169.169-.218.169-.471V14.048L14.963,26.114h-.64L8.789,14.048v8.086a1.112,1.112,0,0,0,.309.928l2.222,2.693v.359H5.006v-.359l2.222-2.693a1.076,1.076,0,0,0,.288-.928V12.783a.8.8,0,0,0-.267-.689L5.273,9.71V9.352h6.138l4.739,10.406,4.17-10.4h5.85Z"
          transform="translate(0 -2.25)"
          fill={color}
        />
      </svg>
    </div>
  )
}

export const LinkedinIcon = ({ color, scalingFactor }: LinkedinIconProps) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${scalingFactor ? 31.5 * scalingFactor : 31.5}`}
        height={`${scalingFactor ? 31.499 * scalingFactor : 31.499}`}
        viewBox="0 0 31.5 31.499"
      >
        <path
          id="Icon_awesome-linkedin-in"
          data-name="Icon awesome-linkedin-in"
          d="M7.051,31.5H.52V10.47H7.051ZM3.782,7.6A3.8,3.8,0,1,1,7.564,3.783,3.814,3.814,0,0,1,3.782,7.6ZM31.493,31.5H24.976V21.263c0-2.44-.049-5.569-3.4-5.569-3.4,0-3.916,2.651-3.916,5.393V31.5H11.142V10.47h6.263v2.869H17.5a6.862,6.862,0,0,1,6.179-3.4c6.609,0,7.824,4.352,7.824,10.005V31.5Z"
          transform="translate(0 -0.001)"
          fill={color}
        />
      </svg>
    </div>
  )
}

export const HomeIcon = ({ color, scalingFactor }: HomeIconProps) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${scalingFactor ? 30 * scalingFactor : 30}`}
        height={`${scalingFactor ? 25.5 * scalingFactor : 25.5}`}
        viewBox="0 0 30 25.5"
      >
        <path
          id="Icon_material-home"
          data-name="Icon material-home"
          d="M15,30V21h6v9h7.5V18H33L18,4.5,3,18H7.5V30Z"
          transform="translate(-3 -4.5)"
          fill={color}
        />
      </svg>
    </div>
  )
}

export const MenuIcon = ({ color, scalingFactor }: MenuIconProps) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${scalingFactor ? 36 * scalingFactor : 36}`}
        height={`${scalingFactor ? 24 * scalingFactor : 24}`}
        viewBox="0 0 36 24"
      >
        <path
          id="Icon_material-menu"
          data-name="Icon material-menu"
          d="M4.5,33h36V29H4.5Zm0-10h36V19H4.5Zm0-14v4h36V9Z"
          transform="translate(-4.5 -9)"
          fill={color}
        />
      </svg>
    </div>
  )
}
