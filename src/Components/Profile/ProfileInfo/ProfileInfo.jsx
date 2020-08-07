import React from "react";
import  s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div >
            <img
                src='https://www.wallpaperup.com/uploads/wallpapers/2013/07/01/112481/62c30d7e73033ad264c790b63b233bba-1000.jpg'></img>
            </div>

            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;