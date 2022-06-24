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
const logOutButton = document.getElementById("log-out");

logOutButton.addEventListener("click", logOut);

onAuthStateChanged(auth, (user) => {
  //checking if logged in
  if (user) {
    const uid = user.uid;
    const pullUserInfo = ref(db, "users/");

    onValue(pullUserInfo, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      // let keys = Object.keys(data);
      //console.log(keys);

      // keys.forEach((ele) => {
      //   if (ele == uid) {
      //     console.log(ele);
      //   }
      // });
    });

    //   for (const key in data) {
    //     if (key == user.uid) {
    //       const displayProfileHeading = createHtmlElement(`
    //     <ul>
    //       <li>Level: ${user.uid.level}</li>
    //       <li>Name: ${user.uid.fullName}</li>
    //       <li>User Name: ${user.uid.nickName}</li>
    //       <li>Sign Up Date: ${user.uid.signUpDate}</li>
    //     </ul>
    //   `);
    //       document
    //         .getElementsByClassName("profile-container")[0]
    //         .appendChild(displayProfileHeading);
    //     }
    //   }
    // };

    document.getElementById(
      "user"
    ).textContent = `Welcome ${user.displayName} to your user profile`;
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

function createHtmlElement(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim;
  return template.content.firstElementChild;
}
