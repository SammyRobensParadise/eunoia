import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '../components/Button'

export default {
  title: 'Button',
  component: Button,
}
// stoires
export const Default = () => <Button onClick={action('clicked')}>Default Button</Button>
export const Primary = () => (
  <Button primary onClick={action('clicked')}>
    Primary Button
  </Button>
)
<<<<<<< HEAD
export const TransparentBackground = () => (
  <Button transparent onClick={action('clicked')}>
    Transparent Background
  </Button>
)
export const TransparentBackgroundBlackFont = () => (
  <Button transparent blackFont onClick={action('clicked')}>
    Transparent Background Black Font
  </Button>
=======
export const Background = () => (
  <div>
    <Button transparent onClick={action('clicked')}>
      Transparent Background
    </Button>
    <Button transparent blackFont onClick={action('clicked')}>
      Transparent Background Black Font
    </Button>
  </div>
)

export const CustomFont = () => (
  <div>
    <Button fontOverride={'0.5rem'} onClick={action('clicked')}>
      0.5rem
    </Button>
    <Button fontOverride={'1rem'} onClick={action('clicked')}>
      1rem
    </Button>
    <Button fontOverride={'2rem'} onClick={action('clicked')}>
      2rem
    </Button>
    <Button fontOverride={'3rem'} onClick={action('clicked')}>
      3rem
    </Button>
  </div>
>>>>>>> f386e26522776568222ad4fd8ec257b5d7bc8a94
)
