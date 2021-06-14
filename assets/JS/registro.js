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
            let errorCode = error.code;
            let errorMessage = error.message;


            // ..
        });
    return user;
}



const registerUserGoogle = async() => {
    console.log('Enter');

    let provider = new firebase.auth.GoogleAuthProvider();
    let user = null;
    await firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            let credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = credential.accessToken;
            // The signed-in user info.
            user = result.user;


            // ...
        }).catch((error) => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
            console.log(errorMessage);

        });


    return Promise.resolve(user);
}