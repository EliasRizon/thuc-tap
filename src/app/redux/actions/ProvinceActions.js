import { FETCH_PROVINCES } from '../reducers/ProvinceReducer'

export const fetchProvinces = (post) => ({
  type: FETCH_PROVINCES,
  payload: post,
})
