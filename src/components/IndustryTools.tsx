import React from 'react'
import styled from 'styled-components'
import { UIStyle } from '../constants'

type IconProps = {
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

export const JiraIcon = ({ color, scalingFactor, name, font }: IconProps) => (
  <div>
    {name ? (
      <HoverName
        initialWidth={145.069}
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
      width={`${scalingFactor ? 145.069 * scalingFactor : 145.069}`}
      height={`${scalingFactor ? 150 * scalingFactor : 150}`}
      viewBox="0 0 145.069 150"
    >
      <path
        id="Icon_simple-jira"
        data-name="Icon simple-jira"
        d="M143.9,70.813,79.384,6.25,73.128,0,24.534,48.594,2.316,70.813a6,6,0,0,0,0,8.419l44.394,44.394L73.128,150,121.7,101.431l.756-.756L143.9,79.231a5.906,5.906,0,0,0,0-8.419ZM73.128,97.194,50.934,75,73.128,52.831,95.3,75Z"
        transform="translate(-0.591)"
        fill={color}
      />
    </svg>
  </div>
)

export const GithubIndustryIcon = ({ color, scalingFactor, name, font }: IconProps) => (
  <div>
    {name ? (
      <HoverName
        initialWidth={153.808}
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
      width={`${scalingFactor ? 153.808 * scalingFactor : 153.808}`}
      height={`${scalingFactor ? 150 * scalingFactor : 150}`}
      viewBox="0 0 153.808 150"
    >
      <path
        id="Icon_simple-github"
        data-name="Icon simple-github"
        d="M76.9.446A76.908,76.908,0,0,0,52.583,150.313c3.845.724,5.255-1.653,5.255-3.7,0-1.826-.064-6.665-.1-13.074-21.392,4.64-25.9-10.318-25.9-10.318-3.5-8.876-8.556-11.247-8.556-11.247-6.966-4.768.538-4.672.538-4.672,7.722.538,11.779,7.921,11.779,7.921,6.857,11.76,18,8.363,22.4,6.4.692-4.973,2.672-8.363,4.871-10.286-17.079-1.923-35.03-8.536-35.03-38A29.669,29.669,0,0,1,35.754,52.7c-.865-1.942-3.461-9.76.673-20.354,0,0,6.441-2.064,21.149,7.883a72.505,72.505,0,0,1,38.452,0c14.612-9.946,21.053-7.883,21.053-7.883,4.134,10.594,1.538,18.412.769,20.354a29.791,29.791,0,0,1,7.883,20.636c0,29.544-17.976,36.049-35.088,37.939,2.692,2.307,5.191,7.024,5.191,14.227,0,10.292-.1,18.56-.1,21.059,0,2.019,1.346,4.422,5.287,3.653A76.81,76.81,0,0,0,76.9.445"
        transform="translate(0 -0.446)"
        fill={color}
      />
    </svg>
  </div>
)

export const BitbucketIcon = ({ color, scalingFactor, name, font }: IconProps) => (
  <div>
    {name ? (
      <HoverName
        initialWidth={166.859}
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
      width={`${scalingFactor ? 166.859 * scalingFactor : 166.859}`}
      height={`${scalingFactor ? 150 * scalingFactor : 150}`}
      viewBox="0 0 166.859 150"
    >
      <path
        id="Icon_simple-bitbucket"
        data-name="Icon simple-bitbucket"
        d="M5.409,1.817A5.341,5.341,0,0,0,0,7.087a5.207,5.207,0,0,0,.07.932L22.755,145.754a7.279,7.279,0,0,0,7.105,6.063H138.7a5.366,5.366,0,0,0,5.353-4.491L166.789,8.067a5.339,5.339,0,0,0-4.415-6.125,4.643,4.643,0,0,0-.925-.07Zm95.541,99.538H66.2L56.8,52.243h52.567Z"
        transform="translate(0 -1.816)"
        fill={color}
      />
    </svg>
  </div>
)

export const ConfluenceIcon = ({ color, scalingFactor, name, font }: IconProps) => (
  <div>
    {name ? (
      <HoverName
        initialWidth={153.715}
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
      width={`${scalingFactor ? 153.715 * scalingFactor : 153.715}`}
      height={`${scalingFactor ? 150 * scalingFactor : 150}`}
      viewBox="0 0 153.715 150"
    >
      <path
        id="Icon_simple-confluence"
        data-name="Icon simple-confluence"
        d="M5.574,115.511c-1.588,2.447-3.395,5.6-4.887,7.974a4.893,4.893,0,0,0,1.633,6.661l31.8,19.561a4.893,4.893,0,0,0,6.776-1.665c1.275-2.126,2.908-4.887,4.695-7.82,12.6-20.8,25.267-18.273,48.088-7.34l31.749,14.968a4.893,4.893,0,0,0,6.584-2.447l15.141-34.241a4.893,4.893,0,0,0-2.447-6.4q-15.934-7.488-31.8-15.122C69.885,68.838,33.46,70.215,5.574,115.511ZM148.153,35.36c1.595-2.594,3.4-5.6,4.893-8.006a4.893,4.893,0,0,0-1.64-6.623L119.613,1.164a4.893,4.893,0,0,0-6.776,1.665c-1.249,2.146-2.889,4.887-4.7,7.846-12.592,20.79-25.267,18.254-48.088,7.34L28.42,3.022a4.893,4.893,0,0,0-6.578,2.447L6.7,39.709a4.893,4.893,0,0,0,2.447,6.4c6.655,3.138,19.887,9.4,31.8,15.122,42.9,20.79,79.369,19.4,107.205-25.876Z"
        transform="translate(0 -0.435)"
        fill={color}
      />
    </svg>
  </div>
)

export const GoogleAnalyticsIcon = ({ color, scalingFactor, name, font }: IconProps) => (
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
        id="Icon_simple-googleanalytics"
        data-name="Icon simple-googleanalytics"
        d="M137.962,150H11.844A11.878,11.878,0,0,1,0,138.15V110.531a11.878,11.878,0,0,1,11.844-11.85H47.375V59.212A11.87,11.87,0,0,1,59.212,47.375H98.781V12.031A12.092,12.092,0,0,1,110.806,0h27.162A12.1,12.1,0,0,1,150,12.037V137.962A12.1,12.1,0,0,1,137.962,150Z"
        fill={color}
      />
    </svg>
  </div>
)

export const GoogleCloudIcon = ({ color, scalingFactor, name, font }: IconProps) => (
  <div>
    {name ? (
      <HoverName
        initialWidth={187.052}
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
      width={`${scalingFactor ? 187.052 * scalingFactor : 187.052}`}
      height={`${scalingFactor ? 150 * scalingFactor : 150}`}
      viewBox="0 0 187.052 150"
    >
      <path
        id="Icon_simple-googlecloud"
        data-name="Icon simple-googlecloud"
        d="M95.007,3.586A72.826,72.826,0,0,0,23.038,57.309c.413-.156-.429.1,0,0-30.2,19.882-30.568,63.209-1.925,85.273l.047-.055-.055.234a52.352,52.352,0,0,0,31.776,10.569H93.2l.234.234H133.9c52.118.413,73.076-67.067,29.89-96.255A72.99,72.99,0,0,0,141.8,21.832l-.335.335.047-.39A72.826,72.826,0,0,0,95.007,3.586ZM92.217,35.9a41.64,41.64,0,0,1,27.17,8.963A40.419,40.419,0,0,1,133.9,76.646v4.037c27.513-.546,27.513,41.012,0,40.474H93.425l-.062.07v-.312H52.881a20.186,20.186,0,0,1-8.316-1.793h.008A20.241,20.241,0,1,1,71.36,92.335L94.843,68.86a52.586,52.586,0,0,0-31.635-19.6c.14-.078.312-.2.421-.179a40.419,40.419,0,0,1,28.6-13.172Z"
        transform="translate(0 -3.566)"
        fill={color}
      />
    </svg>
  </div>
)

export const AWSIcon = ({ color, scalingFactor, name, font }: IconProps) => (
  <div>
    {name ? (
      <HoverName
        initialWidth={250.835}
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
      width={`${scalingFactor ? 250.835 * scalingFactor : 250.835}`}
      height={`${scalingFactor ? 150 * scalingFactor : 150}`}
      viewBox="0 0 250.835 150"
    >
      <path
        id="Icon_simple-amazonaws"
        data-name="Icon simple-amazonaws"
        d="M70.685,61.709a25.094,25.094,0,0,0,.92,7.421,44.755,44.755,0,0,0,2.676,6.02,3.578,3.578,0,0,1,.585,1.913,3.31,3.31,0,0,1-1.589,2.508l-5.257,3.5a4,4,0,0,1-2.174.753,3.8,3.8,0,0,1-2.5-1.171,25.815,25.815,0,0,1-3-3.919q-1.4-2.4-2.592-4.923Q48,85.319,33.226,85.319c-7,0-12.594-2-16.681-6S10.379,69.976,10.379,63.3c0-7.086,2.5-12.855,7.588-17.182S29.809,39.6,38.4,39.6a65.772,65.772,0,0,1,8.842.669c3.094.418,6.271,1.087,9.594,1.839V36.019c0-6.344-1.327-10.765-3.919-13.347-2.665-2.592-7.17-3.836-13.587-3.836a37.87,37.87,0,0,0-9.02,1.077A66.339,66.339,0,0,0,21.3,22.757a23.9,23.9,0,0,1-2.926,1.087,5.1,5.1,0,0,1-1.327.24c-1.171,0-1.756-.836-1.756-2.582V17.416a5.291,5.291,0,0,1,.585-2.926,6.24,6.24,0,0,1,2.341-1.745,47.835,47.835,0,0,1,10.5-3.763A50.585,50.585,0,0,1,41.744,7.4c9.929,0,17.182,2.258,21.854,6.762,4.588,4.494,6.919,11.34,6.919,20.516V61.709ZM36.822,74.4a27.025,27.025,0,0,0,8.591-1.505,18.613,18.613,0,0,0,7.922-5.33,13.271,13.271,0,0,0,2.843-5.351,30.36,30.36,0,0,0,.836-7.253v-3.5a69.6,69.6,0,0,0-7.682-1.421,62.92,62.92,0,0,0-7.839-.5c-5.592,0-9.678,1.087-12.437,3.344s-4.076,5.414-4.076,9.584c0,3.919.993,6.846,3.083,8.842,2,2.09,4.912,3.094,8.758,3.094Zm66.994,9.009a4.668,4.668,0,0,1-3.177-.836,6.823,6.823,0,0,1-1.756-3.25l-19.6-64.5a14.611,14.611,0,0,1-.752-3.344,1.831,1.831,0,0,1,2-2.09h8.184c1.578,0,2.665.261,3.24.836a6.661,6.661,0,0,1,1.672,3.261l14.026,55.226,13.012-55.226a5.937,5.937,0,0,1,1.578-3.261,5.738,5.738,0,0,1,3.344-.836h6.668a5.092,5.092,0,0,1,3.344.836,5.634,5.634,0,0,1,1.578,3.261l13.179,55.895L164.79,13.486a7.17,7.17,0,0,1,1.672-3.261,5.435,5.435,0,0,1,3.25-.836h7.765a1.867,1.867,0,0,1,2.09,2.09,8.438,8.438,0,0,1-.178,1.338,11.883,11.883,0,0,1-.585,2.09l-20.1,64.486a6.368,6.368,0,0,1-1.756,3.25,5.33,5.33,0,0,1-3.167.836H146.6a5.069,5.069,0,0,1-3.344-.836,5.929,5.929,0,0,1-1.568-3.344l-12.939-53.8L115.9,79.215a6.618,6.618,0,0,1-1.568,3.344,5.221,5.221,0,0,1-3.344.836Zm107.191,2.247a55.621,55.621,0,0,1-12.845-1.495,37.988,37.988,0,0,1-9.594-3.344,4.781,4.781,0,0,1-3.083-4.672V71.889c0-1.745.669-2.582,1.913-2.582a4.734,4.734,0,0,1,1.505.251c.5.167,1.254.5,2.09.836a45.06,45.06,0,0,0,9.176,2.916,49.926,49.926,0,0,0,9.929,1c5.247,0,9.344-.92,12.176-2.759a8.988,8.988,0,0,0,4.337-7.922,8.121,8.121,0,0,0-2.247-5.842c-1.505-1.578-4.348-3-8.434-4.337L203.837,49.69c-6.093-1.913-10.6-4.745-13.347-8.5a19.879,19.879,0,0,1-4.181-12.1,18.666,18.666,0,0,1,2.258-9.26,21.394,21.394,0,0,1,6.01-6.835,26.21,26.21,0,0,1,8.675-4.337,36.348,36.348,0,0,1,10.514-1.421,41.923,41.923,0,0,1,5.592.334c1.913.251,3.658.585,5.414.92,1.672.418,3.261.836,4.755,1.327a18.249,18.249,0,0,1,3.512,1.505,7.211,7.211,0,0,1,2.508,2.09,4.494,4.494,0,0,1,.742,2.749v3.919c0,1.756-.669,2.676-1.923,2.676a8.675,8.675,0,0,1-3.167-1,38.169,38.169,0,0,0-16.012-3.25c-4.755,0-8.518.742-11.1,2.331a8.043,8.043,0,0,0-3.919,7.421,7.857,7.857,0,0,0,2.508,5.926c1.662,1.589,4.745,3.177,9.166,4.6l11.852,3.742c6,1.923,10.347,4.6,12.929,8.016a18.886,18.886,0,0,1,3.836,11.674,21.539,21.539,0,0,1-2.163,9.678,22.548,22.548,0,0,1-6.093,7.347,26.925,26.925,0,0,1-9.26,4.672,39.952,39.952,0,0,1-11.936,1.745Zm15.771,40.552c-27.446,20.276-67.329,31.031-101.61,31.031-48.056,0-91.346-17.768-124.059-47.3-2.582-2.331-.251-5.508,2.843-3.668,35.368,20.516,79,32.954,124.133,32.954a247.78,247.78,0,0,0,94.691-19.356C227.363,117.771,231.282,122.861,226.778,126.205Zm11.434-13.023c-3.512-4.494-23.2-2.163-32.128-1.076-2.665.334-3.083-2.007-.658-3.763,15.677-11.005,41.461-7.839,44.461-4.17,3,3.763-.836,29.536-15.52,41.879-2.247,1.923-4.421.92-3.418-1.578,3.344-8.257,10.765-26.86,7.264-31.292Z"
        transform="translate(0 -7.236)"
        fill={color}
      />
    </svg>
  </div>
)

export const InvisionIndustryIcon = ({ color, scalingFactor, name, font }: IconProps) => (
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

export const SlackIcon = ({ color, scalingFactor, name, font }: IconProps) => (
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
        id="Icon_simple-slack"
        data-name="Icon simple-slack"
        d="M31.513,94.781a15.756,15.756,0,1,1-15.75-15.75h15.75v15.75Zm7.944,0a15.756,15.756,0,0,1,31.512,0v39.456a15.756,15.756,0,1,1-31.512,0V94.781ZM55.213,31.513a15.756,15.756,0,1,1,15.756-15.75v15.75H55.213Zm0,7.944a15.756,15.756,0,1,1,0,31.512H15.763a15.756,15.756,0,1,1,0-31.512h39.45Zm63.263,15.756a15.762,15.762,0,1,1,15.762,15.756H118.475V55.213Zm-7.925,0a15.759,15.759,0,0,1-31.519,0V15.763a15.759,15.759,0,1,1,31.519,0ZM94.781,118.475a15.763,15.763,0,1,1-15.75,15.762V118.475h15.75Zm0-7.925a15.759,15.759,0,0,1,0-31.519h39.456a15.759,15.759,0,1,1,0,31.519Z"
        fill={color}
      />
    </svg>
  </div>
)

export const MicrosoftIcon = ({ color, scalingFactor, name, font }: IconProps) => (
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
        id="Icon_awesome-microsoft"
        data-name="Icon awesome-microsoft"
        d="M0,2.25H71.853V74.1H0Zm78.147,0H150V74.1H78.147ZM0,80.4H71.853V152.25H0Zm78.147,0H150V152.25H78.147Z"
        transform="translate(0 -2.25)"
        fill={color}
      />
    </svg>
  </div>
)
