import React from 'react';
import {combineReducers} from 'redux'
import todoReducer from './Reducers/todoReducer'

export default combineReducers({
    reducer:todoReducer
})