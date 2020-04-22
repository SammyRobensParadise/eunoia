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

### Icon Props

```ts
  color?: string
  offset?: string
  scalingFactor?: number
```

### Design Icons

[Design Icons](https://eunoia.netlify.com/?path=/story/components--design-icons)

```tsx
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

## More components coming soon

🤟💻🔨
:)

## Contact

srobensparadise@gmail.com \
https://sammyrp.com
