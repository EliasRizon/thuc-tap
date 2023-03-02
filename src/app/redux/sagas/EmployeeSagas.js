import { call, put } from 'redux-saga/effects'
import * as API from '../../api/api'
import {
  ADD_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAILURE,
  DELETE_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  FETCH_EMPLOYEES_SUCCESS,
} from '../reducers/EmployeeReducer'

export function* fetchEmployeesSaga(action) {
  try {
    const { data } = yield call(async () => {
      return await API.fetchEmployeesApi(action.payload)
    })

    yield put({ type: FETCH_EMPLOYEES_SUCCESS, data })
  } catch (error) {
    yield put({ type: FETCH_EMPLOYEES_FAILURE, error })
  }
}

export function* addEmployeeSaga(action) {
  try {
    yield call(async () => {
      return await API.addEmployeeApi(action.payload)
    })
    const { data } = yield call(async () => {
      return await API.fetchEmployeesApi({})
    })

    yield put({ type: ADD_EMPLOYEE_SUCCESS, payload: data })
  } catch (error) {
    yield put({ type: ADD_EMPLOYEE_FAILURE, error })
  }
}

export function* deleteEmployeeSaga(action) {
  try {
    const employeeId = action.payload

    yield call(async () => {
      return await API.deleteEmployeeApi(action.payload)
    })

    yield put({ type: DELETE_EMPLOYEE_SUCCESS, payload: employeeId })
  } catch (error) {
    yield put({ type: DELETE_EMPLOYEE_FAILURE, error })
  }
}
