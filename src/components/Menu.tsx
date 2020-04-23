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
  }>
}

interface MenuState {
  activeSection?: string
}

interface MenuItemProps {
  font?: string | undefined
  fontColor?: string | undefined
}
const MenuContainer = styled.div`
  display: inline-flex;
`
const MenuLink = styled(NavLink)<MenuItemProps>`
  font-family: ${(p) => (p.font ? p.font : 'Arial')};
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(p) => p.fontColor};
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

const MenuList = ({ options, config }: MenuProps) => {
  const MenuToRender = options?.map((item) => (
    <Grid
      item
      xs={config.breakpoints.xs ? 6 : undefined}
      sm={config.breakpoints.sm ? 6 : undefined}
      xl={config.breakpoints.xl ? 6 : undefined}
      alignItems="center"
    >
      <MenuLink to={item.link} font={config.fontOverride} fontColor={config.fontColor}>
        <MenuItem font={config.fontOverride} fontColor={config.fontColor}>
          {item.title}
        </MenuItem>
      </MenuLink>
    </Grid>
  ))
  return (
    <Grid container spacing={config.spacing}>
      <MenuContainer>{MenuToRender}</MenuContainer>
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
