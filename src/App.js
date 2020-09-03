import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter,} from "react-router-dom";
import {Route} from "react-router-dom";
import Message from "./Components/Dialogs/Message/Message";
import {addPost} from "./redux/store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App = (props) => {


    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/message"
                       render={() => <DialogsContainer store={props.store}/>}/>

                <Route path="/profile"
                       render={() => <Profile
                           store={props.store} />}/>

            </div>

        </div>

    );
}


export default App;



