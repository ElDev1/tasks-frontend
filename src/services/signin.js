import { API_URL } from './API_URL'

const signin = async (data) => {
  return fetch(`${API_URL}/api/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email: data.email, password: data.password })
  }).catch(err => console.error(err))
}

export default signin
