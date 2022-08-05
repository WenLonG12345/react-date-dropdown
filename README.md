# Storybook boilerplate [![Deploy status](https://github.com/4-life/storybook-boilerplate/actions/workflows/push.yml/badge.svg)](https://github.com/4-life/storybook-boilerplate/actions)

![Storybook](https://img.shields.io/badge/-Storybook-333333?style=flat-square&logo=storybook)
![React](https://img.shields.io/badge/-React-333333?style=flat-square&logo=React)
![Typescript](https://img.shields.io/badge/-Typescript-333333?style=flat-square&logo=Typescript)
![Sass](https://img.shields.io/badge/-Sass-333333?style=flat-square&logo=Sass)
![Figma](https://img.shields.io/badge/-Figma-333333?style=flat-square&logo=figma)

The Storybook design system tutorial is a subset of the full [Storybook design system](https://github.com/storybookjs/design-system/), created as a learning resource for those interested in learning how to write and publish a design system using best in practice techniques.

## Developing components

Run developing components in storybook mode:

  > yarn storybook

or

  > npm run storybook

And it will run storybook on ```http://localhost:6006```

## Deploy components

After developing we can run deploy component library to npm automatically using [Github actions](https://github.com/4-life/storybook-boilerplate/blob/master/.github/workflows/push.yml). Although storybook docs says that we can deploy it using [just Babel](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/distribute/) we can't do that if our project contains SCSS, Typescript, etc. That's why we build components by [Webpack](https://github.com/4-life/storybook-boilerplate/blob/master/webpack.config.ts)


## Components documentation

You can find deployed storybook [here](https://storybook.4life.work/)

## Using component library

After component library is deployed on npm we can use it:

  > yarn add @4life/storybook-boilerplate

or

  > npm i @4life/storybook-boilerplate

And then import the component to the app:

```
import { Button } from '@4life/storybook-boilerplate';

function Component() {
  return (
    <Button primary loading />
  );
}
```

