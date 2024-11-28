const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", validateLoginForm);
function validateLoginForm(event) {

  event.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");


  const email = emailInput.value;
  const password = passwordInput.value;


  const validEmail = "ishusrivastava4703@gmail.com";
  const validPassword = "12345678";


  if (email === validEmail && password === validPassword) {

    alert("Login successfully");
    window.location = "success.html";
  } else {
    alert("Invalid email or password");
    emailInput.value = "";
    passwordInput.value = "";
  }
}
