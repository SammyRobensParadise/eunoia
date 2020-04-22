import React, { Component } from 'react'
import { Box, Container, Grid } from '@material-ui/core'
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
    link?: string
    newTab?: boolean
  }>
}

interface MenuState {
  activeSection?: string
}

const MenuList = ({ options, config }: MenuProps) => {
  const MenuToRender = options?.map((item) => (
    <Grid
      spacing={config.spacing}
      xs={config.breakpoints.xs ? 6 : undefined}
      sm={config.breakpoints.sm ? 6 : undefined}
      xl={config.breakpoints.xl ? 12 : undefined}
    >
      {item.title}
    </Grid>
  ))
  return (
    <Grid container spacing={config.spacing}>
      {MenuToRender}
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
    return (
      <Box>
        <Container>
          <MenuList options={options} config={config} />
        </Container>
      </Box>
    )
  }
}
