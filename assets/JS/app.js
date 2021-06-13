
// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyAKujnQ66H5SuApJ8bv7VcEC1PjypgoLmQ",
  authDomain: "dbaquametrics.firebaseapp.com",
  databaseURL: "https://dbaquametrics-default-rtdb.firebaseio.com",
  projectId: "dbaquametrics",
  storageBucket: "dbaquametrics.appspot.com",
  messagingSenderId: "534745976249",
  appId: "1:534745976249:web:b6575d822166e80f5c7a68"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let btnSignIn = document.querySelector("#btnSignIn");
let h1UserName = document.querySelector("#h1UserName");

btnSignIn.addEventListener("click", () => asyncRegister());

async function asyncRegister() {
  let user = await registerUserGoogle();
  console.log({user});

}




