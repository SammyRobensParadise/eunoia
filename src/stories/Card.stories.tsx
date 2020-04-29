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
      <Card shouldRender width={3} />
    </div>
  )),
)
