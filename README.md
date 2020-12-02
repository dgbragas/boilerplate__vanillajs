<h1 align="center"><img src="./docs/banner.png" alt="Banner with 'VanillaJS Boilerplate' writed in display web font" /></h1>

<p align="center">
  <img src="http://img.shields.io/static/v1?label=Last%20change&message=01/12/2020&color=blue&style=for-the-badge"/>
  <img src="https://img.shields.io/github/languages/count/dgbragas/boilerplate__vanillajs?style=for-the-badge" />
  <img src="http://img.shields.io/static/v1?label=Code%20Style&message=AirBnb&color=red&style=for-the-badge"/>
</p>

A VanillaJS boilerplate created to simplify the project startup in projects using Webpack without MVC frameworks.


## **<img src="./docs/badge.png"> Principle dependencies**

- **babel:** v7.12.1
- **css-loader:** v5.0.1
- **html-webpack-plugin:** v4.5.0
- **sass-loader:** v10.0.5
- **style-loader:** v2.0.0
- **webpack-dev-server:** v3.11.0

### Principle lint and development dependencies

- **commitlint:** v11.0.0
- **commitizen:** v4.2.2
- **cz-conventional-changelog:** v3.3.0
- **eslint:** v6.6.0
- **husky:** v4.3.0
- **prettier:** v2.1.0


## **:warning: Prerequisites**

- <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>
- <a href="https://yarnpkg.com/" target="_blank">YarnPKG</a> or <a href="https://www.npmjs.com/" target="_blank">NPM</a>


### Running the application locally

```bash
  # Clonning the repository
  git clone https://github.com/dgbragas/boilerplate__vanillajs

  # Entering in the folder
  cd boilerplate__vanillajs

  # Installing project dependencies (you can also use 'npm install')
  yarn

  # Running the application (it will run at http://localhost:3000)
  yarn start
```

*1st note: to realize a commit using this boilerplate you can just type "git commit" in terminal (after stage your changes) and follow the sentenced steps displayed*

*2nd note: In my developement I use the [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) to convert my scss files in a styles.css compreesed. But you can use webpack plugins to convert scss in css*


### Deployment configuration

The "_redirects" file in /public is used when you want a Netlify deployment and [remove .html extensions from URL](https://medium.com/@towfiqu/removing-html-extension-from-netlify-hosted-static-site-with-parcel-41481c9e32fd). You can remove this file if the deployment will take place in another environment.

---

Developed by @dgbragas
