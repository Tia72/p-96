function au(){
   un = document.getElementById("user_name").value;
   localStorage.setItem("User name", un);
   window.location = "kwitter_room.html";
}