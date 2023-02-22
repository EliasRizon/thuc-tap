import { FETCH_DISTRICTS, FETCH_PROVINCES } from '../actions/LocationActions'

const initialState = { provinceList: [], districtList: [] }

const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROVINCES: {
      return { ...state, provinceList: [...action.payload] }
    }
    case FETCH_DISTRICTS: {
      return { ...state, districtList: [...action.payload] }
    }
    default: {
      return state
    }
  }
}

export default LocationReducer
