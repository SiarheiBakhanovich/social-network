import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img src='http://humor.fm/uploads/posts/2015-12/1449044593_4.jpeg'></img>
            </div>
            {props.message}

            <div>
                <span>like</span>
                {props.likescount}
            </div>
        </div>

    )
}

export default Post;