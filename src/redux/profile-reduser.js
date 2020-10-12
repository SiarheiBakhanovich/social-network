const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'how are you', likescount: 23},
        {id: 2, message: 'first post', likescount: 12},
        {id: 3, message: 'wolf amoung us', likescount: 34},
        {id: 4, message: 'a am Batman', likescount: 49}
    ],
    newPostText: 'Heeei',
    profile: null
};

   const profileReducer = (state = initialState, action) => {

       switch (action.type) {
           case ADD_POST: {
               let newPost = {
                   id: 5,
                   message: state.newPostText,
                   likescount: 0

               };
               return  {
                   ...state,
                   posts : [...state.posts, newPost],
                   newPostText : ''


               };


           }
           case UPDATE_NEW_POST_TEXT: {
               return {
                   ...state,
                   newPostText: action.newText

               };


           }
           case SET_USER_PROFILE: {
               return {...state, profile: action.profile}
           }
           default:
               return state;
       }


}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})

export default profileReducer;