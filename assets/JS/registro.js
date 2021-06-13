
const registerUser = (email, password) => {
    let user = null;
    let db = firebase.firestore();
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in

            user = userCredential.user;
            db.collection("Users").doc(user.uid).set({
                email: user.email,
            }).then(() => {
                console.log("Document successfully written!");
            }).catch((error) => {
                console.error("Error writing document: ", error);
            })
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;


            // ..
        });
    return user;
}

const registerUserGoogle = () => {
    console.log('Enter');
    
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
        .signInWithRedirect(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(errorMessage);
            
        });
}