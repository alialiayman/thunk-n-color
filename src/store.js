import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todo from './reducer'

  
const store = createStore(todo, applyMiddleware(thunk))

export default store;
