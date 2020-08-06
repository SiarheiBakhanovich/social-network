import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map( p =>
        <Post message={p.message} likescount={p.likescount}/>);

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    let newPostElement = React.createRef();



    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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