// DOM elements
const usersTableBody = document.getElementById("users-table-body");

let usersTable = [];

const button = document.getElementById("button");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    console.log(users);
    users.forEach((element) => {
      usersTable.push(element);
    });
    viewUsersTable();
  });

const viewUsersTable = () => {
  hideTable();
  usersTable.forEach((user) => {
    const tr = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.innerText = `${user.name}`;
    tr.appendChild(nameTd);

    const emailTd = document.createElement("td");
    emailTd.innerText = `${user.email}`;
    // console.log(user.email);
    tr.appendChild(emailTd);

    const addressTd = document.createElement("td");
    addressTd.innerText = `${user.address.street}, ${user.address.city}`;
    tr.appendChild(addressTd);

    usersTableBody.appendChild(tr);
  });
};

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

  usersTable.unshift(newUser);
  console.log(usersTable);
  viewUsersTable();

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
