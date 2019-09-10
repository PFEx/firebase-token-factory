const firebase = require("firebase/app");
require("firebase/auth");

const firebaseConfig = require("../firebase-config.json");

firebase.initializeApp(firebaseConfig);

const firebaseAuth = customToken => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithCustomToken(customToken)
      .catch(error => {
        reject(error);
      })
      .then(() => {
        firebase
          .auth()
          .currentUser.getIdToken(/* forceRefresh */ true)
          .then(idToken => {
            resolve(idToken);
          })
          .catch(error => {
            reject(error);
          });
      });
  });
};

export default async function tokenGenerator(customToken) {
  try {
    return await firebaseAuth(customToken);
  } catch (error) {
    return error;
  }
}
