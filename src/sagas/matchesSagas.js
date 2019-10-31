import { all, call, put, takeLatest } from 'redux-saga/effects'
import { GET_MATCHES_LIST } from 'actions/Matches/actionTypes'
import { getListSuccess, getListFailure } from 'actions/Matches'
import { getRequest } from './request'
import { pushNotification } from 'utils/notifications'
import URls from 'constants/urls'

function* getJsonData(action) {
  const { id } = action.payload
  const url = `${URls.GET_MATCHES_LIST}/${id}`
  try {
    const response = yield call(getRequest, URls.GET_MATCHES_LIST)
    if (response.data) {
      pushNotification('Get data success', 'success', 'TOP_CENTER', 1000)
      yield put(getListSuccess(response.data))
    }
  } catch (error) {
    pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000)
    yield put(getListFailure())
  }
}

function* watchGetMatchesRequest() {
  yield takeLatest(GET_MATCHES_LIST, getJsonData)
}

export default function* sagas() {
  yield all([
    watchGetMatchesRequest()
  ])
}
