import { FETCH_PROVINCES } from '../actions/ProvincesActions'

const initialState = {}

const ProvincesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROVINCES: {
      return { ...state, staffList: [...action.payload] }
    }
    default: {
      return state
    }
  }
}

export default ProvincesReducer
