/** @format */

let userData = [
  {
    name: "John",
    email: "john@example.com",
    password: "password",
  },

  {
    name: "Mary",
    email: "mary@example.com",
    password: "password",
  },
];

function checkForm() {
  const login = document.getElementById("login");
  const signup = document.getElementById("signup");
  const formBtn = document.getElementById("form-btn");
  const name = document.getElementById("name");
  const confirmPassword = document.getElementById("confirm-password");

  if (login.checked) {
    name.disabled = true;
    confirmPassword.disabled = true;
    name.style.display = "none";
    confirmPassword.style.display = "none";
    formBtn.innerHTML = "Log in";
  } else {
    name.disabled = false;
    confirmPassword.disabled = false;
    name.style.display = "";
    confirmPassword.style.display = "";
    formBtn.innerHTML = "Sign up";
  }
}

let submitForm = document.getElementById("submit-form");

submitForm.addEventListener("submit", async (event) => {
  const login = document.getElementById("login");
  const signup = document.getElementById("signup");
  const formBtn = document.getElementById("form-btn");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  event.preventDefault();

  if (login.checked) {
    const result = await validateUserCredential(email.value, password.value);
    if (result === false) {
      alert("Please enter valid email address  and password");
    } else {
      alert(`Succcessfully loggged in with ${email.value}`);
    }
  }

  if (signup.checked) {
    const result = createNewUser(name.value, email.value, password.value);

    if (result === true) {
      alert(`User already exists with email "${email.value}`);
    } else {
      alert("Created successfully new user with email " + email.value);
    }
  }
});

async function validateUserCredential(email, password) {
  let result;
  userData.forEach((e) => {
    if (email == e.email && password == e.password) {
      result = true;
    }
  });
  return result ? result : false;
}

function createNewUser(name, email, password) {
  var user = { name: name, email: email, password: password };
  var result = userExists(userData, user);
  return result;
}

function userExists(users, user) {
  let result;
  users.forEach((e) => {
    if (e.email === user.email) {
      result = true;
    }
  });
  return result ? result : false;
}
