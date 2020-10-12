import React from "react";
import  s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div >
            <img
                src='https://www.wallpaperup.com/uploads/wallpapers/2013/07/01/112481/62c30d7e73033ad264c790b63b233bba-1000.jpg'></img>
            </div>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;