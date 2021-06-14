let bntGoogle = document.querySelector("#btnGoogle");
let h1UserName = document.querySelector("#h1UserName");
let btnLogin = document.querySelector("#loginBtn");
let btnRegistro = document.querySelector("#registroBtn")
let modal = document.querySelector("#signUpModal");
let labelImage = document.querySelector("#labelLogin");

const btnClick = (btnOn, btnOff) => {
    btnOn.classList.add("btnOnClick");
    btnOff.classList.remove("btnOnClick");

}

labelImage.addEventListener('click', async() => {
    if (!firebase.auth().currentUser) {
        $('#signUpModal').modal('show')
    }
})

btnLogin.addEventListener("click", () => {
    btnClick(btnLogin, btnRegistro);
})

btnRegistro.addEventListener("click", () => {
    btnClick(btnRegistro, btnLogin);
})



bntGoogle.addEventListener('click', async() => {




    let user = await registerUserGoogle();
    h1UserName.innerHTML = user.displayName;

    console.log(user.photoURL);

    console.log("DONE!");
    $('#signUpModal').modal('hide')
    $("#labelLoginImage").toggleClass("fas fa-user fas fa-sign-out-alt fa-lg");
    $("#labelLoginTexto").html("Salir");



})