import { all, call, put, takeLatest } from 'redux-saga/effects'
import { GET_MATCHES_LIST, ADD_NEW_MATCH } from 'actions/Matches/actionTypes'
import { getListSuccess, getListFailure, addNewMatchSuccess, addNewMatchFailure, addNewMatchModal } from 'actions/Matches'
import { getRequest, postRequest } from './request'
import URls from 'constants/urls'
import { pushNotification } from 'utils/notifications'

function* getJsonData(action) {
  const { id } = action.payload
  const url = `${URls.GET_MATCHES_LIST}/${id}`
  try {
    const response = yield call(getRequest, url)
    if (response && response.data && response.data.stats) {
      yield put(getListSuccess(response.data.stats))
    }
  } catch (error) {
    yield put(getListFailure())
  }
}

function* watchGetMatchesRequest() {
  yield takeLatest(GET_MATCHES_LIST, getJsonData)
}

// Add new match
function* addNewMatch(action) {
  const { data } = action.payload
  try {
    const response = yield call(postRequest, URls.ADD_NEW_MATCH_URL, data)
    if (response && response.status === 201 && response.data && response.data.message) {
      pushNotification(response.data.message, 'success')
      yield put(addNewMatchModal())
      yield put(addNewMatchSuccess(response.data.stats))
    }
  } catch (error) {
    yield put(addNewMatchFailure())
  }
}

function* watchAddNewMatch() {
  yield takeLatest(ADD_NEW_MATCH, addNewMatch)
}

export default function* sagas() {
  yield all([
    watchGetMatchesRequest(),
    watchAddNewMatch()
  ])
}
