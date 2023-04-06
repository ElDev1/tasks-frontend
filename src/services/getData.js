import { API_URL } from './API_URL'

export const getData = async () => {
  return fetch(`${API_URL}/api/tasks`)
    .catch(err => console.log(err))
}
