export const getTicket = async (id) => {
  try {
    const req = await fetch('https://mi-comercio-three.vercel.app/api/tickets/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const res = await req.json();
    return res
  }
  catch (e) {
    console.error(e);
  };
}
