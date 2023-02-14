// console.log("hello");
// fetch("https://jsonplaceholder.typicode.com/").then((result) => {
//   console.log(result);
// });

// fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
//   console.log(result);
// });

// pobranie danych z endpointu i dodanie ich do tabeli w dokumencie HTML

// DOM elements
const usersTableBody = document.getElementById("users-table-body");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const usersTableBody = document.getElementById("users-table-body");
    users.forEach((user) => {
      const tr = document.createElement("tr");
      const nameTd = document.createElement("td");
      nameTd.innerText = `${user.name}`;
      tr.appendChild(nameTd);
      const emailTd = document.createElement("td");
      emailTd.innerText = `${user.email}`;
      tr.appendChild(emailTd);
      const addressTd = document.createElement("td");
      addressTd.innerText = `${user.address.street}, ${user.address.city}`;
      tr.appendChild(addressTd);
      usersTableBody.appendChild(tr);
    });
  })
  .catch((error) => console.error(error));
