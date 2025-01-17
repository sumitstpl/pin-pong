import { all, call, put, takeLatest } from 'redux-saga/effects'
import { GET_PLAYERS_LIST } from 'actions/Players/actionTypes'
import { getListSuccess, getListFailure } from 'actions/Players'
import { getRequest } from './request'
import URls from 'constants/urls'

function* getJsonData(action) {
  try {
    const response = yield call(getRequest, URls.GET_PLAYERS_LIST)
    if (response && response.data && response.data.users) {
      yield put(getListSuccess(response.data.users))
    }
  } catch (error) {
    yield put(getListFailure())
  }
}

function* watchGetPlayersRequest() {
  yield takeLatest(GET_PLAYERS_LIST, getJsonData)
}

export default function* sagas() {
  yield all([
    watchGetPlayersRequest()
  ])
}
