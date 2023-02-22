import axios from 'axios'
import ConstantList from '../appConfig'

const API = axios.create({ baseURL: ConstantList.API_ENPOINT })

// Location
export const fetchProvinces = (data) => API.post('/provinces/search', data)
export const fetchDistricts = (data) => API.post('/districts/search', data)
