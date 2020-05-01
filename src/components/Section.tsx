import { UIStyle } from '../constants/constants'
import styled from 'styled-components'

interface SectionHeaderProps {
  config: {
    shouldRender: boolean | undefined
    text?: string
    centerText?: boolean | undefined
    fontOverride?: string | undefined
    fontColor?: string | undefined
    fontSize?: number | undefined
    height?: number | undefined
    backgroundColor?: string | undefined
  }
}

export const SectionHeader = styled.div<SectionHeaderProps>`
  width: auto;
  height: ${(p) => (p.config.height ? `${p.config.height}px` : '220px')};
  background-color: ${(p) => (p.config.backgroundColor ? p.config.backgroundColor : 'none')};
  color: ${(p) => (p.config.fontColor ? p.config.fontColor : UIStyle.UIColors.black)};
  text-align: ${(p) => (p.config.centerText ? 'center' : 'left')};
  font-family: ${(p) => (p.config.fontOverride ? p.config.fontOverride : 'Arial')};
  text-decoration: none;
  font-size: ${(p) => (p.config.fontSize ? `${p.config.fontSize}px` : '50px')};
  @media screen and (max-width: 800px) {
    height: ${(p) => (p.config.height ? `${p.config.height - 80}px` : '170px')};
  }
  @media screen and (max-width: 400px) {
    font-size: ${(p) =>
      p.config.fontSize
        ? `${p.config.fontSize - 40 < 18 ? 18 : p.config.fontSize - 40}px`
        : '50px'};
    height: ${(p) => (p.config.height ? `${p.config.height - 100}px` : '170px')};
  }
`
