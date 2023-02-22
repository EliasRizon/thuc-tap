export const FETCH_PROVINCES = 'FETCH_PROVINCES'
export const FETCH_PROVINCES_SUCCESS = 'FETCH_PROVINCES_SUCCESS'
export const FETCH_PROVINCES_FAILURE = 'FETCH_PROVINCES_FAILURE'

const initialState = {
  provinces: [],
  isLoading: false,
  error: null,
}

export function ProvinceReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROVINCES:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_PROVINCES_SUCCESS:
      return {
        ...state,
        provinces: action.data.data,
        isLoading: false,
        error: null,
      }
    case FETCH_PROVINCES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}
