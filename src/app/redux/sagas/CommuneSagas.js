import { call, put } from 'redux-saga/effects'
import * as API from '../../api/api'
import {
  FETCH_COMMUNES_FAILURE,
  FETCH_COMMUNES_SUCCESS,
} from '../reducers/CommuneReducer'

export function* fetchCommuneSagas(action) {
  try {
    console.log(action.payload)
    const { data } = yield call(async () => {
      return await API.fetchCommunesApi({})
    })

    yield put({ type: FETCH_COMMUNES_SUCCESS, data, payload: action.payload })
  } catch (error) {
    yield put({ type: FETCH_COMMUNES_FAILURE, error })
  }
}
