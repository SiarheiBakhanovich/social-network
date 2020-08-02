import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Serhio
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Justin
                </div>
                <div className={s.dialog}>
                    Toni
                </div>
                <div className={s.dialog}>
                    Peter
                </div>
                <div className={s.dialog}>
                    Katy
                </div>
                <div className={s.dialog}>
                    Arianna
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    Whaaat
                </div>
                <div className={s.message}>
                    I am pup right now
                </div>
            </div>
        </div>
    )
}

export default Dialogs;