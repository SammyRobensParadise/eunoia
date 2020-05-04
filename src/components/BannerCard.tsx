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
import { makeStyles, useTheme } from '@material-ui/core/styles'

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
    height?: string | number | undefined
    link?: string | undefined | any
    event?: any | undefined
    containImage?: boolean | undefined
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

interface CardContentProps {
  font?: string | undefined
  fontSize?: string | undefined
}
interface CardMediaStyleProps {
  component: string | undefined
  height?: string | number | undefined
  alt?: string | undefined
  title?: string | undefined
}

// styles

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
  color: ${(p) => (p.color ? p.color : UIStyle.UIColors.black)};
`
const CardContentText = styled.p<CardContentProps>`
  font-family: ${(p) => (p.font ? p.font : 'Arial')};
  text-decoration: none;
  font-size: ${(p) => (p.fontSize ? p.fontSize : '18px')};
  color: ${(p) => (p.color ? p.color : UIStyle.UIColors.black)};
`
const CardMediaStyle = styled(CardMedia)<CardMediaStyleProps>`
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`

const CardEl = ({ config }: CardProps) => {
  const {
    content,
    title,
    imageURL,
    height,
    imageAltText,
    fontOverride,
    fontSize,
    fontSizeTitle,
    fontColor,
    containImage,
  } = config

  const wrapTheme = createMuiTheme({
    overrides: {
      MuiCardMedia: {
        root: {
          objectFit: containImage ? 'contain' : 'cover',
          userSelect: 'none',
          display: 'flex',
        },
      },
    },
  })

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      height: 'auto',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 400,
    },
  }))

  const classes = useStyles()
  return imageURL ? (
    <CardUI className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <CardTitle font={fontOverride} fontSize={fontSizeTitle} color={fontColor}>
            {title}
          </CardTitle>
          <CardContentText fontSize={fontSize} font={fontOverride} color={fontColor}>
            {content}
          </CardContentText>
        </CardContent>
      </div>
      <CardMedia className={classes.cover} image={imageURL} title={imageAltText} />
    </CardUI>
  ) : (
    <CardUI>
      <CardActionArea>
        <CardContent>
          <CardTitle font={fontOverride} fontSize={fontSizeTitle} color={fontColor}>
            {title}
          </CardTitle>
          <CardContentText fontSize={fontSize} font={fontOverride} color={fontColor}>
            {content}
          </CardContentText>
        </CardContent>
      </CardActionArea>
    </CardUI>
  )
}
export class BannerCard extends React.PureComponent<CardProps, CardState> {
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
    const { link, fontOverride, fontColor, event } = this.props.config
    const { config } = this.props
    if (link) {
      return shouldRender ? (
        <Container>
          <Router>
            <CardLink to={link} font={fontOverride} fontColor={fontColor} onClick={event}>
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
