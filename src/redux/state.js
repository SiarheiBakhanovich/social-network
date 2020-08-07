
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'how are you', likescount: 23},
                {id: 2, message: 'first post', likescount: 12},
                {id: 3, message: 'wolf amoung us', likescount: 34},
                {id: 4, message: 'a am Batman', likescount: 49}
            ],
            newPostText: 'it kama'
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Serhio'},
                {id: 2, name: 'Justin'},
                {id: 3, name: 'Toni'},
                {id: 4, name: 'Peter'},
                {id: 5, name: 'Katy'},
                {id: 6, name: 'Kim'}
            ],
            messages: [
                {id: 1, message: 'helloo'},
                {id: 2, message: 'i am fine'},
                {id: 3, message: 'commone'},
                {id: 4, message: 'Notorius BIG'},
                {id: 5, message: 'how?'},
                {id: 6, message: 'brr'}
            ]
        }


    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state is changed');
    },
    addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likescount: 0

        };
        this._state.profilePage.posts.push(newPost);
       this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {

       this._state.profilePage.newPostText = newText;
       this._callSubscriber(this._state);
    },
    subscribe(observer) {
       this._callSubscriber = observer;
    }

}

window.store = store;
export default store;