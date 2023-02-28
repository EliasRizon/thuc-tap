import axios from 'axios'
import ConstantList from '../appConfig'

const API = axios.create({ baseURL: ConstantList.API_ENPOINT })

// Provinces
export const fetchProvincesApi = (post) => API.post('/provinces/search', post)

// Districts
export const fetchDistrictsApi = (post) => API.post('/districts/search', post)

// Communes
export const fetchCommunesApi = (post) => API.post('communes/search', post)

// Employee
export const addEmployeeApi = (post) => API.post('employees', post)

export const fetchEmployeesApi = (post) => API.post('employees/search', post)
