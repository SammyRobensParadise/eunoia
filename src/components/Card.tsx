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
  shouldRender: boolean | undefined
  width: 1 | 2 | 3
}

interface CardState {
  shouldRender: boolean | undefined
  width: 1 | 2 | 3
}
export class Card extends React.PureComponent<CardProps, CardState> {
  static defaultProps = {
    activeSection: null,
  }
  constructor(props: CardProps) {
    super(props)

    this.state = {
      shouldRender: this.props.shouldRender,
      width: this.props.width,
    }
  }
  render() {
    return (
      <Container>
        <CardUI>
          <CardActionArea>
            <CardMedia title="Contemplative Reptile" />
            <CardContent>
              Lizard Lizards are a widespread group of squamate reptiles, with over 6,000 species,
              ranging across all continents except Antarctica
            </CardContent>
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
    )
  }
}
