import { applyMiddleware, createStore} from 'redux'
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import newsReducer from '../reducer/news'


const store =createStore(newsReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store