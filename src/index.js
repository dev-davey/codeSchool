import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
const db = getDatabase(app);

document.getElementById("register").addEventListener("click", register);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid);
    console.log("fuck you");
    window.location.href = "./loggedin.html";
  } else {
    console.log("no one signed in");
  }
});

function register() {
  console.log("here");
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let fullname = document.getElementById("full_name").value;
  let username = document.getElementById("username").value;

  //validating input fields above
  if (email.length < 6 || password.lenth < 6) {
    alert("email or password failed");
    return;
  }
  if (fullname.length < 3) {
    alert("not a real name asshole");
    return;
  }
  if (username.length < 5) {
    alert("not a real name asshole");
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then(function () {
      console.log("here2");
      let user = auth.currentUser;
      const reference = ref(db, "users/" + user.uid);
      set(reference, {
        email: email,
        fullName: fullname,
        nickName: username,
        Level: 1,
        signUpDate: new Date(Date.now()),
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
