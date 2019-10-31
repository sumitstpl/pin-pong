import {
  GET_PLAYERS_LIST,
  GET_PLAYERS_LIST_SUCCESS,
  GET_PLAYERS_LIST_FAILURE
} from './actionTypes'


export const getList = () => ({
  type: GET_PLAYERS_LIST
})

export const getListSuccess = (data) => ({
  type: GET_PLAYERS_LIST_SUCCESS,
  payload: data
})

export const getListFailure = () => ({
  type: GET_PLAYERS_LIST_FAILURE
})
