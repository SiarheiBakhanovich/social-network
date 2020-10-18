import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import navbarReducer from "./navbar-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";
import  thunkMiddleware from "redux-thunk";

let redusers = combineReducers({
   profilePage : profileReducer,
   dialogsPage : dialogsReducer,
   sidebar : navbarReducer,
   usersPage: usersReducer,
   auth: authReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;