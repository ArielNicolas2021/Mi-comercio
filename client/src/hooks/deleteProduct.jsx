export const deleteProduct = async (code) => {
  const LINK = 'https://mi-comercio-three.vercel.app/api'
  // const LINK = 'http://localhost:1234/api'
  try {
    const req = await fetch(LINK + '/products/' + code, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const res = await req.json();
    return res;
  }
  catch (e) {
    console.log(e);
  };
};
