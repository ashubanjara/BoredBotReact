import handleGetApiActivity from './apiActivity';
import {takeEvery} from "redux-saga/effects";


export default function* rootSaga() {
    yield takeEvery("GET_API_ACTIVITY", handleGetApiActivity);
  }