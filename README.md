# Eunoia - εὔνοιᾰ

#### <i>Defined as the goodwill a speaker cultivates between themself and their audience, a condition of receptivity</i>

![logo](https://raw.githubusercontent.com/SammyRobensParadise/eunoia/master/public/eunoia_logo.png)

### Status

![Build](https://img.shields.io/github/workflow/status/SammyRobensParadise/eunoia/semantic-release?style=for-the-badge)
![Version](https://img.shields.io/npm/v/eunoia?style=for-the-badge)
![Status](https://img.shields.io/website?down_color=red&down_message=offline&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Fconfident-morse-bbc2f8.netlify.com%2F%3Fpath%3D%2Fstory%2Fbutton--default)

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

#### MediumIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/icons--medium-icon)

```tsx
const Medium_Icon = () => <MediumIcon color="#000000" scalingFactor={1} />
```

#### LinkedinIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/icons--linkedin-icon)

```tsx
const Linkedin_Icon = () => <LinkedinIcon color="#000000" scalingFactor={1} />
```

#### HomeIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/icons--home-icon)

```tsx
const Home_Icon = () => <HomeIcon color="#000000" scalingFactor={1} />
```

#### PhotoshopIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/design-tool-icons--photoshop-icon)

```tsx
const Photoshop_Icon = () => <PhotoshopIcon color="#000000" scalingFactor={1} />
```

#### IllustratorIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/design-tool-icons--illustrator-icon)

```tsx
Illustrator_Icon = () => <IllustratorIcon scalingFactor={1} color="#000000" />
```

#### ExperienceDesignerIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/design-tool-icons--experience-designer-icon)

```tsx
Experience_Designer_Icon = () => <ExperienceDesignerIcon scalingFactor={1} color="#000000" />
```

#### FigmaIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/design-tool-icons--figma-icon)

```tsx
Figma_Icon = () => <FigmaIcon scalingFactor={1} color="#000000" />
```

#### SketchIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/design-tool-icons--sketch-icon)

```tsx
Sketch_Icon = () => <SketchIcon scalingFactor={1} color="#000000" />
```

#### InvisionIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/design-tool-icons--invision-icon)

```tsx
Invision_Icon = () => <InvisionIcon scalingFactor={1} color="#000000" />
```

#### AftereffectsIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/design-tool-icons--aftereffects-icon)

```tsx
Aftereffects_Icon = () => <AftereffectsIcon scalingFactor={1} color="#000000" />
```

#### IndesignIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/design-tool-icons--indesign-icon)

```tsx
Indesign_Icon = () => <IndesignIcon scalingFactor={1} color="#000000" />
```

#### MaterialDesignIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/design-tool-icons--material-design-icon)

```tsx
Material_Design_Icon = () => <MaterialDesignIcon scalingFactor={1} color="#000000" />
```

#### CreativecloudIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/design-tool-icons--creative-cloud-icon)

```tsx
Creative_Cloud_Icon = () => <CreativecloudIcon scalingFactor={1} color="#000000" />
```

#### ReactIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/development-tool-icons--react-icon)

```tsx
const React_Icon = () => <ReactIcon scalingFactor={1} color="#000000" />
```

#### PythonIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/development-tool-icons--python-icon)

```tsx
const Python_Icon = () => <PythonIcon scalingFactor={1} color="#000000" />
```

#### WebpackIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/development-tool-icons--webpack-icon)

```tsx
const Webpack_Icon = () => <WebpackIcon scalingFactor={1} color="#000000" />
```

#### NodeIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/development-tool-icons--node-icon)

```tsx
const Node_Icon = () => <NodeIcon scalingFactor={1} color="#000000" />
```

#### JSIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/development-tool-icons--js-icon)

```tsx
const JS_Icon = () => <JSIcon scalingFactor={1} color="#000000" />
```

#### PHPIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/development-tool-icons--php-icon)

```tsx
const PHP_Icon = () => <PHPIcon scalingFactor={1} color="#000000" />
```

#### GitLargeIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/development-tool-icons--git-large-icon)

```tsx
const Git_Large_Icon = () => <GitLargeIcon scalingFactor={1} color="#000000" />
```

#### JenkinsIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/development-tool-icons--jenkins-icon)

```tsx
const Jenkins_Icon = () => <JenkinsIcon scalingFactor={1} color="#000000" />
```

#### K8sIcon

[Storybook Link](https://confident-morse-bbc2f8.netlify.com/?path=/story/development-tool-icons--k8s-icon)

```tsx
const K8s_Icon = () => <K8sIcon scalingFactor={1} color="#000000" />
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
