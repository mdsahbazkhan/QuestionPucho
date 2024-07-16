
import { combineReducers } from 'redux'
import authReducer from './auth'
import currentUserReducer from "./currentUser.js"
import questionsReducer from "./questions.js"
import usersReducer from "./users.js"


export default combineReducers({
    auth:authReducer,
     currentUserreducer:currentUserReducer,
    questionsreducer:questionsReducer,
    users:usersReducer,
})