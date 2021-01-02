import profileReducer, {addPostActionCreator} from "./profile-reduser";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";


test('length of posts should be incremented', () => {
    let action = addPostActionCreator("itSiarheBakhanovich");
    let state = {
        posts: [
            {id: 1, message: 'how are you', likescount: 23},
            {id: 2, message: 'first post', likescount: 12},
            {id: 3, message: 'wolf amoung us', likescount: 34},
            {id: 4, message: 'a am Batman', likescount: 49}
        ]
    };
    let newState = profileReducer(state,action);

    expect (newState.posts.length).toBe(5);

});


