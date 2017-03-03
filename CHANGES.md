$ npm run eject

> create-react-app-modifications@0.1.0 eject /Users/abhishek/work/ReactCourseApps/create-react-app-modifications
> react-scripts eject

Are you sure you want to eject? This action is permanent. [y/N]
y
Ejecting...

...
...

Ejected successfully!


Change source map in config/webpack.config.dev.js:

devtool: 'cheap-module-source-map' ---> devtool: 'source-map'


ESLint Setup:
ATOM requires packages linter and linter-eslint to display linting errors on editor.

npm i -D babel-eslint eslint eslint-loader eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react semistandard

Create a file .eslintrc.json to setup semistandard rules and airbnb eslint rules jsx and react.

.eslintrc.json:

{
  "parser": "babel-eslint",
  "extends": ["semistandard", "airbnb"],
  "rules": {
    "max-len": [1, 120, 2, {"ignoreComments": true}],
    "quote-props": [1, "consistent-as-needed"],
    "no-cond-assign": [2, "except-parens"],
    "radix": 0,
    "space-infix-ops": 0,
    "no-unused-vars": [1, {"vars": "local", "args": "none"}],
    "default-case": 0,
    "no-else-return": 0,
    "no-param-reassign": 0,
    "quotes": 0,
    "react/jsx-filename-extension": 0,
    "arrow-body-style": 0
  },
  "env": {
    "browser": true
  }
}


React Hot Loader v3 Setup:

npm i --save react-hot-loader@3.0.0-beta.6


Update webpack.config.dev.js:
entry: [
  require.resolve("react-hot-loader/patch"),
  ...
]

// Process JS with Babel.
    {
      test: /\.(js|jsx)$/,
      include: paths.appSrc,
      loader: 'babel',
      query: {
        plugins: [
          require.resolve('react-hot-loader/babel')
        ],
        // This is a feature of `babel-loader` for webpack (not Babel itself).
        // It enables caching results in ./node_modules/.cache/babel-loader/
        // directory for faster rebuilds.
        cacheDirectory: true
      }



Update root index.js file -

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import './index.css';

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
