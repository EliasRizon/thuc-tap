import * as api from '../../api/api'
export const FETCH_PROVINCES = 'FETCH_PROVINCES'
export const FETCH_DISTRICTS = 'FETCH_DISTRICTS'

export const fetchProvinces = (object) => async (dispatch) => {
  try {
    const { data } = await api.fetchProvinces(object)
    dispatch({ type: FETCH_PROVINCES, payload: data.data })
  } catch (error) {
    console.log(error)
  }
}

export const fetchDistricts = (object) => async (dispatch) => {
  try {
    const { data } = await api.fetchDistricts(object)
    dispatch({ type: FETCH_DISTRICTS, payload: data.data })
  } catch (error) {
    console.log(error)
  }
}
