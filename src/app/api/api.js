import axios from 'axios'
import ConstantList from '../appConfig'

const API = axios.create({ baseURL: ConstantList.API_ENPOINT })

// Staff
export const fetchProvinces = (data) => API.post('/provinces/search', data)
