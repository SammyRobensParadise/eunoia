import React from 'react'
import {
  Container,
  Card as CardUI,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@material-ui/core'
//import { BrowserRouter as Router, NavLink } from 'react-router-dom'
//import { UIStyle } from '../constants/constants'
//import styled from 'styled-components'

interface CardProps {
  config: {
    shouldRender: boolean | undefined
    imageURL?: string | undefined
    content?: string
    title: string
    centerTitle?: boolean | undefined
    centerContent?: boolean | undefined
  }
}

interface CardState {
  shouldRender: boolean | undefined
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
    const { content, title, imageURL } = this.props.config
    return shouldRender ? (
      <Container>
        <CardUI>
          <CardActionArea>
            <CardContent>
              <h1>{title}</h1>
              {content}
            </CardContent>
            <CardMedia
              title="Contemplative Reptile"
              image={imageURL}
              component="img"
              alt="Contemplative Reptile"
              height="500"
            />
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </CardUI>
      </Container>
    ) : null
  }
}
