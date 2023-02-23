export const FETCH_DISTRICTS = 'FETCH_DISTRICTS'
export const FETCH_DISTRICTS_SUCCESS = 'FETCH_DISTRICTS_SUCCESS'
export const FETCH_DISTRICTS_FAILURE = 'FETCH_DISTRICTS_FAILURE'
export const CLEAR_DISTRICT_LIST = 'CLEAR_DISTRICT_LIST'

const initialState = {
  districts: [],
  isLoading: false,
  error: null,
}

export function DistrictReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DISTRICTS:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_DISTRICTS_SUCCESS:
      return {
        ...state,
        districts: action.data.data,
        isLoading: false,
        error: null,
      }
    case FETCH_DISTRICTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case CLEAR_DISTRICT_LIST:
      return {
        ...state,
        districts: [],
      }
    default:
      return state
  }
}
