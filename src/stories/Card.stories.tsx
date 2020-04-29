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
  content: `sample text`,
  title: `Intensif-Eye; Google Vision AI, Design`,
  imageURL: 'https://i.ibb.co/r2NBmKn/intensif-eye-render-shadow-4.png',
  fontOverride: 'Helvetica Neue',
  fontSize: '30px',
  link: '/#',
}
stories.add(
  'Card',
  withInfo({
    styles,
    text: `
    In Development
    `,
    inline: true,
    source: false,
  })(() => (
    <div>
      <Card config={config} />
    </div>
  )),
)
