export const postTicket = async (data) => {
  try {
    const req = await fetch('http://localhost:1234/api/tickets/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
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
