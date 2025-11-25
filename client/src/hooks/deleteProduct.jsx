import { URL } from "../utils/Database.js"

export const deleteProduct = async (id) => {
  const userLogged = JSON.parse(localStorage.getItem('userAuth'));

  try {
    const req = await fetch(URL + '/products/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": userLogged.token
      }
    });
    const res = await req.json();
    return res;
  }
  catch (e) {
    console.log(e);
  };
};
