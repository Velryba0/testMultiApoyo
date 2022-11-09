// Packages
import { call, put, takeEvery } from "redux-saga/effects";

// Utils
import { getAuth } from "../../../../utils/API";

// Actions
import { requestAuth, receiveAuth, errorAuth } from "../reducers";

// Types
import { AuthTypes } from "../reducers";

export function* loadAuth(data: any) {
  try {
    const authToken: AuthTypes = yield call(getAuth, data);

    if(authToken.error) {
        yield put(errorAuth(authToken.error));    
    } else {
        yield put(receiveAuth(authToken));
    }

  } catch (error) {
    console.log(error, 'ERROR AUTH!!!!')
    yield put(errorAuth(error));
  }
}

export default function* authSaga() {
  yield takeEvery(requestAuth, loadAuth);
}
