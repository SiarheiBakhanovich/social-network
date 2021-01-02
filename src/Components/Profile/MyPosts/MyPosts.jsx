import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormControl";

const MyPosts = React.memo( props => {
    
    let postsElements = props.posts.map(p =>
        <Post message={p.message} likescount={p.likescount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);

    }


    let newPostElement = React.createRef();


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}


            </div>
        </div>

    )
});

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={"post message"} validate={[required, maxLength10]}/>

            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

 let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;