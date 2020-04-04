import React from 'react'
import { RightArrow, LeftArrow, DownArrow, UpArrow, DribbbleIcon } from '../components/Icons'
export default {
  title: 'Icons',
}
export const Right_Arrow = () => <RightArrow scalingFactor={2} color="#000000" />
export const Left_Arrow = () => <LeftArrow scalingFactor={2} color="#000000" />
export const Down_Arrow = () => <DownArrow scalingFactor={2} color="#000000" />
export const Up_Arrow = () => <UpArrow scalingFactor={2} color="#000000" />
export const Dribbble_Icon = () => <DribbbleIcon offset={'0px'} color="#000000" scalingFactor={1} />
