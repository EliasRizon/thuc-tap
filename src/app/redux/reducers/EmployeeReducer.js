export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES'
export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS'
export const FETCH_EMPLOYEES_FAILURE = 'FETCH_EMPLOYEES_FAILURE'
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
export const ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS'
export const ADD_EMPLOYEE_FAILURE = 'ADD_EMPLOYEE_FAILURE'

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
        employees: [...state.employees, ...action.data.data],
        isLoading: false,
        error: null,
      }
    case ADD_EMPLOYEE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}
