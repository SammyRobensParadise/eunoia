import React, { Component } from 'react'
import { Box, Container, Grid } from '@material-ui/core'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { UIStyle } from '../constants/constants'
import styled from 'styled-components'

export interface MenuProps {
  config: {
    fontColor?: string
    activeSection?: string
    hide?: boolean
    DisableMobile?: boolean
    fontOverride?: string
    boldText?: boolean
    spacing?: any
    row?: boolean
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
    icon: any
    main?: boolean | undefined
  }>
}

interface MenuState {
  activeSection?: string
}

interface MenuItemProps {
  font?: string | undefined
  fontColor?: string | undefined
}

interface MenuNodeProps {
  item: {
    title?: string | undefined
    link?: string | undefined | any
    newTab?: boolean | undefined
    icon: any
    main?: boolean | undefined
  }
}
const MenuContainer = styled(Grid)`
  position: relative;
  display: flex;
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
  font-size: 26px;
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
const MenuNode = ({ item }: MenuNodeProps) => {
  return item.main && item.icon ? item.icon : item.title
}
const MenuList = ({ options, config }: MenuProps) => {
  const MenuToRender = options?.map((item) => (
    <Grid
      item
      xs={config.breakpoints.xs ? 6 : undefined}
      sm={config.breakpoints.sm ? 3 : undefined}
      alignItems="center"
    >
      <MenuLink to={item.link} font={config.fontOverride} fontColor={config.fontColor}>
        <MenuItem font={config.fontOverride} fontColor={config.fontColor}>
          <MenuNode item={item} />
        </MenuItem>
      </MenuLink>
    </Grid>
  ))
  return (
    <Grid container spacing={config.spacing} alignItems="center">
      <MenuContainer direction={'row'}>{MenuToRender}</MenuContainer>
    </Grid>
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
    return config.hide ? (
      <div className="hidden-menu" />
    ) : (
      <Router>
        <Box>
          <Container>
            <MenuList options={options} config={config} />
          </Container>
        </Box>
      </Router>
    )
  }
}
