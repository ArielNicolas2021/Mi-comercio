import { URL } from '../utils/Database'

export const register = async (user) => {
  try {
    const req = await fetch(URL + '/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const res = await req.json()
    return res
  }
  catch (e) {
    console.log(e)
  }
}
