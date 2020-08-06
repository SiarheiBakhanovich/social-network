import App from './App';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state";
import {rerenderEntireThree} from "./render";


rerenderEntireThree(state);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
