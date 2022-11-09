//// Packages
import { fork, all } from 'redux-saga/effects'

// Saga
import usersSaga from '../features/users/sagas'
import authSaga from '../features/auth/sagas'

export default function* rootSaga(): Generator {
  yield all([fork(authSaga), fork(usersSaga)])
}
