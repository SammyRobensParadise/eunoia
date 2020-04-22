import React from 'react'
import { Menu } from '../components/Menu'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { styleConfig } from '../utils/config'
import styled from 'styled-components'
const stories = storiesOf('Components', module)
const styles = styleConfig.styles
const config = {
  fontColor: 'white',
  activeSection: 'home',
  hide: false,
  DisableMobile: false,
  fontOverride: 'none',
  boldText: false,
}
const options = [{}]
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
