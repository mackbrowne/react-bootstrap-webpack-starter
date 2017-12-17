export const loginRequest = email =>
  fetch(`${process.env.REACT_APP_API_URL}`, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(
      users =>
        new Promise((resolve, reject) => {
          const user = users.find(item => item.email === email);
          return user ? resolve(user) : reject();
        })
    );
