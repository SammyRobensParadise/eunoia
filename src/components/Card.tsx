import React from 'react'
import {
  Container,
  Card as CardUI,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { UIStyle } from '../constants/constants'
import styled from 'styled-components'

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

interface CardLinkProps {
  font?: string | undefined
  fontColor?: string | undefined
}

interface CardTitleProps {
  font?: string | undefined
  fontSize?: string | undefined
}
const CardLink = styled(NavLink)<CardLinkProps>`
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
const CardTitle = styled.h2<CardTitleProps>`
  font-family: ${(p) => (p.font ? p.font : 'Arial')};
  font-weight: bold;
  text-decoration: none;
  font-size: ${(p) => (p.fontSize ? p.fontSize : '40px')};
`

const CardEl = ({ config }: CardProps) => {
  const { content, title, imageURL, height, imageAltText, fontOverride, fontSize } = config
  return (
    <CardUI>
      <CardActionArea>
        <CardContent>
          <CardTitle font={fontOverride} fontSize={fontSize}>
            {title}
          </CardTitle>
          <p>{content}</p>
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
    const { link, fontOverride, fontColor } = this.props.config
    const { config } = this.props
    if (link) {
      return shouldRender ? (
        <Container>
          <Router>
            <CardLink to={link} font={fontOverride} fontColor={fontColor}>
              <CardEl config={config} />
            </CardLink>
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
