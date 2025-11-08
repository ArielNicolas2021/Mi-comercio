export const putProduct = async (code, data) => {
  try {
    const req = await fetch('http://localhost:1234/api/products/' + code, {
      method: 'PUT',
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
  }
}
