/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

// exports.onRenderBody = ({setHeadComponents}) => {
//   setHeadComponents([
//     <link rel="stylesheet" type="text/css" key="bootstrap" src={"styles/bootstrap.css"}/>,
//     <link rel="stylesheet" type="text/css" key="fonts" src={"styles/fonts.css"} />,
//     <link rel="stylesheet" type="text/css" key="style" src={"styles/style.cs"}/>
//   ]);
// };

exports.onRenderBody = ({setPostBodyComponents}) => {
  setPostBodyComponents([
    <script key="core" src={"scripts/core.min.js"}/>,
    <script key="scriptz" src={"scripts/script.js"}/>
  ]);
};

// <script src={"scripts/script.js"}/>
// import "./src/styles/bootstrap.css"
// import "./src/styles/fonts.css"
// import "./src/styles/style.css"
