
const firebaseConfig = { apiKey: "AIzaSyBrEYCJxBqnZbm46m57TGsQngVBPxCxIBw", authDomain: "kwitter-ba8cc.firebaseapp.com", databaseURL: "https://kwitter-ba8cc-default-rtdb.firebaseio.com", projectId: "kwitter-ba8cc", storageBucket: "kwitter-ba8cc.appspot.com", messagingSenderId: "911164873756", appId: "1:911164873756:web:a9116c0e37a62666d213d9", measurementId: "G-2P9GWCTDZS" };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
