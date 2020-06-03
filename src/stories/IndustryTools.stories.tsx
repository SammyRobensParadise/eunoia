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
    <JiraIcon color="red" name="Jira" font="Helvetica Neue" scalingFactor={1} />
    ~~~
      | Props          | Description             | Type    |
      |----------------|-------------------------|---------|
      | color          |   color                 | string  |
      | scaling factor | transparent background  | number  |
      | name           | name of icon            | string  |
      | font           | font of name            | string  |
    `,
    inline: true,
    source: true,
  })(() => (
    <div>
      <Wrapper>
        <JiraIcon scalingFactor={1} name="Jira" font="Helvetica Neue" color="#000000" />
      </Wrapper>
      <Wrapper>
        <GithubIndustryIcon scalingFactor={1} name="Github" font="Helvetica Neue" color="#000000" />
      </Wrapper>
      <Wrapper>
        <BitbucketIcon scalingFactor={1} name="Bit Bucket" font="Helvetica Neue" color="#000000" />
      </Wrapper>
      <Wrapper>
        <ConfluenceIcon scalingFactor={1} name="Confluence" font="Helvetica Neue" color="#000000" />
      </Wrapper>
      <Wrapper>
        <GoogleAnalyticsIcon
          scalingFactor={1}
          name="Google Analytics"
          font="Helvetica Neue"
          color="#000000"
        />
      </Wrapper>
      <Wrapper>
        <GoogleCloudIcon
          scalingFactor={1}
          name="Google Cloud"
          font="Helvetica Neue"
          color="#000000"
        />
      </Wrapper>
      <Wrapper>
        <AWSIcon scalingFactor={1} name="Amazon Web Services" font="Helvetica Neue" color="#000000" />
      </Wrapper>
      <Wrapper>
        <InvisionIndustryIcon
          name="Invision"
          font="Helvetica Neue"
          scalingFactor={1}
          color="#000000"
        />
      </Wrapper>
      <Wrapper>
        <SlackIcon scalingFactor={1} name="Slack" font="Helvetica Neue" color="#000000" />
      </Wrapper>
      <Wrapper>
        <MicrosoftIcon scalingFactor={1} name="Microsoft .NET" font="Helvetica Neue" color="#000000" />
      </Wrapper>
    </div>
  )),
)
