import { API_URL } from './API_URL'

export const getData = async () => {
  return fetch(`${API_URL}/api/tasks`)
    .then(res => res.json())
    .catch(err => console.log(err))
}
