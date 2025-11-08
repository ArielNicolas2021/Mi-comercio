export const getProduct = async (code) => {
  try {
    const req = await fetch('http://localhost:1234/api/products/' + code, {
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
