import React from "react";
import  s from'./Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <img
                src='https://www.wallpaperup.com/uploads/wallpapers/2013/07/01/112481/62c30d7e73033ad264c790b63b233bba-1000.jpg'></img>

            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
            )
            }

            export default Profile;