

let btnSignIn = document.querySelector("#btnSignIn");
let h1UserName = document.querySelector("#h1UserName");
let btnLogin = document.querySelector("#loginBtn");
let btnRegistro = document.querySelector("#registroBtn")

const btnClick = (btnOn, btnOff) => {
  btnOn.classList.add("btnOnClick");
  btnOff.classList.remove("btnOnClick");

}

btnLogin.addEventListener("click", () => {
  btnClick(btnLogin,btnRegistro);
})

btnRegistro.addEventListener("click", () => {
  btnClick(btnRegistro,btnLogin);
})

btnSignIn.addEventListener('click', async () => {
  let user = await registerUserGoogle();
  console.log({ user });
  h1UserName.innerHTML = user.displayName;
})





