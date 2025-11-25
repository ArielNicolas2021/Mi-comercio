import { URL } from "../utils/Database.js"

export const login = async (user) => {
  try {
    const req = await fetch(URL + '/users/login', {
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
