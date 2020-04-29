import React from 'react'
import {
  Container,
  Card as CardUI,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
//import { UIStyle } from '../constants/constants'
//import styled from 'styled-components'

interface CardProps {
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
    height?: string | undefined
    link?: string | undefined | any
  }
}

interface CardState {
  shouldRender: boolean | undefined
}

const CardEl = ({ config }: CardProps) => {
  const { content, title, imageURL, height, imageAltText } = config
  return (
    <CardUI>
      <CardActionArea>
        <CardContent>
          <h1>{title}</h1>
          {content}
        </CardContent>
        <CardMedia
          title={title}
          image={imageURL}
          component="img"
          alt={imageAltText}
          height={height}
        />
      </CardActionArea>
    </CardUI>
  )
}
export class Card extends React.PureComponent<CardProps, CardState> {
  static defaultProps = {
    activeSection: null,
  }
  constructor(props: CardProps) {
    super(props)

    this.state = {
      shouldRender: this.props.config.shouldRender,
    }
  }
  render() {
    const { shouldRender } = this.state
    const { link } = this.props.config
    const { config } = this.props
    if (link) {
      return shouldRender ? (
        <Container>
          <Router>
            <NavLink to={link}>
              <CardEl config={config} />
            </NavLink>
          </Router>
        </Container>
      ) : null
    } else {
      return shouldRender ? (
        <Container>
          <CardEl config={config} />
        </Container>
      ) : null
    }
  }
}
