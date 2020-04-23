import React, { Component } from 'react'
import { Box, Container, Grid } from '@material-ui/core'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
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
    title?: string
    link?: string | undefined | any
    newTab?: boolean
  }>
}

interface MenuState {
  activeSection?: string
}
const MenuContainer = styled.ul`

  display: inline-block;
`
const MenuItem = styled.li`

`
const MenuList = ({ options, config }: MenuProps) => {
  const MenuToRender = options?.map((item) => (
    <Grid
      spacing={config.spacing}
      xs={config.breakpoints.xs ? 1 : undefined}
      sm={config.breakpoints.sm ? 6 : undefined}
      xl={config.breakpoints.xl ? 12 : undefined}
    >
      <NavLink to={item.link}>{item.title}</NavLink>
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
