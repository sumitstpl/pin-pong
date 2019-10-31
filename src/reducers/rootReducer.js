import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import playersReducer from './playersReducer'
import matchesReducer from './matchesReducer'
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
  routing: routerReducer,
  players: playersReducer,
  matches: matchesReducer,
  form: formReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_ALL_DATA') {
    state = {
      players: state.players
    }
  }
  return appReducer(state, action)
}

export default rootReducer
