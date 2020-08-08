import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

import {addPostActionCreator, updateNewPostTextActionCreator,} from "../../../redux/profile-reduser";

const MyPosts = (props) => {

    let postsElements = props.posts.map( p =>
        <Post message={p.message} likescount={p.likescount}/>);

    let addPost = () => {

        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
    let text = newPostElement.current.value;
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    let newPostElement = React.createRef();



    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}


            </div>
        </div>

    )
}

export default MyPosts;