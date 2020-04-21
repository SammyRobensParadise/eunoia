import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '../components/Button'
import { CircleButton } from '../components/CircleButton'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

// untils
import { styleConfig } from '../utils/config'

const stories = storiesOf('Components', module)
const styles = styleConfig.styles
stories.add(
  'Buttons',
  withInfo({
    styles,
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
      <Button fontOverride="1rem" onClick={action('clicked')}>
        1rem
      </Button>
      <Button fontOverride="2rem" onClick={action('clicked')}>
        2rem
      </Button>
      <Button fontOverride="3rem" onClick={action('clicked')}>
        3rem
      </Button>
      <br></br>
      <CircleButton />
      <CircleButton transparent />
      <CircleButton blackFont transparent />
      <CircleButton blackFont />
      <br></br>
      <CircleButton height={'1rem'} />
      <CircleButton height={'2rem'} />
      <CircleButton height={'4rem'} />
      <CircleButton height={'6rem'} />
    </div>
  )),
)