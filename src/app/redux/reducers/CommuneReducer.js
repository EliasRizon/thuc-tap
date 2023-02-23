export const FETCH_COMMUNES = 'FETCH_COMMUNES'
export const FETCH_COMMUNES_SUCCESS = 'FETCH_COMMUNES_SUCCESS'
export const FETCH_COMMUNES_FAILURE = 'FETCH_COMMUNES_FAILURE'
export const CLEAR_COMMUNE_LIST = 'CLEAR_COMMUNE_LIST'

const initialState = {
  communes: [],
  isLoading: false,
  error: null,
}

export function CommuneReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMUNES:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_COMMUNES_SUCCESS:
      return {
        ...state,
        communes: action.data.data.filter(
          (item) => item.district.id === action.payload.district.id,
        ),
        isLoading: false,
        error: null,
      }
    case FETCH_COMMUNES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case CLEAR_COMMUNE_LIST:
      return {
        ...state,
        communes: [],
      }
    default:
      return state
  }
}
