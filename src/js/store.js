import {createStore} from 'redux'
import TodoReducer from './reducer/TodoReducer'

const store =createStore(TodoReducer)

export default store;