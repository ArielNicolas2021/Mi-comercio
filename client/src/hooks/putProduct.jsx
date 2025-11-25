import { URL } from "../utils/Database.js"

export const putProduct = async (id, data) => {
  try {
    const req = await fetch(URL + '/products/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": localStorage.getItem('userAuth') ?  JSON.parse(localStorage.getItem('userAuth')).token : ''
      },
      body: JSON.stringify(data)
    });
    const res = await req.json();
    return res
  }
  catch (e) {
    console.log(e)
  }
}
