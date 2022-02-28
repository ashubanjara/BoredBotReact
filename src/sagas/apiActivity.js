import { call, put } from 'redux-saga/effects';
import requestGetActivity from '../api/apiActivities'
import { setApiActivity } from '../actions';

// Get the activity from api

function* handleGetApiActivity() {

    try {
        const response = yield call(requestGetActivity);
        const data = response;
        yield put(setApiActivity(data));
    }

    catch (error) {
        console.log(error);
      }
}
  
export default handleGetApiActivity