import { URL } from "../utils/Database.js"

export const postTicket = async (data) => {
  try {
    const req = await fetch(URL + '/tickets/', {
      method: 'POST',
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
  };
}
