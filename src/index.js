import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'how are you', likescount: 23},
    {id: 2, message: 'first post', likescount: 12},
    {id: 3, message: 'wolf amoung us', likescount: 34},
    {id: 4, message: 'a am Batman', likescount: 49}
]


let dialogs = [
    {id: 1, name: 'Serhio'},
    {id: 2, name: 'Justin'},
    {id: 3, name: 'Toni'},
    {id: 4, name: 'Peter'},
    {id: 5, name: 'Katy'},
    {id: 6, name: 'Kim'}
]

let messages = [
    {id: 1, message: 'helloo'},
    {id: 2, message: 'i am fine'},
    {id: 3, message: 'commone'},
    {id: 4, message: 'Notorius BIG'},
    {id: 5, message: 'how?'},
    {id: 6, message: 'brr'}
]




ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
