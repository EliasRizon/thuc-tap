import * as api from '../../api/api'
export const FETCH_PROVINCES = 'FETCH_PROVINCES'

export const fetchProvinces = (object) => async (dispatch) => {
  try {
    const { data } = await api.fetchProvinces(object)
    console.log(data)
    // dispatch({ type: FETCH_PROVINCES, payload: data })
  } catch (error) {
    console.log(error)
  }
}
