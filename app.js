// app.js

//Initialize Firebase
var config = {
  apiKey: "AIzaSyCRbKUD7SCilBOFO69c6HhQCrziuVijHvo",
  authDomain: "compactoreleases.firebaseapp.com",
  databaseURL: "https://compactoreleases.firebaseio.com",
  projectId: "compactoreleases",
  storageBucket: "compactoreleases.appspot.com",
  messagingSenderId: "182048664057"
};

firebase.initializeApp(config);

var dbRef = firebase.database().ref();
console.log(dbRef);

var usersRef = dbRef.child('users');
console.log(usersRef);

var userListUI = document.querySelector(".userList");
console.log(userListUI);

usersRef.on('child_added', function(snap) {

  var user = snap.val();
  console.log(user);
  var $li = document.createElement('li');
  $li.innerHTML = user.name;
  $li.setAttribute('child-key', snap.key);
  $li.addEventListener('click', userClicked);
  userListUI.append($li);

});

function userClicked(e) { 
  alert("click");
  // var userID = e.target.getAttribute('child-key');
  // var userRef = dbRef.child('users/' + userID);
}
