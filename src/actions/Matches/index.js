import {
  GET_MATCHES_LIST,
  GET_MATCHES_LIST_SUCCESS,
  GET_MATCHES_LIST_FAILURE,
  ADD_NEW_MATCH,
  ADD_NEW_MATCH_FAILURE,
  ADD_NEW_MATCH_SUCCESS,
  ADD_NEW_MATCH_MODAL
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

export const addNewMatch = (data) => ({
  type: ADD_NEW_MATCH,
  payload: { data }
})

export const addNewMatchSuccess = (data) => ({
  type: ADD_NEW_MATCH_SUCCESS,
  payload: data
})

export const addNewMatchFailure = () => ({
  type: ADD_NEW_MATCH_FAILURE
})

export const addNewMatchModal = () => ({
  type: ADD_NEW_MATCH_MODAL
})