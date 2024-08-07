import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { GET_DATA_WATCHER } from '../../constant';
import { getDataFailure, getDataSuccess } from '../../action';

function* onGetData(action) {

  const callApi = async () => {
    const { payload } = action;

    try {
      const response = await axios.get('https://api.housivity.com/api/v1/property', {
        params: {
          city: 'Gandhinagar',
          projectType: '["pgHostel"]',
          page: 1
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${payload.accessToken}`
        },
      });

      if (response.data) {
        return { response: response.data };
      } else {
        return { error: response.data };
      }
    } catch (error) {
      return { error: error.response ? error.response.data : error.message };
    }
  };

  const { response, error } = yield call(callApi);

  if (response) {
    yield put(getDataSuccess(response));
  } else {
    yield put(getDataFailure(error));
  }
}

export function* getDataActionWatcher() {
  yield takeLatest(GET_DATA_WATCHER, onGetData);
}