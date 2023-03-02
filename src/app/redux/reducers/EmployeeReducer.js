export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES'
export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS'
export const FETCH_EMPLOYEES_FAILURE = 'FETCH_EMPLOYEES_FAILURE'
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
export const ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS'
export const ADD_EMPLOYEE_FAILURE = 'ADD_EMPLOYEE_FAILURE'
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'
export const DELETE_EMPLOYEE_SUCCESS = 'DELETE_EMPLOYEE_SUCCESS'
export const DELETE_EMPLOYEE_FAILURE = 'DELETE_EMPLOYEE_FAILURE'

const initialState = {
  employees: [],
  isLoading: false,
  error: null,
}

export function EmployeeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: action.data.data,
        isLoading: false,
        error: null,
      }
    case FETCH_EMPLOYEES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case ADD_EMPLOYEE:
      return {
        ...state,
        isLoading: true,
      }
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: action.payload.data,
        isLoading: false,
        error: null,
      }
    case ADD_EMPLOYEE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case DELETE_EMPLOYEE:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case DELETE_EMPLOYEE_SUCCESS:
      const id = action.payload
      const updatedEmployees = state.employees.filter((item) => item.id !== id)
      return {
        ...state,
        employees: updatedEmployees,
        isLoading: false,
        error: null,
      }
    case DELETE_EMPLOYEE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}
