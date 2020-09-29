const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ],

    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body

            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',

                messages: [...state.messages, {id: 7, message: body}]
            };


        default:
            return state;

    }


}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer;