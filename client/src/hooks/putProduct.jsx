export const putProduct = async (code, data) => {
  try {
    const req = await fetch('https://mi-comercio-three.vercel.app/api/products/' + code, {
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
