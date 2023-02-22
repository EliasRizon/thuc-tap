import { all, takeLatest } from 'redux-saga/effects'
import { FETCH_PROVINCES } from '../reducers/ProvinceReducer'
import { fetchProvincesSaga } from './ProvinceSagas'

export default function* rootSaga() {
  yield all([takeLatest(FETCH_PROVINCES, fetchProvincesSaga)])
}
