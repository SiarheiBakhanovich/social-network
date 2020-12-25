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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            };


        default:
            return state;

    }


}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;