import styled from 'styled-components'
import React, { Component } from 'react'


export interface MenuProps {
  config: {
    fontColor?: string
    activeSection?: string
    hide?: boolean
    DisableMobile?: boolean
    fontOverride?: string
    boldText?: boolean
  }
  options?: Array<object>
}

interface MenuState {
  activeSection?: string
}
export class Menu extends Component<MenuProps, MenuState> {
  static defaultProps = {
    activeSection: 'home',
  }
  constructor(props: MenuProps) {
    super(props)

    this.state = {
      activeSection: props.config.activeSection,
    }
  }
  render() {
    return <div>Coming Soon</div>
  }
}
