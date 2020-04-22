import React from 'react'
import { UIStyle } from '../constants/constants'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { styleConfig } from '../utils/config'
import styled from 'styled-components'
const stories = storiesOf('Components', module)
const styles = styleConfig.styles

interface DisplaySquareProps {
  color?: string
  shadow?: string
}
const DisplaySquare = styled.div<DisplaySquareProps>`
  padding: 2rem;
  display: inline-block;
  width: 6rem;
  height: 6rem;
  background: ${(p) => (p.color ? p.color : UIStyle.UIColors.white)};
  box-shadow: ${(p) => (p.shadow ? p.shadow : 'none')};
  border-radius: 0.75rem;
  margin: 1rem;
  color: ${(p) =>
    p.color === UIStyle.UIColors.white ? UIStyle.UIColors.black : UIStyle.UIColors.white};
  text-align: center;
  line-height: 6rem;
`
stories.add(
  'Colors',
  withInfo({
    styles,
    text: `
    Default Iconn Usage:
    ~~~jsx
    import { UIColors }from "eunoia"
    /*
    .
    .
    .
    */

    const { UIColors } = UIStyle;
    // or
    let color = UIStyle.UIColors.gold
    ~~~
    The constants are structured as constants of a UIStyle object
    `,
    inline: true,
    source: false,
  })(() => (
    <div>
      <DisplaySquare color={UIStyle.UIColors.white}>{UIStyle.UIColors.white}</DisplaySquare>
      <DisplaySquare color={UIStyle.UIColors.black}>{UIStyle.UIColors.black}</DisplaySquare>
      <DisplaySquare color={UIStyle.UIColors.darkGrey}>{UIStyle.UIColors.darkGrey}</DisplaySquare>
      <DisplaySquare color={UIStyle.UIColors.mediumGrey}>
        {UIStyle.UIColors.mediumGrey}
      </DisplaySquare>
      <DisplaySquare color={UIStyle.UIColors.lightGrey}>{UIStyle.UIColors.lightGrey}</DisplaySquare>
      <DisplaySquare color={UIStyle.UIColors.gold}>{UIStyle.UIColors.gold}</DisplaySquare>
    </div>
  )),
)
