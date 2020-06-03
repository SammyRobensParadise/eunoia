import React from 'react'
import styled from 'styled-components'
import { UIStyle } from '../constants'

type PhotoshopIconProps = {
  color: string
  scalingFactor: number
  name?: string
  font?: string
}

type IllustratorIconProps = {
  color: string
  scalingFactor: number
  name?: string
  font?: string
}

type ExperienceDesignerProps = {
  color: string
  scalingFactor: number
  name?: string
  font?: string
}

type FigmaIconProps = {
  color: string
  scalingFactor: number
  name?: string
  font?: string
}

type SketchIconProps = {
  color: string
  scalingFactor: number
  name?: string
  font?: string
}

type InvisionIconProps = {
  color: string
  scalingFactor: number
  name?: string
  font?: string
}

type AftereffectsIconProps = {
  color: string
  scalingFactor: number
  name?: string
  font?: string
}

type IndesignIconProps = {
  color: string
  scalingFactor: number
  name?: string
  font?: string
}

type MaterialDesignIconProps = {
  color: string
  scalingFactor: number
  name?: string
  font?: string
}

type CreativecloudIconProps = {
  color: string
  scalingFactor: number
  name?: string
  font?: string
}

type HoverNameProps = {
  initialWidth: number
  initialHeight: number
  color?: string
  textColor?: string
  scalingFactor: number
  font?: string
}

const HoverName = styled.div<HoverNameProps>`
  opacity: 0;
  display: initial;
  width: ${(p) =>
    p.scalingFactor && p.initialWidth ? `${p.scalingFactor * p.initialWidth}px` : `150px`};
  height: ${(p) =>
    p.scalingFactor && p.initialHeight ? `${p.scalingFactor * p.initialHeight}px` : `150px`};
  color: ${(p) => (p.textColor ? p.textColor : UIStyle.UIColors.white)};
  background-color: ${(p) => (p.color ? p.color : UIStyle.UIColors.black)};
  position: absolute;
  font-size: 18px;
  line-height: ${(p) => `${p.initialHeight * p.scalingFactor - 10}px`};
  font-family: ${(p) => (p.font ? p.font : 'Arial')};
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover,
  :focus {
    opacity: 1;
  }
`

export const PhotoshopIcon = ({ color, scalingFactor, name, font }: PhotoshopIconProps) => (
  <div>
    {name ? (
      <HoverName
        initialWidth={153.846}
        initialHeight={150}
        scalingFactor={scalingFactor}
        color={color}
        textColor={UIStyle.UIColors.white}
        font={font}
      >
        {name}
      </HoverName>
    ) : null}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${scalingFactor ? 153.846 * scalingFactor : 153.846}`}
      height={`${scalingFactor ? 150 * scalingFactor : 150}`}
      viewBox="0 0 153.846 150"
    >
      <path
        id="Icon_simple-adobephotoshop"
        data-name="Icon simple-adobephotoshop"
        d="M0,.45v150H153.846V.45ZM6.41,6.86H147.436V144.04H6.41ZM37.179,35.578c0-.429.9-.744,1.436-.744,4.128-.212,10.179-.321,16.526-.321,17.769,0,24.679,9.744,24.679,22.218C79.821,73.014,68.013,80,53.526,80c-2.436,0-3.269-.109-4.968-.109v24.628c0,.532-.212.744-.737.744h-9.9c-.532,0-.737-.192-.737-.724V35.578ZM48.558,69.629c1.474.1,2.641.1,5.192.1,7.5,0,14.551-2.641,14.551-12.795,0-8.141-5.038-12.269-13.6-12.269-2.538,0-4.968.1-6.135.212V69.649Zm55.173-7.615c-5.077,0-6.769,2.538-6.769,4.654,0,2.327,1.154,3.91,7.929,7.4,10.051,4.872,13.218,9.519,13.218,16.391,0,10.256-7.821,15.769-18.4,15.769-5.615,0-10.385-1.173-13.141-2.756-.417-.212-.513-.526-.513-1.058v-9.4c0-.641.308-.853.731-.538a23.615,23.615,0,0,0,12.9,3.808c5.077,0,7.192-2.115,7.192-4.974,0-2.327-1.474-4.34-7.929-7.724-9.1-4.359-12.91-8.782-12.91-16.2,0-8.25,6.449-15.128,17.66-15.128,5.513,0,9.385.846,11.5,1.795a1.4,1.4,0,0,1,.641,1.269V64.1c0,.532-.321.853-.962.641a22.956,22.956,0,0,0-11.173-2.756Z"
        transform="translate(0 -0.45)"
        fill={color}
      />
    </svg>
  </div>
)
export const IllustratorIcon = ({ color, scalingFactor, name, font }: IllustratorIconProps) => (
  <div>
    {name ? (
      <HoverName
        initialWidth={153.846}
        initialHeight={150}
        scalingFactor={scalingFactor}
        color={color}
        textColor={UIStyle.UIColors.white}
        font={font}
      >
        {name}
      </HoverName>
    ) : null}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${scalingFactor ? 153.846 * scalingFactor : 153.846}`}
      height={`${scalingFactor ? 150 * scalingFactor : 150}`}
      viewBox="0 0 153.846 150"
    >
      <path
        id="Icon_simple-adobeillustrator"
        data-name="Icon simple-adobeillustrator"
        d="M0,.45v150H153.846V.45ZM6.41,6.86H147.436V144.04H6.41ZM53.365,85.386,48.288,104.6c-.109.532-.321.654-.949.654h-9.41c-.641,0-.737-.212-.641-.949l18.205-63.75a19.774,19.774,0,0,0,.628-5.34c0-.423.212-.641.532-.641H70.09c.423,0,.641.115.744.641L91.25,104.412c.109.532,0,.846-.532.846H80.141c-.532,0-.846-.128-.949-.551L73.9,85.379H53.346ZM71.237,74.969c-1.795-7.09-6.026-22.615-7.615-30.128h-.109c-1.372,7.5-4.756,20.192-7.4,30.128Zm28.846-35.628a6.558,6.558,0,1,1,13.115,0c0,4.231-2.756,6.558-6.667,6.558-3.846,0-6.474-2.327-6.474-6.558Zm.718,14.577c0-.513.212-.705.744-.705h10.064c.564,0,.769.212.769.744v50.609c0,.532-.1.744-.737.744h-9.936c-.641,0-.853-.321-.853-.833V53.912Z"
        transform="translate(0 -0.45)"
        fill={color}
      />
    </svg>
  </div>
)
export const ExperienceDesignerIcon = ({
  color,
  scalingFactor,
  name,
  font,
}: ExperienceDesignerProps) => (
  <div>
    {name ? (
      <HoverName
        initialWidth={153.846}
        initialHeight={150}
        scalingFactor={scalingFactor}
        color={color}
        textColor={UIStyle.UIColors.white}
        font={font}
      >
        {name}
      </HoverName>
    ) : null}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${scalingFactor ? 153.846 * scalingFactor : 153.846}`}
      height={`${scalingFactor ? 150 * scalingFactor : 150}`}
      viewBox="0 0 153.846 150"
    >
      <path
        id="Icon_simple-adobexd"
        data-name="Icon simple-adobexd"
        d="M126.6.45H27.244A27.221,27.221,0,0,0,0,27.694v95.513A27.221,27.221,0,0,0,27.244,150.45H126.6a27.221,27.221,0,0,0,27.244-27.244V27.694A27.221,27.221,0,0,0,126.6.45Zm20.769,120.256a23.224,23.224,0,0,1-23.205,23.333H29.679A23.309,23.309,0,0,1,6.41,120.771V30.129A23.309,23.309,0,0,1,29.679,6.86H124.1a23.269,23.269,0,0,1,23.269,23.269ZM60.833,70.642l17.949,34.487c.321.513.128,1.026-.385,1.026H67.244a1.258,1.258,0,0,1-1.346-.833C61.795,96.86,57.628,88.4,53.333,79.3h-.128c-3.846,8.59-8.077,17.628-12.179,26.09a1.231,1.231,0,0,1-1.154.705H29.295c-.641,0-.705-.513-.385-.9L46.474,71.732,29.487,37.886a.518.518,0,0,1,.385-.9H40.9a1.01,1.01,0,0,1,1.154.705C46.09,46.155,50.192,54.873,54.038,63.4h.128c3.718-8.462,7.821-17.244,11.795-25.641.321-.513.513-.833,1.154-.833H77.436c.513,0,.705.385.385.9Zm21.09,10.449c0-14.936,9.936-26.6,25.705-26.6a28.426,28.426,0,0,1,3.333.128V37.629a.642.642,0,0,1,.641-.641h10.128c.513,0,.641.192.641.513V96.347a45.658,45.658,0,0,0,.321,6.282c0,.385-.128.513-.513.705a38.184,38.184,0,0,1-16.41,3.718C91.859,107.117,81.923,98.527,81.923,81.091Zm29.038-16.41a9.694,9.694,0,0,0-3.718-.641c-8.077,0-13.718,6.218-13.718,16.538,0,11.795,5.769,16.538,13.013,16.538a12.094,12.094,0,0,0,4.423-.705V64.681Z"
        transform="translate(0 -0.45)"
        fill={color}
      />
    </svg>
  </div>
)
export const FigmaIcon = ({ color, scalingFactor, name, font }: FigmaIconProps) => (
  <div>
    {name ? (
      <HoverName
        initialWidth={100}
        initialHeight={150}
        scalingFactor={scalingFactor}
        color={color}
        textColor={UIStyle.UIColors.white}
        font={font}
      >
        {name}
      </HoverName>
    ) : null}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${scalingFactor ? 100 * scalingFactor : 100}`}
      height={`${scalingFactor ? 150 * scalingFactor : 150}`}
      viewBox="0 0 100 150"
    >
      <path
        id="Icon_simple-figma"
        data-name="Icon simple-figma"
        d="M56,75a25,25,0,1,1,25,25A25,25,0,0,1,56,75ZM6,125a25,25,0,0,1,25-25H56v25a25,25,0,1,1-50,0ZM56,0V50H81A25,25,0,0,0,81,0ZM6,25A25,25,0,0,0,31,50H56V0H31A25,25,0,0,0,6,25ZM6,75a25,25,0,0,0,25,25H56V50H31A25,25,0,0,0,6,75Z"
        transform="translate(-6)"
        fill={color}
      />
    </svg>
  </div>
)

export const SketchIcon = ({ color, scalingFactor, name, font }: SketchIconProps) => (
  <div>
    {name ? (
      <HoverName
        initialWidth={165.502}
        initialHeight={150}
        scalingFactor={scalingFactor}
        color={color}
        textColor={UIStyle.UIColors.white}
        font={font}
      >
        {name}
      </HoverName>
    ) : null}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${scalingFactor ? 165.502 * scalingFactor : 165.502}`}
      height={`${scalingFactor ? 150 * scalingFactor : 150}`}
      viewBox="0 0 165.502 150"
    >
      <path
        id="Icon_awesome-sketch"
        data-name="Icon awesome-sketch"
        d="M6.827,45.844.633,54.181h30.3l2.31-43.761ZM130.309,6.837,87.251,2.25l45.435,49.286-2.377-44.7ZM35.186,64.627l-3.75-7.366H.934l75.3,87.623Zm.67-10.446h95.089L103.657,24.549,83.434,2.585ZM135.4,57.228,90.566,144.884l75.268-87.623H135.4ZM136.7,14.638l-3.147-4.219.3,5.792L135.9,54.181h30.234Zm-101.083,8.2L34.081,51.5,79.55,2.25,36.492,6.837ZM131.95,57.228h-97.1l14.2,27.757L83.434,152.25Z"
        transform="translate(-0.633 -2.25)"
        fill={color}
      />
    </svg>
  </div>
)

export const InvisionIcon = ({ color, scalingFactor, name, font }: InvisionIconProps) => (
  <div>
    {name ? (
      <HoverName
        initialWidth={150}
        initialHeight={150}
        scalingFactor={scalingFactor}
        color={color}
        textColor={UIStyle.UIColors.white}
        font={font}
      >
        {name}
      </HoverName>
    ) : null}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${scalingFactor ? 150 * scalingFactor : 150}`}
      height={`${scalingFactor ? 150 * scalingFactor : 150}`}
      viewBox="0 0 150 150"
    >
      <path
        id="Icon_simple-invision"
        data-name="Icon simple-invision"
        d="M136.406,0H13.594A13.6,13.6,0,0,0,0,13.594V136.406A13.6,13.6,0,0,0,13.594,150H136.406A13.6,13.6,0,0,0,150,136.406V13.594A13.6,13.6,0,0,0,136.406,0ZM50.125,29.169a9.014,9.014,0,1,1,0,18.025v.169a9.094,9.094,0,0,1,.006-18.187Zm61.35,86.344c-9.275,0-13.775-5.531-13.775-13.062a24.364,24.364,0,0,1,.938-6.75l4.438-15.906a15.846,15.846,0,0,0,.688-4.844c0-5.125-3.125-8.219-8.1-8.219-6.331,0-10.5,4.544-12.656,13.312l-8.625,34.594H59.294l2.7-10.875c-4.425,7.287-10.594,11.781-18.187,11.781-9.169,0-13.481-5.262-13.481-13.206a31.335,31.335,0,0,1,.813-6.781v.013l6.875-28.062H27.344L30.581,55.6H56.206L46.081,95.631a26.254,26.254,0,0,0-.937,6.162c0,2.563,1.263,3.313,3.231,3.775,1.219.25,10.781.075,16-11.5L71,67.506H60.231l3.25-11.719h23.25l-3,13.5c4.044-7.5,12.106-14.719,20.075-14.719,8.438,0,15.469,6.094,15.469,17.625a32.874,32.874,0,0,1-1.5,9.844l-4.312,15.475a18.521,18.521,0,0,0-.65,4.125c0,2.713,1.125,4.031,3.087,4.031s4.594-1.5,7.5-9.75l5.894,2.25c-3.469,12.275-9.85,17.338-17.812,17.338Z"
        fill={color}
      />
    </svg>
  </div>
)

export const AftereffectsIcon = ({ color, scalingFactor, name, font }: AftereffectsIconProps) => (
  <div>
    {name ? (
      <HoverName
        initialWidth={153.846}
        initialHeight={150}
        scalingFactor={scalingFactor}
        color={color}
        textColor={UIStyle.UIColors.white}
        font={font}
      >
        {name}
      </HoverName>
    ) : null}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${scalingFactor ? 153.846 * scalingFactor : 153.846}`}
      height={`${scalingFactor ? 150 * scalingFactor : 150}`}
      viewBox="0 0 153.846 150"
    >
      <path
        id="Icon_simple-adobeaftereffects"
        data-name="Icon simple-adobeaftereffects"
        d="M0,.45v150H153.846V.45ZM6.41,6.86H147.436V144.04H6.41ZM43.487,85.386,38.41,104.527c-.109.532-.321.724-.949.724h-9.41c-.641,0-.744-.224-.641-.962L45.615,40.617a18.974,18.974,0,0,0,.628-5.256c0-.423.212-.641.532-.641H60.212c.423,0,.641.115.744.641l20.4,69.038c.1.526,0,.833-.532.833H70.25c-.526,0-.833-.192-.942-.615L64.019,85.373H43.506Zm17.987-10.41c-1.795-7.09-6.154-22.628-7.731-30.128h-.1c-1.372,7.5-4.846,20.179-7.5,30.128ZM95.833,81.54c.109,8.673,4.231,14.487,13.962,14.487a24.753,24.753,0,0,0,10.449-1.987c.429-.205.75-.1.75.429v8.038a1.4,1.4,0,0,1-.641,1.282c-3.378,1.692-7.59,2.436-12.885,2.436-16.923,0-23.269-12.481-23.269-26.442,0-15.128,7.833-27.5,21.583-27.5,13.962,0,18.827,11.75,18.827,21.263a31.243,31.243,0,0,1-.545,6.776.891.891,0,0,1-.846.814,90.438,90.438,0,0,1-10.686.423h-16.7Zm13.013-8.814a35.457,35.457,0,0,0,4.756-.1c0-.436.109-.8.109-1.115,0-3.494-1.705-9.9-8.372-9.9-6.135,0-8.782,5.4-9.41,11.1h12.9Z"
        transform="translate(0 -0.45)"
        fill={color}
      />
    </svg>
  </div>
)

export const IndesignIcon = ({ color, scalingFactor, name, font }: IndesignIconProps) => (
  <div>
    {name ? (
      <HoverName
        initialWidth={153.846}
        initialHeight={150}
        scalingFactor={scalingFactor}
        color={color}
        textColor={UIStyle.UIColors.white}
        font={font}
      >
        {name}
      </HoverName>
    ) : null}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${scalingFactor ? 153.846 * scalingFactor : 153.846}`}
      height={`${scalingFactor ? 150 * scalingFactor : 150}`}
      viewBox="0 0 153.846 150"
    >
      <path
        id="Icon_simple-adobeindesign"
        data-name="Icon simple-adobeindesign"
        d="M0,.45v150H153.846V.45ZM6.41,6.86H147.436V144.04H6.41Zm49.84,97.551c0,.641-.109.846-.846.846H45.558c-.641,0-.846-.321-.846-.846V35.591c0-.641.321-.846.846-.846h9.955c.526,0,.737.212.737.744v68.923ZM67.6,79.591C67.6,64.251,77.712,52.3,93.891,52.3c1.372,0,2.115,0,3.385.1V35.386a.618.618,0,0,1,.641-.641h10.417c.538,0,.641.218.641.538V95.251a47.747,47.747,0,0,0,.321,6.436c0,.423-.128.532-.558.744a38.866,38.866,0,0,1-16.821,3.814c-14.186,0-24.34-8.782-24.34-26.654ZM97.276,62.771a9.5,9.5,0,0,0-3.808-.641c-8.237,0-14.019,6.346-14.019,16.923,0,12.064,5.885,16.923,13.288,16.923a12.406,12.406,0,0,0,4.551-.737V62.771Z"
        transform="translate(0 -0.45)"
        fill={color}
      />
    </svg>
  </div>
)

export const MaterialDesignIcon = ({
  color,
  scalingFactor,
  name,
  font,
}: MaterialDesignIconProps) => (
  <div>
    {name ? (
      <HoverName
        initialWidth={150}
        initialHeight={150}
        scalingFactor={scalingFactor}
        color={color}
        textColor={UIStyle.UIColors.white}
        font={font}
      >
        {name}
      </HoverName>
    ) : null}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${scalingFactor ? 150 * scalingFactor : 150}`}
      height={`${scalingFactor ? 150 * scalingFactor : 150}`}
      viewBox="0 0 150 150"
    >
      <path
        id="Icon_simple-materialdesign"
        data-name="Icon simple-materialdesign"
        d="M75,0a75,75,0,1,0,75,75A75.035,75.035,0,0,0,75,0Zm0,4.688A69.973,69.973,0,0,1,121.681,22.5H28.313A69.981,69.981,0,0,1,75,4.688Zm-44.913,22.5h89.825L75,117.019,30.087,27.188ZM22.5,28.313v93.375a70.075,70.075,0,0,1,0-93.362Zm105,0a70.083,70.083,0,0,1,0,93.369ZM27.188,31.875l45.469,90.938H27.188Zm95.625,0v90.938H77.344l45.475-90.937ZM28.331,127.5h93.35a70.067,70.067,0,0,1-93.356,0Z"
        fill={color}
      />
    </svg>
  </div>
)

export const CreativecloudIcon = ({ color, scalingFactor, name, font }: CreativecloudIconProps) => (
  <div>
    {name ? (
      <HoverName
        initialWidth={200}
        initialHeight={150}
        scalingFactor={scalingFactor}
        color={color}
        textColor={UIStyle.UIColors.white}
        font={font}
      >
        {name}
      </HoverName>
    ) : null}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${scalingFactor ? 200 * scalingFactor : 200}`}
      height={`${scalingFactor ? 150 * scalingFactor : 150}`}
      viewBox="0 0 200 150"
    >
      <path
        id="Icon_simple-adobecreativecloud"
        data-name="Icon simple-adobecreativecloud"
        d="M200,76.158V82.85c-.067.367-.142.725-.183,1.083-.333,2.917-.558,5.842-1.033,8.733a72.192,72.192,0,0,1-9.8,26.2,73.734,73.734,0,0,1-30.375,28,70.183,70.183,0,0,1-23.433,7.025c-1.808.217-3.625.408-5.433.608H59.483c-.358-.067-.708-.167-1.067-.2a59.1,59.1,0,0,1-20.4-4.983A62.693,62.693,0,0,1,6.425,118.783,60.817,60.817,0,0,1,.592,99.033L0,94.017v-6.5a9.505,9.505,0,0,0,.192-1.083A60.717,60.717,0,0,1,4.033,68.308a62.955,62.955,0,0,1,31.15-34.825,60.225,60.225,0,0,1,24.4-6.417,66.65,66.65,0,0,1,12.525.592,1.567,1.567,0,0,0,1.183-.392A74.15,74.15,0,0,1,93.775,12.183a70.775,70.775,0,0,1,23.542-7.067c1.95-.225,3.892-.417,5.833-.617h6c.383.058.783.133,1.167.175,2.975.358,5.958.583,8.9,1.083a69.75,69.75,0,0,1,25.608,9.883,74.083,74.083,0,0,1,27.658,30.942,73,73,0,0,1,6.917,23.85c.217,1.908.4,3.817.6,5.725M88.167,32.825c.125.167.158.242.208.267a80.265,80.265,0,0,1,11.75,7.225,1.237,1.237,0,0,0,1.1-.083,45.653,45.653,0,0,1,61.392,10.75,44.936,44.936,0,0,1,9.05,36.167,46.791,46.791,0,0,1-11.083,23.842c-11,12.333-24.775,17.433-40.983,15.275a43.038,43.038,0,0,1-25.717-13.033c-9.15-9.4-18.367-18.733-27.542-28.108A7.427,7.427,0,0,0,62,82.65a6.883,6.883,0,0,0-7.2,4,6.539,6.539,0,0,0,1.542,7.9c10.225,10.217,20.367,20.517,30.583,30.75a50.209,50.209,0,0,0,5.617,4.85,53.2,53.2,0,0,0,25,9.783,59.322,59.322,0,0,0,54.625-21.658A60.108,60.108,0,0,0,185.3,87.692a60.942,60.942,0,0,0-.542-19.667,58.88,58.88,0,0,0-13.5-28.142c-13.483-15.383-30.442-22.25-50.617-20.725a55.533,55.533,0,0,0-22.008,6.583,58.016,58.016,0,0,0-10.458,7.083M83.233,140.25q-.418-.39-.833-.783c-4.175-4.017-8.383-8-12.517-12.075a3.358,3.358,0,0,0-2.667-1.142,49.947,49.947,0,0,1-12.5-.833C34.208,120.708,22.3,98.033,29.858,78.083,35.817,62.342,52.325,52.767,68.6,55.717a33.727,33.727,0,0,1,18.95,9.975c6.417,6.733,13.017,13.267,19.5,19.925a5.771,5.771,0,0,0,5.208,1.917,6.563,6.563,0,0,0,5.692-4.3,6.434,6.434,0,0,0-1.442-7.033c-6.8-7-13.442-14.183-20.517-20.892-13.725-13.008-29.9-16.883-47.8-11.35C24.125,51.4,10.033,76.675,15.533,101.617c5.017,22.725,24.558,38.667,47.425,38.692H82.117c.317,0,.633-.033,1.117-.058"
        transform="translate(0 -4.5)"
        fill={color}
      />
    </svg>
  </div>
)
