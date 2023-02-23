import { call, put } from 'redux-saga/effects'
import * as API from '../../api/api'
import {
  FETCH_DISTRICTS_FAILURE,
  FETCH_DISTRICTS_SUCCESS,
} from '../reducers/DistrictReducer'

export function* fetchDistrictSagas(action) {
  try {
    const { data } = yield call(async () => {
      return await API.fetchDistrictsApi(action.payload)
    })

    yield put({ type: FETCH_DISTRICTS_SUCCESS, data, payload: action.payload })
  } catch (error) {
    yield put({ type: FETCH_DISTRICTS_FAILURE, error })
  }
}
