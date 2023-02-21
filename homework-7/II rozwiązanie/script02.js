// Pobierz listę użytkowników z API i wyświetl ich dane na stronie
let usersContainer = [];
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    let usersContainer = document.querySelector(".users-container");

    // Tworzenie karty dla każdego użytkownika
    users.forEach((user) => {
      const card = document.createElement("div");
      card.classList.add("user-card");
      card.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Adres:</strong> ${user.address.street}, ${user.address.city}</p>
    `;
      usersContainer.appendChild(card);
    });
  })
  .catch((error) => console.error(error));

// DOM elements
// const usersTableBody = document.getElementById("users-table-body");

// let usersTable = [];

// const button = document.getElementById("button");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//     users.forEach((element) => {
//       usersTable.push(element);
//     });
//     viewUsersTable();
//   });
// const viewUsersTable = () => {
//   // hideTable();
//   usersTable.forEach((user) => {
//     const divJsContentRow = document.createElement("div");

//     const divName = document.createElement("div");
//     divName.innerText = `${user.name}`;
//     divJsContentRow.appendChild(divName);

//     const divMail = document.createElement("div");
//     divMail.innerText = `${user.email}`;
//     // console.log(user.email);
//     divJsContentRow.appendChild(divMail);

//     const divAdress = document.createElement("div");
//     divAdress.innerText = `${user.address.street}, ${user.address.city}`;
//     divJsContentRow.appendChild(divAdress);

//     usersTableBody.appendChild(divJsContentRow);
//   });
// };

const addingUserData = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let street = document.getElementById("street").value;
  let city = document.getElementById("city").value;

  if (!name || !email || !street || !city) {
    alert("Nie wypełniono wszystkich pól, Ciuluu!");
    return;
  }

  const newUser = {
    name: "",
    email: "",
    address: {
      street: "",
      city: "",
    },
  };
  newUser.name = name;
  newUser.email = email;
  newUser.address.street = street;
  newUser.address.city = city;
  console.log(newUser);

  usersContainer.unshift(newUser);
  console.log(usersContainer);
  // viewUsersTable();

  //dodawanie do local storage
  localStorage.setItem(newUser, JSON.stringify(newUser));

  document.getElementById("name").value = ""; //dlaczego nie zadziała przez zmienną?
  document.getElementById("email").value = "";
  document.getElementById("street").value = "";
  document.getElementById("city").value = "";
};

function hideTable() {
  while (usersTableBody.firstChild) {
    usersTableBody.removeChild(usersTableBody.firstChild);
  }
}

button.addEventListener("click", addingUserData);
