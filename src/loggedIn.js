import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyowO8MpinyPrq4zBCdMmVtpXwiI1oPDE",
  authDomain: "code-school-5e320.firebaseapp.com",
  projectId: "code-school-5e320",
  storageBucket: "code-school-5e320.appspot.com",
  messagingSenderId: "1008936003472",
  appId: "1:1008936003472:web:973ff07422b394310af515",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const currentUser = auth.curentUser;
const db = getDatabase(app);
const logOutButton = document.getElementById("log-out");

logOutButton.addEventListener("click", logOut);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    document.getElementById(
      "user"
    ).textContent = `Welcome ${user.displayName} to your user profile`;
    console.log(user);
    console.log(currentUser);
  } else {
    window.location.href = "/login.html";
  }
});

function logOut() {
  signOut(auth)
    .then(() => {
      alert("signed Out Successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}
