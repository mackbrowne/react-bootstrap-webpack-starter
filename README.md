# React Starter App

React Boilerplate with Login and Todo List

## Table of Contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
  - [yarn start](#yarn-start)
  - [yarn test](#yarn-test)
  - [yarn test:coverage](#yarn-testcoverage)
  - [yarn build](#yarn-build)
  - [yarn build:serve](#yarn-buildserve)
  - [yarn analyze](#yarn-analyze)
- [Inspiration](#inspiration)

## Requirements

1. [Node](https://nodejs.org/en/) - as of this documentation it's 8.8.1+
1. [Yarn](https://github.com/yarnpkg/yarn) - as of this documentation it's 1.2.1+

## Installation

1. In the root of the project, run `yarn install`
1. *(For integration tests)* - Create an `.env` file by copying `.env-sample`. Go to `browserstack.com` to determine values.
1. Run `yarn start`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn test:coverage`

Launches the test runner in the single-run mode.<br>
Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.<br>
Run `yarn test:coverage` to include a coverage report like this:

![coverage report](http://i.imgur.com/5bFhnTS.png)

Note that tests run much slower with coverage so it is recommended to run it separately from your normal workflow.

### `yarn test:update`

Update your snapshots used in jest snapshot testing.  Read more [here](https://facebook.github.io/jest/docs/en/snapshot-testing.html)

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn build:serve`

Runs the app in the production mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will NOT reload if you make edits. It is completely static after building<br>

### `yarn analyze`

Analyzes JavaScript bundles using the source maps. This helps you understand where code
bloat is coming from.

Read more at [Source map explorer](https://www.npmjs.com/package/source-map-explorer)

To analyze the bundle run the production build then run the analyze
script.

```
yarn build
yarn analyze
```

## Inspiration

This project was bootstrapped with [React Webpack Starter](https://github.com/facebookincubator/create-react-app).
