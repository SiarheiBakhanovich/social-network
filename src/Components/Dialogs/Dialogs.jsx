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

            const Dialogs = (props) => {
            return (
            <div className={s.dialogs}>
            <div className={s.dialogsItems}>

            <DialogItem name="Serhio" id="1"/>
            <DialogItem name="Justin" id="2"/>
            <DialogItem name="Toni" id="3"/>
            <DialogItem name="Peter" id="4"/>
            <DialogItem name="Katy" id="5"/>
            <DialogItem name="Kim" id="6"/>

            </div>
            <div className={s.messages}>
            <Message mesaage="Hi" />
                <Message message="How is your live?" />
                <Message message="Fantastic" />
                <Message message="Hi" />

            </div>
            </div>
            )
        }

            export default Dialogs;