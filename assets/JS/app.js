let bntGoogle = document.querySelector("#btnGoogle");
let h1UserName = document.querySelector("#h1UserName");
let btnLogin = document.querySelector("#loginBtn");
let btnRegistro = document.querySelector("#registroBtn")
let modal = document.querySelector("#exampleModalLabel");
const btnClick = (btnOn, btnOff) => {
    btnOn.classList.add("btnOnClick");
    btnOff.classList.remove("btnOnClick");

}

btnLogin.addEventListener("click", () => {
    btnClick(btnLogin, btnRegistro);
})

btnRegistro.addEventListener("click", () => {
    btnClick(btnRegistro, btnLogin);
})

bntGoogle.addEventListener('click', async() => {
    let user = await registerUserGoogle();
    h1UserName.innerHTML = user.displayName;
    await validateWaterMeter("JiYcTadGxMZYLLJ");
    console.log(user.uid);

    console.log("DONE!");

})