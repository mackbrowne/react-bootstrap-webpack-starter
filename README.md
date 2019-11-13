# Code test - Flickr photo gallery

The goal of this assignment is to build a photo gallery that uses the [public API from Flickr](https://www.flickr.com/services/api/) to retrieve and display images on a web page. You could show all images in a specific category, the cats category for example. However, photos attached to a category won't be checked so there's a chance that these images aren't the most professional ones. If you would like to use more professional photos simply join a [Flickr group](https://www.flickr.com/groups/blackandwhite/) and use those photos.

Your application must meet all [requirements](#requirements). Any other additional features are up to you, see the [example features](#example-features-optional) list for some examples.

For this assignment you're free to use one of the following libraries: [Angular](https://angular.io/), [React](https://reactjs.org/) or [Vue](https://vuejs.org/). However, you should be able to explain why you picked the library you did. Of course it's also allowed to use module bundlers such as [Webpack](https://webpack.js.org/) or [Parcel](https://parceljs.org).

Do note, just using out-of-the-box solutions for everything might not give us the best idea about your actual development skills. So before adding another dependency, first ask yourself '_do I really need this?_'. In some cases it might be better to just write your own solution from scratch instead of adding more bloat.

Everything mentioned above also applies to the HTML and CSS part of this assignment. All code should be written from scratch but preprocessors like SASS or SCSS are allowed. It's also allowed to use a CSS-in-JS solution.

When everything is said and done we will review the readability and structure of your code. We will also review how you solved the different kinds of challenges you encountered during this assignment.

Please deliver your solution as a zipfile including all of the source code along with any instructions on how to run the application.

## Requirements

The application needs to:

- Have a README explaining how to install and run the application.
- Be responsive from mobile and up.
- Fill 100% of its container.
- Be independent of content outside of its container.
- Not affect styling of other elements on the page.
- Give the user feedback when the application is loading or when the API is unresponsive.
- Work in the latest versions of Chrome, iOS Safari and the Android stock browser.

## Example features (optional)

- Automated tests for parts of the solution.
- End-to-end testing.
- Endless scroll + lazyloading more photos when the end of the gallery is reached.
- Persistence/caching: save data from the API to a caching store and use this with repeated requests.
- Build steps which supply the project with linting, concatenation, minification etc.
- Accessibility (ARIA, keyboard shortcuts etc).
- Animations and other 'nice to have' styling.
- Searching for photos functionality.
- JSDoc documentation.
- Containerize the application (for example by using [Docker](https://www.docker.com/)).

## Flickr API Documentation

- [https://www.flickr.com/services/api/](https://www.flickr.com/services/api/)

## Installation

### To Run

`git checkout interview-cygni`
`yarn install`
`yarn start`

### To Test

#### Unit Tests with Jest with Coverage (Basic Snapshots)

`yarn test:coverage`

##### Integration Tests With Cypress

`yarn cypress open`
