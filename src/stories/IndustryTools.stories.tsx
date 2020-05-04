import React from 'react'
import {
  JiraIcon,
  GithubIndustryIcon,
  BitbucketIcon,
  ConfluenceIcon,
  GoogleAnalyticsIcon,
  GoogleCloudIcon,
  AWSIcon,
  InvisionIndustryIcon,
  SlackIcon,
  MicrosoftIcon,
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
    <JiraIcon color="red" scalingFactor={1} />
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
        <JiraIcon scalingFactor={1} color="#000000" />
      </Wrapper>
      <Wrapper>
        <GithubIndustryIcon scalingFactor={1} color="#000000" />
      </Wrapper>
      <Wrapper>
        <BitbucketIcon scalingFactor={1} color="#000000" />
      </Wrapper>
      <Wrapper>
        <ConfluenceIcon scalingFactor={1} color="#000000" />
      </Wrapper>
      <Wrapper>
        <GoogleAnalyticsIcon scalingFactor={1} color="#000000" />
      </Wrapper>
      <Wrapper>
        <GoogleCloudIcon scalingFactor={1} color="#000000" />
      </Wrapper>
      <Wrapper>
        <AWSIcon scalingFactor={1} color="#000000" />
      </Wrapper>
      <Wrapper>
        <InvisionIndustryIcon scalingFactor={1} color="#000000" />
      </Wrapper>
      <Wrapper>
        <SlackIcon scalingFactor={1} color="#000000" />
      </Wrapper>
      <Wrapper>
        <MicrosoftIcon scalingFactor={1} color="#000000" />
      </Wrapper>
    </div>
  )),
)
