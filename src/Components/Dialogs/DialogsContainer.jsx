import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reduser"
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {

        props.store.dispatch (updateNewMessageBodyCreator(body));
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>


}


export default DialogsContainer;