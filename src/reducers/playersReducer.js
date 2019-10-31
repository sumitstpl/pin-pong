import {
  GET_PLAYERS_LIST,
  GET_PLAYERS_LIST_SUCCESS,
  GET_PLAYERS_LIST_FAILURE
} from 'actions/Players/actionTypes'

const initialState = {
  getListLoading: false,
  playersList: []
}

const getList = (state, action) => ({
  ...state,
  getListLoading: true
})

const getListSuccess = (state, action) => {
  return ({
    ...state,
    getListLoading: false,
    playersList: action.payload
  })
}

const getListFailed = (state, action) => ({
  ...state,
  getListLoading: false,
  playersList: [{"_id":"5dbac40fe974d9729d8c5590","name":"p1","user_match_info":{"win_ratio":0}},{"_id":"5dbac40fe974d9729d8c5591","name":"p2","user_match_info":{"win_ratio":20}},{"_id":"5dbac40fe974d9729d8c5592","name":"p3","user_match_info":{"win_ratio":90}}]
})

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYERS_LIST: return getList(state, action)
    case GET_PLAYERS_LIST_SUCCESS: return getListSuccess(state, action)
    case GET_PLAYERS_LIST_FAILURE: return getListFailed(state, action)
    default: return state
  }
}

export default authReducer
