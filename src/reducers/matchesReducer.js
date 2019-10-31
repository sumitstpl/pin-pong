import {
  GET_MATCHES_LIST,
  GET_MATCHES_LIST_SUCCESS,
  GET_MATCHES_LIST_FAILURE
} from 'actions/Matches/actionTypes'

const initialState = {
  getListLoading: false,
  matchesList: []
}

const getList = (state, action) => {
  return ({
    ...state,
    getListLoading: true
  })
}

const getListSuccess = (state, action) => {
  console.log(action.payload)
  return ({
    ...state,
    getListLoading: false,
    matchesList: action.payload
  })
}

const getListFailed = (state, action) => ({
  ...state,
  getListLoading: false,
  matchesList: [
    {
    "_id": "5dbac51be974d9729d8c5593",
    "player1": "5dbac40fe974d9729d8c5592",
    "player2": "5dbac40fe974d9729d8c5591",
    "winner": "5dbac40fe974d9729d8c5591",
    "player1_info": {
    "_id": "5dbac40fe974d9729d8c5592",
    "name": "p3"
    },
    "player2_info": {
    "_id": "5dbac40fe974d9729d8c5591",
    "name": "p2"
    }
    },
    {
    "_id": "5dbac5ace974d9729d8c5596",
    "player1": "5dbac40fe974d9729d8c5592",
    "player2": "5dbac40fe974d9729d8c5591",
    "winner": "5dbac40fe974d9729d8c5591",
    "player1_info": {
    "_id": "5dbac40fe974d9729d8c5592",
    "name": "p3"
    },
    "player2_info": {
    "_id": "5dbac40fe974d9729d8c5591",
    "name": "p2"
    }
    },
    {
    "_id": "5dbac5b7e974d9729d8c5597",
    "player1": "5dbac40fe974d9729d8c5592",
    "player2": "5dbac40fe974d9729d8c5591",
    "winner": "5dbac40fe974d9729d8c5592",
    "player1_info": {
    "_id": "5dbac40fe974d9729d8c5592",
    "name": "p3"
    },
    "player2_info": {
    "_id": "5dbac40fe974d9729d8c5591",
    "name": "p2"
    }
    }
    ]
})

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MATCHES_LIST: return getList(state, action)
    case GET_MATCHES_LIST_SUCCESS: return getListSuccess(state, action)
    case GET_MATCHES_LIST_FAILURE: return getListFailed(state, action)
    default: return state
  }
}

export default authReducer
