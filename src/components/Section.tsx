import React from 'react'
import {
  Container,
  Card as CardUI,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { UIStyle } from '../constants/constants'
import styled from 'styled-components'

interface SectionProps {
  config: {
    shouldRender: boolean | undefined
    imageURL?: string | undefined
    imageAltText?: string | undefined
    content?: string
    title: string
    centerTitle?: boolean | undefined
    centerContent?: boolean | undefined
    fontOverride?: string | undefined
    fontColor?: string | undefined
    fontSize?: string | undefined
    fontSizeTitle?: string | undefined
    height?: string | number | undefined
    link?: string | undefined | any
    event?: any | undefined
    containImage?: boolean | undefined
  }
}

interface SectionState {
  shouldRender: boolean | undefined
}

export class Section extends React.PureComponent<SectionProps, SectionState> {
  static defaultProps = {
    activeSection: null,
  }
  constructor(props: SectionProps) {
    super(props)

    this.state = {
      shouldRender: this.props.config.shouldRender,
    }
  }
  render() {
 return (<div>
     <p>section</p>
 </div>)
}
}