import { URL } from "../utils/Database.js"

export const getProduct = async (id) => {
  try {
    const req = await fetch(URL + '/products/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": localStorage.getItem('userAuth') ?  JSON.parse(localStorage.getItem('userAuth')).token : ''
      }
    });
    const res = await req.json();
    return res
  }
  catch (e) {
    console.error(e);
  };
}
