import { all, takeLatest } from 'redux-saga/effects'
import { FETCH_COMMUNES } from '../reducers/CommuneReducer'
import { FETCH_DISTRICTS } from '../reducers/DistrictReducer'
import { FETCH_PROVINCES } from '../reducers/ProvinceReducer'
import { fetchCommuneSagas } from './CommuneSagas'
import { fetchDistrictSagas } from './DistrictSagas'
import { fetchProvincesSaga } from './ProvinceSagas'

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_PROVINCES, fetchProvincesSaga),
    takeLatest(FETCH_DISTRICTS, fetchDistrictSagas),
    takeLatest(FETCH_COMMUNES, fetchCommuneSagas),
  ])
}
