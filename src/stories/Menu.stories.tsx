import React from 'react'
import { Menu } from '../components/Menu'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { styleConfig } from '../utils/config'

// constants
const stories = storiesOf('Components', module)
const styles = styleConfig.styles
const config = {
  fontColor: 'white',
  activeSection: 'home',
  hide: false,
  DisableMobile: false,
  fontOverride: 'none',
  boldText: false,
  spacing: 0,
  row: true,
  breakpoints: {xs: true,}
}
const options = [
  { title: 'Home', link: '#', newTab: false, Icon: <div>icon</div> },
  { title: 'About', link: '#', newTab: false, Icon: <div>icon</div> },
  { title: 'Articles', link: '#', newTab: false, Icon: <div>icon</div> },
]
stories.add(
  'Menu',
  withInfo({
    styles,
    text: `
    Default Iconn Usage:
    `,
    inline: true,
    source: false,
  })(() => (
    <div>
      <Menu config={config} options={options} />
    </div>
  )),
)
