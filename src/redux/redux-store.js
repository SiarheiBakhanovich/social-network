import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import navbarReducer from "./navbar-reduser";

let redusers = combineReducers({
   profilePage : profileReducer,
   dialogsPage : dialogsReducer,
   sidebar : navbarReducer
});

let store = createStore(redusers);

export default store;