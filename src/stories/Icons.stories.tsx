import React from 'react'
import {
  RightArrow,
  LeftArrow,
  DownArrow,
  UpArrow,
  DribbbleIcon,
  GithubIcon,
  MediumIcon,
  LinkedinIcon,
  HomeIcon,
} from '../components/Icons'
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
  'Design Icons',
  withInfo({
    styles,
    text: `
    Default Iconn Usage:
    ~~~jsx
    <RighArrow scalingFactor={1} color="red" />
    ~~~
      | Props          | Description             | Type    |
      |----------------|-------------------------|---------|
      | color          |   color                 | string  |
      | scaling factor | transparent background  | number  |
      | offset         | left icon offset        | string  |
    `,
    inline: true,
    source: true,
  })(() => (
    <div>
      <Wrapper>
        <RightArrow scalingFactor={2} color="#000000" />
      </Wrapper>
      <Wrapper>
        <LeftArrow scalingFactor={2} color="#000000" />
      </Wrapper>
      <Wrapper>
        <DownArrow scalingFactor={2} color="#000000" />
      </Wrapper>
      <Wrapper>
        <UpArrow scalingFactor={2} color="#000000" />
      </Wrapper>
      <Wrapper>
        <HomeIcon color="#000000" scalingFactor={2} />
      </Wrapper>
      <Wrapper>
        <DribbbleIcon color="#000000" scalingFactor={2} />
      </Wrapper>
      <Wrapper>
        <GithubIcon color="#000000" scalingFactor={2} />
      </Wrapper>
      <Wrapper>
        <MediumIcon color="#000000" scalingFactor={2} />
      </Wrapper>
      <Wrapper>
        <LinkedinIcon color="#000000" scalingFactor={2} />
      </Wrapper>
    </div>
  )),
)
