# Eunoia - εὔνοιᾰ

#### <i>Defined as the goodwill a speaker cultivates between themself and their audience, a condition of receptivity</i>

![logo](https://raw.githubusercontent.com/SammyRobensParadise/eunoia/master/public/eunoia_logo.png)

### Status

![Build](https://img.shields.io/github/workflow/status/SammyRobensParadise/eunoia/semantic-release?style=for-the-badge)
![Version](https://img.shields.io/npm/v/eunoia?style=for-the-badge)

#### Versioning

`Major.Minor.Update`\
`xx.xx.xxxx`

## Storybook Link

![Storybook](https://user-images.githubusercontent.com/321738/63501763-88dbf600-c4cc-11e9-96cd-94adadc2fd72.png)
[Storybook - Eunoia](https://confident-morse-bbc2f8.netlify.com/?path=/story/button--default)

## NPM Link

![NPM](https://avatars0.githubusercontent.com/u/6078720?s=200&v=4)\
[NPM eunoia](https://www.npmjs.com/package/eunoia)

## Setup

Install eunoia

```
npm i eunoia
```

## What is available

### Button

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/button--default)

```tsx
const Default = () => <Button onClick={action('clicked')}>Default Button</Button>
```

### Button props

```ts
  primary?: boolean
  transparent?: boolean
  blackFont?: boolean
```

### CircleButton

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/circlebutton--default)

```tsx
const Default = () => (
  <CircleButton onClick={action('clicked')}>
    <IconWrapper>
      <Icon />
    </IconWrapper>
  </CircleButton>
)
```

### CircleButton props

```ts
  primary?: boolean
  transparent?: boolean
  blackFont?: boolean
  fontOverride?: string
  height?: string
```

### Icons

#### RightArrow

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/icons--right-arrow)

```tsx
const Right_Arrow = () => <RightArrow scalingFactor={2} color="#000000" />
```

#### LeftArrow

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/icons--left-arrow)

```tsx
const Left_Arrow = () => <LeftArrow scalingFactor={2} color="#000000" />
```

#### DownArrow

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/icons--down-arrow)

```tsx
const Down_Arrow = () => <DownArrow scalingFactor={2} color="#000000" />
```

#### UpArrow

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/icons--up-arrow)

```tsx
const Down_Arrow = () => <DownArrow scalingFactor={2} color="#000000" />
```

#### DribbbleIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/icons--dribbble-icon)

```tsx
const Dribbble_Icon = () => <DribbbleIcon color="#000000" scalingFactor={1} />
```

#### GithubIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/icons--github-icon)

```tsx
const Github_Icon = () => <GithubIcon color="#000000" scalingFactor={1} />
```

### Icon Props

```ts
  color?: string
  offset?: string
  scalingFactor?: number | null
```

## More coming soon

:)

## Contact

srobensparadise@gmail.com \
https://sammyrp.com
