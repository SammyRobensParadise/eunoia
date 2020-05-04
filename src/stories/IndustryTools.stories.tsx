import React from 'react'
import {
Icon,
} from '../components/IndustryTools'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { styleConfig } from '../utils/config'
import styled from 'styled-components'
const stories = storiesOf('Components', module)
const styles = styleConfig.styles

const Wrapper = styled.div`
  padding: 2rem;
  display: inline-block;
`

stories.add(
  'Industry Icons',
  withInfo({
    styles,
    text: `
    Default Icon Usage:
    ~~~jsx
    <ReactIcon color="red" scalingFactor={1} />
    ~~~
      | Props          | Description             | Type    |
      |----------------|-------------------------|---------|
      | color          |   color                 | string  |
      | scaling factor | transparent background  | number  |
    `,
    inline: true,
    source: true,
  })(() => (
    <div>
      <Wrapper>
        <Icon scalingFactor={1} color="#000000" />
      </Wrapper>
    </div>
  )),
)
