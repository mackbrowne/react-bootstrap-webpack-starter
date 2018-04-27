const checkStatus = response =>
  response.ok
    ? Promise.resolve(response)
    : response.json().then(err => Promise.reject(err));

const parseJSON = response => response.json();

// TODO: Integrate with country dropdown component
export const fetchPlaces = page =>
  fetch(`https://thisopenspace.com/lhl-test?page=${page}`)
    .then(checkStatus)
    .then(parseJSON);
