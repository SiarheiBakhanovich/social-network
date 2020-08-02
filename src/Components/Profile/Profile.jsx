import React from "react";
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div>
            <img
                src='https://www.wallpaperup.com/uploads/wallpapers/2013/07/01/112481/62c30d7e73033ad264c790b63b233bba-1000.jpg'></img>

            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>

    )
}

export default Profile;