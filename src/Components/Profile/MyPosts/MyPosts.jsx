import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <div className={s.posts}>
                <Post  message='Hi, how are you?' likescount='23'/>
                <Post message ='My first post, yeah' likescount='4'/>


            </div>
        </div>

    )
}

export default MyPosts;