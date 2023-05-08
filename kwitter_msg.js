//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyD413BXl89mVyVfZE0MRbhfyhWGaOj-aNo",
    authDomain: "kpkp1-8fa2c.firebaseapp.com",
    projectId: "kpkp1-8fa2c",
    storageBucket: "kpkp1-8fa2c.appspot.com",
    messagingSenderId: "587959512074",
    appId: "1:587959512074:web:066c8e197a2fd0662483f3"
  };

    firebase.initializeApp(firebaseConfig);
  
    user_n = localStorage.getItem("User name");
    rn = localStorage.getItem("r_n");

    function send(){
      var message = document.getElementById("message").value;

      firebase.database().ref(rn).push({
            name : usern, 
            msg : message, 
            like : 0
      });

      document.getElementById("message").value = " ";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
