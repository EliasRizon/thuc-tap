import { CLEAR_COMMUNE_LIST } from '../reducers/CommuneReducer'
import {
  CLEAR_DISTRICT_LIST,
  FETCH_DISTRICTS,
} from '../reducers/DistrictReducer'

export const fetchDistricts = (post) => ({
  type: FETCH_DISTRICTS,
  payload: post,
})

export const clearDistrictList = () => ({
  type: CLEAR_DISTRICT_LIST,
})

export const clearCommuneList = () => ({
  type: CLEAR_COMMUNE_LIST,
})
