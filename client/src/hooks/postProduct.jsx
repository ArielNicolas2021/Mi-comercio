export const postProduct = async (data) => {
  const LINK = 'https://mi-comercio-three.vercel.app/api'
  // const LINK = 'http://localhost:1234/api'
  try {
    const req = await fetch(LINK + '/products/', {
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
