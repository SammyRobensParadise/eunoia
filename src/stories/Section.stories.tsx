import React from 'react'
import { Section } from '../components/Section'
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
  'Section',
  withInfo({
    styles,
    text: `
   ### Designed as
   ### Usage:
    ~~~jsx
    <Card config={config} />
    ~~~
    ### Config:
    ~~~ts
    config: {
    }
    ~~~
    `,
    inline: true,
    source: false,
  })(() => (
    <div>
      <Section config={config} />
    </div>
  )),
)
