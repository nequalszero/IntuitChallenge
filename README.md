## Intuit Challenge - ReactJS Subreddits

[Live Link][livelink]

[livelink]: https://nequalszero.github.io/IntuitChallenge/

### Summary
This front end web application built with `React`, makes an API call to Reddit, querying the subreddits for ReactJS.  The JavaScript files are bundled together with `webpack` into the `src/bundle.js` file.  

The functions that make the API call are located in `src/lib/util.js`, and the top level `src/app.js` component is rendered into the DOM in `src/entry.js`.

### Download Instructions
1. Clone the repository to your local machine.
2. Run `npm install`
3. To open application locally, open `index.html` in the browser.

To easily make changes, start the webpack-dev-server by running `npm start` (short for `webpack-dev-server --hot --inline` as seen in `package.json`) and go to http://localhost:8080/.
