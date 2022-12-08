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
  updateProfile,
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

document.getElementById("form").addEventListener("submit", (e) => {
e.preventDefault()
register()
})
  

function register() {
  console.log('hello')

  let email = document.getElementById("emailAddress").value;
  let password = document.getElementById("password").value;
  let firstname = document.getElementById("firstName").value;
  let lastname = document.getElementById('lastName').value;
  let phonenumber = document.getElementById('phoneNumber').value;
  let birthdate = document.getElementById('birthdayDate').value;
  let studentemail = document.getElementById('studentEmail').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(function () {
      updateProfile(auth.currentUser, {
        displayName: firstname,
      });
    })
    .then(function () {
      let user = auth.currentUser;
      let date = String(new Date());
      const reference = ref(db, "users/" + user.uid);
      console.log("this firing");
      set(reference, {
        email: email,
        studentemail: studentemail,
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        birthdate: birthdate,
        Level: 1,
        signUpDate: date,
        levelscompleted: 0,
        belt: 'white',
        paid: true,
        profileimg: '',
        subjects: {
          html: 0,
          js: 0,
          python: 0,
          scratch: 0,
          unity: 0,       
      }

      });
      setTimeout(newUserCreated, 2000);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function newUserCreated() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      window.location.href = "./loggedin.html";
    } else {
      console.log("no one signed in");
    }
  });
}
