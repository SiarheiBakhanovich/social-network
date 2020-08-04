import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter,  } from "react-router-dom";
import {Route} from "react-router-dom";
const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/message" component={Dialogs}/>
                    <Route path="/profile" component={Profile}/>

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;


