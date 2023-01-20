import AppReducer from './reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    app: AppReducer,
});