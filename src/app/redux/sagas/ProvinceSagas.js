import { call, put } from 'redux-saga/effects'
import * as API from '../../api/api'
import {
  FETCH_PROVINCES_FAILURE,
  FETCH_PROVINCES_SUCCESS,
} from '../reducers/ProvinceReducer'

export function* fetchProvincesSaga(action) {
  try {
    const { data } = yield call(async () => {
      return await API.fetchProvincesApi(action.payload)
    })

    yield put({ type: FETCH_PROVINCES_SUCCESS, data })
  } catch (error) {
    yield put({ type: FETCH_PROVINCES_FAILURE, error })
  }
}
