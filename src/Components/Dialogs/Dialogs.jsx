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

let dialogsData = [
    {id: 1, name: 'Serhio'},
    {id: 2, name: 'Justin'},
    {id: 3, name: 'Toni'},
    {id: 4, name: 'Peter'},
    {id: 5, name: 'Katy'},
    {id: 6, name: 'Kim'}
]

let messagesData = [
    {id: 1, message: 'helloo'},
    {id: 2, message: 'i am fine'},
    {id: 3, message: 'commone'},
    {id: 4, message: 'Notorius BIG'},
    {id: 5, message: 'how?'},
    {id: 6, message: 'brr'}
]

            const Dialogs = (props) => {
            return (
            <div className={s.dialogs}>
            <div className={s.dialogsItems}>

            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>

            </div>
            <div className={s.messages}>
            <Message mesaage={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />

            </div>
            </div>
            )
        }



            export default Dialogs;