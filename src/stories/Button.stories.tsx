import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '../components/Button'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
const stories = storiesOf('Components', module)
export const FontOverride = () => (
  <div>
    <Button fontOverride="1rem" onClick={action('clicked')}>
      1rem
    </Button>
    <Button fontOverride="2rem" onClick={action('clicked')}>
      2rem
    </Button>
    <Button fontOverride="3rem" onClick={action('clicked')}>
      3rem
    </Button>
  </div>
)
stories.add(
  'Buttons',
  withInfo({
    styles: {
      header: {
        h1: {
          marginRight: '20px',
          fontSize: '25px',
          display: 'inline',
        },
        body: {
          paddingTop: 0,
          paddingBottom: 0,
        },
        h2: {
          display: 'inline',
          color: '#999',
        },
      },
      infoBody: {
        backgroundColor: '#eee',
        padding: '0px 5px',
        lineHeight: '2',
      },
    },
    text: `
    Default Button Usage:
    ~~~jsx
    <Button>Default Button </Button>
    ~~~
      | Props        | Description             | Type    |
      |--------------|-------------------------|---------|
      | primary      | button type             | boolean |
      | transparent  | transparent background  | boolean |
      | fontOverride | pass custom font config | string  |
    `,
    inline: true,
    source: true,
  })(() => (
    <div>
      <Button onClick={action('clicked')}>Default Button</Button>
      <Button primary onClick={action('clicked')}>
        Primary Button
      </Button>
      <br></br>
      <Button primary onClick={action('clicked')}>
        Primary Button
      </Button>
      <br></br>
      <Button transparent onClick={action('clicked')}>
        Transparent Background
      </Button>
      <br></br>
      <FontOverride />
    </div>
  )),
)

