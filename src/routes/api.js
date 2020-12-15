export const fetchJSON = async (filename) => {
  const endpoint = `http://localhost:2000/data/${filename}`;
  const res = await fetch(endpoint);
  const { vectors } = await res.json();
  return vectors;
};

// OBJ sent (string)
//     dataSet (string)
export const isSentBelief = async (sent, dataSet) => {
  const endpoint = `http://localhost:2000/nearest/sentence`;
  const res = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({ sent, dataSet }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).catch((err) => console.log('ERR', err));

  const nearest = await res.json();
  return nearest;
};

export const getSentsFromUrl = async (url) => {
  const endpoint = `http://localhost:2000/webpage/parse`;
  const res = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({ url }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).catch((err) => console.log('ERR', err));

  const data = await res.json();
  return data;
};

export const saveSent = async (sent, belief) => {
  const endpoint = `http://localhost:2000/data/belief`;
  const res = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({ sent, belief }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).catch((err) => console.log('ERR', err));

  const data = await res.text();
  return data;
};
