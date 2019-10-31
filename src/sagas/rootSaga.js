import { all } from 'redux-saga/effects'
import playersSagas from './playersSagas'
import matchesSagas from './matchesSagas'

export default function* rootSaga() {
  yield all([
    playersSagas(),
    matchesSagas()
  ])
}
