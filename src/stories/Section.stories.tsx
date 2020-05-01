import React from 'react'
import { SectionHeader } from '../components/Section'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { styleConfig } from '../utils/config'
import { UIStyle } from '../constants/constants'
import '../css/styles/styles.css'
import styled from 'styled-components'
// constants
const stories = storiesOf('Components', module)
const styles = styleConfig.styles
const config = {
  shouldRender: true,
  centerText: true,
  fontOverride: 'Georgia Regular',
  fontColor: UIStyle.UIColors.gold,
  fontSize: 50,
  height: 220,
  backgroundColor: UIStyle.UIColors.darkGrey,
}
const Content = styled.h3`
  margin: 0 auto;
  height: inherit;
  padding-top: 15vh;
  &{
    @media screen and (max-width: 800px){
      padding-top: 10vh;
    }
    @media screen and (max-width: 400px){
      padding-top: 10vh;
    }
  }
`
stories.add(
  'SectionHeader',
  withInfo({
    styles,
    text: `
   ### Designed as section header component
   ### Usage:
    ~~~jsx
    <SectionHeader config={config}>Content</SectionHeader>
    ~~~
    ### Config:
    ~~~ts
    config: {
      shouldRender: boolean | undefined
      centerText?: boolean | undefined
      fontOverride?: string | undefined
      fontColor?: string | undefined
      fontSize?: number | undefined
      height?: number | undefined
      backgroundColor?: string | undefined
    }
    ~~~
    `,
    inline: true,
    source: true,
  })(() => (
    <div>
      <SectionHeader config={config}>
        <Content>Design</Content>
      </SectionHeader>
    </div>
  )),
)
