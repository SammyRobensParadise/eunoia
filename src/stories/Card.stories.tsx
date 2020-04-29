import React from 'react'
import { Card } from '../components/Card'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { styleConfig } from '../utils/config'
// import { UIStyle } from '../constants/constants'
import '../css/styles/styles.css'

// constants
const stories = storiesOf('Components', module)
const styles = styleConfig.styles
const config = {
  shouldRender: true,
  content: `AI for better vision helping people see more every day, improving their lives`,
  title: `Intensif-Eye; Google Vision AI, Design`,
  imageURL: 'https://i.ibb.co/r2NBmKn/intensif-eye-render-shadow-4.png',
  fontOverride: 'Georgia Regular',
  fontSize: '18px',
  fontSizeTitle: '30px',
  link: '/#',
}
stories.add(
  'Card',
  withInfo({
    styles,
    text: `
   ### Designed as a flex card for use, built on top of Material UI Card
   ### Usage:
    ~~~jsx
    <Card config={config} />
    ~~~
    ### Config:
    ~~~ts
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
    ~~~
    `,
    inline: true,
    source: true,
  })(() => (
    <div>
      <Card config={config} />
    </div>
  )),
)
