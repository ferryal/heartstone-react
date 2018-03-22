import {combineReducers} from 'redux'
import CardReducer from './CardReducer'
import CardListReducer from './CardListReducer'

const rootReducers = combineReducers({
  heroinfo: CardReducer,
  listhero: CardListReducer
})

export default rootReducers;
