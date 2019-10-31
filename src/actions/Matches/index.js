import {
  GET_MATCHES_LIST,
  GET_MATCHES_LIST_SUCCESS,
  GET_MATCHES_LIST_FAILURE
} from './actionTypes'


export const getList = (id) => ({
  type: GET_MATCHES_LIST,
  payload: { id }
})

export const getListSuccess = (data) => ({
  type: GET_MATCHES_LIST_SUCCESS,
  payload: data
})

export const getListFailure = () => ({
  type: GET_MATCHES_LIST_FAILURE
})
