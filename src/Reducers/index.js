import { combineReducers } from 'redux';
import { falseReducer } from './falseReducer'

export const allReducers = combineReducers({
    falseReducer: falseReducer
})