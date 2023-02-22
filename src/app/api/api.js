import axios from 'axios'
import ConstantList from '../appConfig'

const API = axios.create({ baseURL: ConstantList.API_ENPOINT })

// Location
export const fetchProvincesApi = (post) => API.post('/provinces/search', post)
export const fetchDistrictsApi = (post) => API.post('/districts/search', post)
