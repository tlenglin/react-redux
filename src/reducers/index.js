//combine reducer, export une seule fonction
import {combineReducers} from 'redux'
import {counters} from './counters'
import {routerReducer} from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    counters,
    routing: routerReducer,
    form: formReducer
})

