import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
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

//dom selectors
const logOutButton = document.getElementById("log-out");
const boxArray = document.getElementsByClassName("profile-box");

logOutButton.addEventListener("click", logOut);

function loadPage() {
  onAuthStateChanged(auth, (user) => {
    //checking if logged in
    if (user) {
      const uid = user.uid;
      console.log(uid);
      const pullUserInfo = ref(db, "users/");

      onValue(pullUserInfo, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        for (let i in data) {
          if (i == uid) {
            console.log(data[i].email);
            createHtmlElement("h3", data[i].email, boxArray[0]);
          }
        }
      });

      document.getElementById(
        "user"
      ).textContent = `Welcome ${user.displayName} to your user profile`;
    } else {
      window.location.href = "/login.html";
    }
  });
}

function logOut() {
  signOut(auth)
    .then(() => {
      alert("signed Out Successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}

function createHtmlElement(htmlTag, htmlContent, appendTo) {
  let htmlElement = document.createElement(htmlTag);
  htmlElement.textContent = htmlContent.toString();
  appendTo.appendChild(htmlElement);
}

window.addEventListener("DOMContentLoaded", loadPage);
