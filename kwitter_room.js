function l_o(){
    window.location = "kwitter.html";
}

function cr(){
    un = document.getElementById("u_n").value;
}

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD413BXl89mVyVfZE0MRbhfyhWGaOj-aNo",
    authDomain: "kpkp1-8fa2c.firebaseapp.com",
    projectId: "kpkp1-8fa2c",
    storageBucket: "kpkp1-8fa2c.appspot.com",
    messagingSenderId: "587959512074",
    appId: "1:587959512074:web:066c8e197a2fd0662483f3"
  };
  
    usern = localStorage.getItem("User name");
    document.getElementById("welcome").innerHTML = "WELCOME" + usern + " 🙂 !";

  function addroom(){
      r_n = document.getElementById("r_n").value;
  
      firebase.database().ref("/").child(r_n).update({
          pourpose : "TO ADD THE ROOM NAME"
      });
      localStorage.setItem("Room Name", r_n);

      window.location = "";
  }
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML ="";
snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
      console.log(Room_names);
      var rona = "<div class='rome' id=" + r_n + "onclick='redirectToRoomName(this.id)'>#" + r_n + "</div><hr>";
      document.getElementById("d_r").innerHTML += rona;
//End code
      });});}
getData();

function redirectToRoomName(name){
  localStorage.setItem("r_n", name);
  window.location = "";
}

