import {combineReducers} from 'redux'
import getReducerObject from './reducer-factory'

const Reducer=combineReducers(getReducerObject())

export default Reducer