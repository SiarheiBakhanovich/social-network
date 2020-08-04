import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

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

let dialogsElements = dialogs.map(d =>
    <DialogItem name={d.name} id={d.id}/>);


let messagesElements = messages.map(m =>
    <Message message={m.message}/>)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}


            </div>
            <div className={s.messages}>
                {messagesElements}


            </div>
        </div>
    )
}


export default Dialogs;