import React from 'react'
import { Menu } from '../components/Menu'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { styleConfig } from '../utils/config'
import { UIStyle } from '../constants/constants'
import { HomeIcon } from '../components/Icons'
import '../css/styles/styles.css'

// constants
const stories = storiesOf('Components', module)
const styles = styleConfig.styles
const config = {
  fontColor: UIStyle.UIColors.black,
  activeSection: 'Home',
  hideOnMobile: true,
  DisableMobile: false,
  fontOverride: 'Helvetica Neue',
  boldText: false,
  spacing: 0,
  row: true,
  breakpoints: { xs: true },
}
const options = [
  {
    title: 'Home',
    link: '/#',
    newTab: false,
    icon: <HomeIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
    main: true,
  },
  { title: 'About', link: '/#', newTab: false},
  { title: 'Articles', link: '/#', newTab: false },
  { title: 'Design', link: '/#', newTab: false },
  { title: 'Development', link: '/#', newTab: false },
  { title: 'Experience', link: '/#', newTab: false },
]
stories.add(
  'Menu',
  withInfo({
    styles,
    text: `
    Default Menu
    `,
    inline: true,
    source: false,
  })(() => (
    <div>
      <Menu config={config} options={options} />
    </div>
  )),
)
