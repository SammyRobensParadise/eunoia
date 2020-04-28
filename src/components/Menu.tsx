import React, { Component } from 'react'
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
    breakpoints: {
      xs?: boolean
      sm?: boolean
      xl?: boolean
    }
  }
  options?: Array<{
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
  item: {
    title?: string | undefined
    link?: string | undefined | any
    newTab?: boolean | undefined
    icon?: any
    main?: boolean | undefined
  }
}

interface MenuItemWrapperProps {
  main?: boolean | undefined
}

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

const MenuNode = ({ item }: MenuNodeProps) => {
  return item.icon ? item.icon : item.title
}
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
          <MenuNode item={item} />
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
const MenuListMobile = ({ options, config }: MenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <MenuMobile
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItemMobile onClick={handleClose}>Profile</MenuItemMobile>
        <MenuItemMobile onClick={handleClose}>My account</MenuItemMobile>
        <MenuItemMobile onClick={handleClose}>Logout</MenuItemMobile>
      </MenuMobile>
    </div>
  )
}

export class Menu extends Component<MenuProps, MenuState> {
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
    const mobileBreakpoint = window.innerWidth < 850
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
