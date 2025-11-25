import { URL } from "../utils/Database.js"

export const getProducts = async () => {
  const userLogged = JSON.parse(localStorage.getItem('userAuth'));

  try {
    const req = await fetch(URL + '/products/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": userLogged.token
      }
    });
    const res = await req.json();
    const data = res.data;
    const filteredRes = data.filter(product => product.user_id == userLogged.username);
    return filteredRes;
  }
  catch (e) {
    console.error(e);
  };
}
