import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  FETCH_EMPLOYEES,
} from '../reducers/EmployeeReducer'

export const fetchEmployees = (post) => ({
  type: FETCH_EMPLOYEES,
  payload: post,
})

export const addEmployee = (post) => ({
  type: ADD_EMPLOYEE,
  payload: post,
})

export const deleteEmployee = (id) => ({
  type: DELETE_EMPLOYEE,
  payload: id,
})