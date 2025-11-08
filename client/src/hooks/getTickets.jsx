export const getTickets = async () => {
  try {
    const req = await fetch('http://localhost:1234/api/tickets/', {
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
