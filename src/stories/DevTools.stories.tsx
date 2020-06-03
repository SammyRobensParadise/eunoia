import React from 'react'
import {
  ReactIcon,
  PythonIcon,
  WebpackIcon,
  NodeIcon,
  JSIcon,
  PHPIcon,
  GitLargeIcon,
  JenkinsIcon,
  K8sIcon,
  DockerIcon,
  SassIcon,
  CssIcon,
  HtmlIcon,
  YarnIcon,
  NpmIcon,
  UbuntuIcon,
  MySQLIcon,
  JQueryIcon,
  FirebaseIcon,
  CppIcon,
  TsIcon,
} from '../components/DevTools'
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
  'Development Icons',
  withInfo({
    styles,
    text: `
    Default Icon Usage:
    ~~~jsx
    <ReactIcon color="red" name="React.js" font="Helvetica Neue" scalingFactor={1} />
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
        <ReactIcon scalingFactor={1} name="React.js" font="Helvetica Neue" color="#000000" />
      </Wrapper>
      <Wrapper>
        <PythonIcon scalingFactor={1} name="Python" font="Helvetica Neue" color="#000000" />
      </Wrapper>
      <Wrapper>
        <WebpackIcon scalingFactor={1} name="Webpack" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <NodeIcon scalingFactor={1} name="Node.js" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <PHPIcon scalingFactor={1} name="PHP" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <JSIcon scalingFactor={1} name="JavaScipt" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <GitLargeIcon scalingFactor={1} name="Git" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <JenkinsIcon scalingFactor={1} name="Jenkins" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <K8sIcon scalingFactor={1} name="Kubernetes" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <DockerIcon scalingFactor={1} name="Docker" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <SassIcon scalingFactor={1} name="Sass" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <CssIcon scalingFactor={1} name="CSS" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <HtmlIcon scalingFactor={1} name="HTML" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <YarnIcon scalingFactor={1} name="Yarn" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <NpmIcon scalingFactor={1} name="NPM" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <UbuntuIcon scalingFactor={1} name="Ubuntu" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <MySQLIcon scalingFactor={1} name="MS SQL Server" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <FirebaseIcon scalingFactor={1} name="Firebase" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <JQueryIcon scalingFactor={1} name="JQuery" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <CppIcon scalingFactor={1} name="C++" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
      <Wrapper>
        <TsIcon scalingFactor={1} name="TypeScript" font="Helvetica Neue"  color="#000000" />
      </Wrapper>
    </div>
  )),
)
