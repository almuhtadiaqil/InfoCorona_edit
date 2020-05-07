import "regenerator-runtime";
import "../assets/css/bootstrap.css";
import "./styles/style.css";
import "jquery";
import "bootstrap";
import "./script/component/app-bar.js";
import DataSource from "./script/data/data-source.js";
document.addEventListener("DOMContentLoaded", DataSource);

/**npm install @babel/core @babel/preset-env babel-loader 
 css-loader html-loader html-webpack-plugin 
 style-loader webpack webpack-cli webpack-dev-server 
 webpack-merge --save-dev 
 npm install regenerator-runtime*/