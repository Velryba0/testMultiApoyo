// Packages
import { call, put, takeEvery } from 'redux-saga/effects';

// Utils
import { getUsers } from '../../../../utils/API';

// Actions
import { requestUsers, receiveUsers, errorUsers } from '../reducers';

// Types
import { UserTypes } from '../reducers';

export function* loadUsers() {
    try {
        const users: UserTypes[] = yield call(getUsers)
        yield put(receiveUsers(users))
    } catch (error) {
        yield put(errorUsers())
    }
}

export default function* usersSaga() {
    yield takeEvery(requestUsers, loadUsers)
}
