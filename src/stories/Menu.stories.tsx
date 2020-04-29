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
  { title: 'About', link: '/#', newTab: false },
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
    #### Default Menu with mobile support that uses react-router-dom for navigation\
    The menu takes the following config as:
    ~~~jsx 
    <Menu config={config} options={options} />
    ~~~
    #### config:
    ~~~ts
    config: {
      fontColor?: string
      activeSection?: string
      hideOnMobile?: boolean
      DisableMobile?: boolean
      fontOverride?: string
      boldText?: boolean
      spacing?: any
      row?: boolean
      fontSize?: string
      breakpoints: {
        xs?: boolean
        sm?: boolean
        xl?: boolean
      }
    }
    ~~~
    #### Options (List Items):
    ~~~ts
    options: Array<{
      title?: string | undefined
      link?: string | undefined | any
      newTab?: boolean
      icon?: JSX | undefined
      main?: boolean | undefined
    }>
    ~~~
    ##### See the story source for implementation example
    `,
    inline: true,
    source: true,
  })(() => (
    <div>
      <Menu config={config} options={options} />
    </div>
  )),
)
