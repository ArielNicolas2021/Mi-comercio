import { URL } from "../utils/Database.js"

const getTickets = async () => {
  const userLogged = JSON.parse(localStorage.getItem('userAuth'));

  try {
    const req = await fetch(URL + '/tickets/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": userLogged.token
      }
    });
    const res = await req.json();
    const data = res.data;
    const filteredRes = data.filter(ticket => ticket.user_id == userLogged.username);
    return filteredRes;
  }
  catch (e) {
    console.error(e);
  };
}

export { getTickets };