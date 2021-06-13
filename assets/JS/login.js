
const loginUser = (email, password) => {
    let user = null;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            user = userCredential.user;
            // ...
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
        });
    return user;
}

const loginUserGoogle = ()=>{
    let user = null;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
     user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  return user;
}