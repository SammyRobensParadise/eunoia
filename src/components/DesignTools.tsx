import React from 'react'

type PhotoshopIconProps = {
  color: string
  scalingFactor: number
}

type IllustratorIconProps = {
  color: string
  scalingFactor: number
}

type ExperienceDesignerProps = {
  color: string
  scalingFactor: number
}

type FigmaIconProps = {
  color: string
  scalingFactor: number
}

type SketchIconProps = {
  color: string
  scalingFactor: number
}

export const PhotoshopIcon = ({ color, scalingFactor }: PhotoshopIconProps) => (
  <div>
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
export const IllustratorIcon = ({ color, scalingFactor }: IllustratorIconProps) => (
  <div>
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
export const ExperienceDesignerIcon = ({ color, scalingFactor }: ExperienceDesignerProps) => (
  <div>
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
export const FigmaIcon = ({ color, scalingFactor }: FigmaIconProps) => (
  <div>
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

export const SketchIcon = ({ color, scalingFactor }: SketchIconProps) => (
  <div>
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
