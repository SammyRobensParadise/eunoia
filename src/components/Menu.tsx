// Imports

import React from 'react'
import {
  Container,
  Grid,
  Button,
  Menu as MenuMobile,
  MenuItem as MenuItemMobile,
} from '@material-ui/core'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { UIStyle } from '../constants/constants'
import styled from 'styled-components'
import { MenuIcon } from './Icons'

// Interfaces

export interface MenuProps {
  config: {
    fontColor?: string
    activeSection?: string
    hideOnMobile?: boolean
    DisableMobile?: boolean
    fontOverride?: string
    boldText?: boolean
    spacing?: any
    row?: boolean
    fontSize?: string
    mobilebreakPoint?: number | undefined
    breakpoints: {
      xs?: boolean
      sm?: boolean
      xl?: boolean
    }
  }
  options: Array<{
    title?: string | undefined
    link?: string | undefined | any
    newTab?: boolean
    icon?: any
    main?: boolean | undefined
  }>
}

interface MenuState {
  activeSection?: string
}

interface MenuItemProps {
  font?: string | undefined
  fontColor?: string | undefined
  fontSize?: string
  main?: boolean | undefined
}

interface MenuNodeProps {
  fontColor: string | undefined
  item: {
    title?: string | undefined
    link?: string | undefined | any
    newTab?: boolean | undefined
    icon?: any
    main?: boolean | undefined
  }
}

interface MenuNodeStyleProps {
  fontColor: string | undefined

}

interface MenuItemWrapperProps {
  main?: boolean | undefined
}

// Styles CSS

const MenuContainer = styled(Grid)`
  position: relative;
  display: inline-block;
  margin: 0 auto;
`

const MenuLink = styled(NavLink)<MenuItemProps>`
  font-family: ${(p) => (p.font ? p.font : 'Arial')};
  font-weight: bold;
  text-decoration: none;

  color: ${(p) => p.fontColor};
  letter-spacing: 0rem;
  display: inline-block;
  position: relative;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${(p) => p.fontColor};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
    color: ${(p) => p.fontColor};
  }
  &:hover:after {
    width: 100%;
    left: 0;
    color: ${(p) => p.fontColor};
  }
`
const MenuLinkMobile = styled(NavLink)<MenuItemProps>`
  font-family: ${(p) => (p.font ? p.font : 'Arial')};
  font-weight: bold;
  text-decoration: none;

  color: ${(p) => p.fontColor};
  letter-spacing: 0rem;
  position: relative;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${(p) => p.fontColor};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`

const MenuItem = styled.div<MenuItemProps>`
  font-family: ${(p) => (p.font ? p.font : 'Arial')};
  font-weight: bold;
  text-decoration: none !important;
  color: ${(p) => (p.color ? p.color : UIStyle.UIColors.black)};
  font-size: ${(p) => (p.fontSize ? p.fontSize : '26px')};
  padding-left: 20px;
  padding-right: 20px;
  &:link {
    text-decoration: none !important;
  }
  &:active {
    text-decoration: none !important;
  }
  &:visited {
    text-decoration: none !important;
  }
`
const MenuItemWrapper = styled(Grid)<MenuItemWrapperProps>`
  display: inline-block;
  padding-right: ${(p) => (p.main ? '200px' : '0px')};
`
const MenuItemMobileOverride = styled(MenuItemMobile)<MenuItemProps>`
  font-family: ${(p) => (p.font ? p.font : 'Arial')};
  font-weight: bold;
  text-decoration: none !important;
  color: ${(p) => (p.color ? p.color : UIStyle.UIColors.black)};
  font-size: ${(p) => (p.fontSize ? '18px' : '18px')};
  padding-left: 20px;
  padding-right: 20px;
  &:link {
    text-decoration: none !important;
  }
  &:active {
    text-decoration: none !important;
  }
  &:visited {
    text-decoration: none !important;
  }
`
const MenuNodeStyle = styled.div<MenuNodeStyleProps>`
color: ${(p) => p.fontColor};
`
// Components

/**
 * Menu node desktop component
 * @param MenuNodeProps
 * @returns `Boolean`
 */
const MenuNode = ({ item, fontColor }: MenuNodeProps) => {
  return (<MenuNodeStyle fontColor={fontColor}>{item.icon ? item.icon : item.title}</MenuNodeStyle> )
}

/**
 * Menu list desktop component
 * @param MenuProps
 * @returns `tsx`
 */
const MenuList = ({ options, config }: MenuProps) => {
  const MenuToRender = options?.map((item) => (
    <MenuItemWrapper
      item
      xs={config.breakpoints.xs ? 6 : undefined}
      sm={config.breakpoints.sm ? 3 : undefined}
      alignItems="center"
    >
      <MenuLink to={item.link} font={config.fontOverride} fontColor={config.fontColor}>
        <MenuItem
          font={config.fontOverride}
          fontColor={config.fontColor}
          fontSize={config.fontSize}
        >
          <MenuNode item={item} fontColor={config.fontColor} />
        </MenuItem>
      </MenuLink>
    </MenuItemWrapper>
  ))
  return (
    <Grid container spacing={config.spacing} alignItems="center">
      <MenuContainer direction={'row'}>{MenuToRender}</MenuContainer>
    </Grid>
  )
}

/**
 * Mobile Menu Item List Component
 * @param MenuProps
 * @returns `tsx`
 */
const MenuListMobile = ({ options, config }: MenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  /**
   * click handler
   * @param event
   */
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const mobileMenuToRender = options?.map((item) => (
    <MenuLinkMobile to={item.link} font={config.fontOverride} fontColor={config.fontColor}>
      <MenuItemMobileOverride
        font={config.fontOverride}
        fontColor={config.fontColor}
        fontSize={config.fontSize}
        onClick={handleClose}
      >
        <MenuNode fontColor={config.fontColor} item={item} />
      </MenuItemMobileOverride>
    </MenuLinkMobile>
  ))
  return (
    <div>
      <Button aria-controls="mobile-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon color={UIStyle.UIColors.black} scalingFactor={1} />
      </Button>
      <MenuMobile
        id="mobile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {mobileMenuToRender}
      </MenuMobile>
    </div>
  )
}

/**
 * @class `Menu`
 */
export class Menu extends React.PureComponent<MenuProps, MenuState> {
  static defaultProps = {
    activeSection: null,
  }
  constructor(props: MenuProps) {
    super(props)

    this.state = {
      activeSection: props.config.activeSection,
    }
  }
  render() {
    const { options, config } = this.props
    const breakpointFromProps = config.mobilebreakPoint ? config.mobilebreakPoint : 850
    const mobileBreakpoint = window.innerWidth < breakpointFromProps
    return config.hideOnMobile && mobileBreakpoint ? (
      <div className="hidden-menu">
        <Router>
          <Container disableGutters>
            <MenuListMobile options={options} config={config} />
          </Container>
        </Router>
      </div>
    ) : (
      <Router>
        <Container disableGutters>
          <MenuList options={options} config={config} />
        </Container>
      </Router>
    )
  }
}
