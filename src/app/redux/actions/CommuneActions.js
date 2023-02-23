import { FETCH_COMMUNES } from '../reducers/CommuneReducer'

export const fetchCommunes = (post) => ({
  type: FETCH_COMMUNES,
  payload: post,
})
