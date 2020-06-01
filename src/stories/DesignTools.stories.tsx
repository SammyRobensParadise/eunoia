import React from 'react'
import {
  PhotoshopIcon,
  IllustratorIcon,
  ExperienceDesignerIcon,
  FigmaIcon,
  SketchIcon,
  InvisionIcon,
  AftereffectsIcon,
  IndesignIcon,
  MaterialDesignIcon,
  CreativecloudIcon,
} from '../components/DesignTools'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { styleConfig } from '../utils/config'

const stories = storiesOf('Components', module)
const styles = styleConfig.styles

stories.add(
  'Design Icons',
  withInfo({
    styles,
    text: `
    Default Iconn Usage:
    ~~~jsx
    <PhotoshopIcon scalingFactor={1} color="red" />
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
      <PhotoshopIcon scalingFactor={1} name="Photoshop" font="Helvetica Neue" color="#000000" />
      <IllustratorIcon scalingFactor={1} color="#000000" />
      <ExperienceDesignerIcon scalingFactor={1} color="#000000" />
      <FigmaIcon scalingFactor={1} color="#000000" />
      <SketchIcon scalingFactor={1} color="#000000" />
      <InvisionIcon scalingFactor={1} color="#000000" />
      <AftereffectsIcon scalingFactor={1} color="#000000" />
      <IndesignIcon scalingFactor={1} color="#000000" />
      <MaterialDesignIcon scalingFactor={1} color="#000000" />
      <CreativecloudIcon scalingFactor={1} color="#000000" />
    </div>
  )),
)
