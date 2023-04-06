import { API_URL } from './API_URL'

export const signin = (data) => {
  return fetch(`${API_URL}/api/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email: data.email, password: data.password })
  })
    .then(res => res.json())
    .catch(err => console.error(err))
}
