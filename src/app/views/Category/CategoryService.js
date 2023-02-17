import axios from 'axios'
import ConstantList from '../../appConfig'
import { call, put, takeLatest } from 'redux-saga/effects'
const API_PATH = ConstantList.API_ENPOINT + '/employees'

export const searchByPage = (searchObject) => {
  return axios.post(API_PATH + '/search', searchObject)
}

// export function* searchByPage1(searchObject) {
//   try {
//     const response = yield call(fetch, API_PATH + '/search', {
//       method: 'POST',
//       body: JSON.stringify(searchObject),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })

//     const responseData = yield response.json()
//     yield put(apiCallSuccess(responseData))
//   } catch (error) {
//     yield put(apiCallFailure(error.message))
//   }
// }

// export function* watchApiCall() {
//   yield takeLatest('API_CALL_REQUEST', searchByPage1)
// }

export const deleteItem = (id) => {
  return axios.delete(API_PATH + id)
}

export const saveItem = (item) => {
  return axios.post(API_PATH, item)
}
export const updateItem = (item) => {
  return axios.put(API_PATH + item.id, item)
}

export const getItemById = (id) => {
  return axios.get(API_PATH + id)
}

export const checkCode = (id, code) => {
  const config = { params: { id: id, code: code } }
  return axios.get(API_PATH + 'checkCode', config)
}
