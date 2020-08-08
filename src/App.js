import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter,} from "react-router-dom";
import {Route} from "react-router-dom";
import Message from "./Components/Dialogs/Message/Message";
import {addPost} from "./redux/state";

const App = (props) => {


    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/message"
                       render={() => <Dialogs store={props.store}
                                              state={props.state.dialogsPage}/>}/>
                <Route path="/profile"
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}/>}/>

            </div>

        </div>

    );
}


export default App;



