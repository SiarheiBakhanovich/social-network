import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import navbarReducer from "./navbar-reduser";
import usersReducer from "./users-reduser";

let redusers = combineReducers({
   profilePage : profileReducer,
   dialogsPage : dialogsReducer,
   sidebar : navbarReducer,
   usersPage: usersReducer
});

let store = createStore(redusers);

window.store = store;

export default store;