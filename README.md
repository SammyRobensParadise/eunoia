# Eunoia - εὔνοιᾰ

#### <i>Defined as the goodwill a speaker cultivates between themself and their audience, a condition of receptivity</i>

![logo](https://raw.githubusercontent.com/SammyRobensParadise/eunoia/master/public/eunoia_logo.png)

### Status

![Build](https://img.shields.io/github/workflow/status/SammyRobensParadise/eunoia/semantic-release?style=for-the-badge)
![Version](https://img.shields.io/npm/v/eunoia?style=for-the-badge)
![Status](https://img.shields.io/website?down_color=red&down_message=offline&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Feunoia.netlify.com%2F%3Fpath%3D%2Fstory%2Fbutton--default)

#### Versioning

`Major.Minor.Update`\
`xx.xx.xxxx`

## Storybook Link

![Storybook](https://user-images.githubusercontent.com/321738/63501763-88dbf600-c4cc-11e9-96cd-94adadc2fd72.png)
[Storybook - Eunoia](https://eunoia.netlify.com/?path=/story/button--default)

## NPM Link

![NPM](https://avatars0.githubusercontent.com/u/6078720?s=200&v=4)\
[NPM eunoia](https://www.npmjs.com/package/eunoia)

## Setup

Install eunoia

```
npm i eunoia
```

## It is recommended that this library be used alongside [styled components](https://styled-components.com/) and [Material UI](https://material-ui.com/)

## Usage

```js
// import
import { Button } from "eunoia"
/**
 * Every component is accessible directly via the
 * universal import "eunoia" designed to be a
 * single dependency import.
 *
 * Checkout the storybook
 * https://eunoia.netlify.app/
 * for detailed documentation
 *
 **/

// use!
render(){
  return <Button>Hello from εὔνοιᾰ!</Button>
}
```

#### Source: `Typescript`

#### API: `Javascript/Typescript`

#### Code Style: <i>Prettier</i>

#### Syntax: ES6^

## What is available

### Button

[Storybook Link](https://eunoia.netlify.com/?path=/story/components--buttons)

```tsx
const Default = () => <Button onClick={action('clicked')}>Default Button</Button>
```

### Button props

```ts
  primary?: boolean
  transparent?: boolean
  blackFont?: boolean
```

### Website Icons

[Website Icons](https://eunoia.netlify.com/?path=/story/components--design-icons)

```tsx
import { RightArrow } from 'eunoia'

// use
const Right_Arrow = () => <RightArrow scalingFactor={2} color="#000000" />
```

#### List of Website Icons

1. RightArrow
2. LeftArrow
3. DownArrow
4. UpArrow
5. Dribbble
6. Github
7. Medium
8. Linkedin
9. Home
10. Menu

### Icon Props

```ts
  color?: string
  offset?: string
  scalingFactor?: number
```

### Design Icons

[Design Icons](https://eunoia.netlify.com/?path=/story/components--design-icons)

```tsx
import { PhotoshopIcon } from 'eunoia'

// use
const Photoshop_Icon = () => <PhotoshopIcon color="#000000" scalingFactor={1} />
```

#### List of Design Icons

1. Photoshop
2. Illustrator
3. Experience Designer
4. Figma
5. Sketch
6. Invision
7. After Effects
8. Indesign
9. Material Design
10. Creative Cloud

### Development Icons

[Development Icons](https://eunoia.netlify.com/?path=/story/components--development-icons)

```tsx
import { ReactIcon } from 'eunoia'

// use
const React_Icon = () => <ReactIcon scalingFactor={1} color="#000000" />
```

#### List of Dev Icons

1. React
2. Python
3. Webpack
4. Node.js
5. Javascript
6. PHP
7. Git (Large)
8. Jenkins
9. Kubernetes
10. Docker
11. Sass
12. CSS (3)
13. HTML (5)
14. Yarn
15. NPM
16. Ubuntu
17. MySQL
18. JQuery
19. Firebase (Cloud)
20. C++ (ISO)
21. Typescript

### Icon Props

```ts
  color?: string
  offset?: string
  scalingFactor?: number | null
```

### Colors UIStyle:

[Theme Colors](https://eunoia.netlify.com/?path=/story/components--colors)

```js
import { UIStyle } from 'eunoia'

// use as required
const Gld = UIStyle.UIColors.gold
```

### List of Colors:

```ts
  UIColors: {
    white: '#FFFFFF',
    lightGrey: '#00000029',
    black: '#000000',
    gold: '#E1A87A',
    darkGrey: '#212121',
    mediumGrey: '#5D5D5D',
  }
```

### Menu Component

[Menu component](https://eunoia.netlify.com/?path=/story/components--menu)

```jsx
import { Menu } from 'eunoia'

// use as required
render(){
  return <Menu config={config} options={options} />
}
```

#### Details:

The menu component take two args. The first is an object called config that details the style of the menu. The second is an array of objects called options. This array contains a list of items that are rendered to the menu. The menu has both mobile and desktop support and is built over `Material UI`.\
The Menu uses `react-router` to implement navigation. if you want custom navigation, it can be overridden by passing a `JSX` component as the `icon` param in the array of objects `options` arg.

#### Interface:

See the [Menu Storybook](https://eunoia.netlify.com/?path=/story/components--menu) for an example with source code\
<br>
<b>config</b>

```ts
  config: {
    fontColor?: string
    activeSection?: string
    hideOnMobile?: boolean
    DisableMobile?: boolean
    fontOverride?: string
    boldText?: boolean
    spacing?: any
    row?: boolean
    fontSize?: string
    mobileBreakpoint?: number | undefined
    breakpoints: {
      xs?: boolean
      sm?: boolean
      xl?: boolean
    }
  }
```

<b>options</b>

```ts
  options: Array<{
    title?: string | undefined
    link?: string | undefined | any // this is a local nav link with react-router-dom
    exRef: string | undefined // this is an external link
    newTab?: boolean
    icon?: any
    main?: boolean | undefined
  }>
```

### Card

[Card component](https://eunoia.netlify.com/?path=/story/components--card)

```jsx
import { Card } from 'eunoia'

// use as required
render(){
  return <Card config={config} />
}
```

#### Details

The card component is built on top of the `Material UI` Card component and has similar behavior. It is a flex card with a box shadow that is designed for content sharing. It takes a `config` object that determines the layout of the card and its content.

#### Interface

See the [Card Storybook](https://eunoia.netlify.com/?path=/story/components--card) for an example with source code\

<b>config</b>

```ts
  config: {
    shouldRender: boolean | undefined
    imageURL?: string | undefined
    imageAltText?: string | undefined
    content?: string
    title: string
    centerTitle?: boolean | undefined
    centerContent?: boolean | undefined
    fontOverride?: string | undefined
    fontColor?: string | undefined
    fontSize?: string | undefined
    fontSizeTitle?: string | undefined
    height?: string | number | undefined
    link?: string | undefined | any
    event?: any | undefined
    containImage?: boolean | undefined // not yet implemented
  }
```

### Section Header

[SectionHeader component](https://eunoia.netlify.com/?path=/story/components--sectionheader)

```jsx
import { SectionHeader } from 'eunoia'

// use as required
render(){
  return <SectionHeader config={config}>Design! :)</SectionHeader>
}
```

#### Details

The section header component is just CSS and takes a `config` object detailed below. Styles can be overridden using `styled(SectionHeader)` from `styled-components`, or can be used as-is.

#### Interface

See the [SectionHeader Storybook](https://eunoia.netlify.com/?path=/story/components--sectionheader) for an example with source code\

<b>config</b>

```ts
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
```

## More components coming soon

🤟💻🔨
:)

## Contact

srobensparadise@gmail.com \
https://sammyrp.com
