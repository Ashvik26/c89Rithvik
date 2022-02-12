function adduser () {
var username=document.getElementById("Player1_name_input");
localStorage.getItem("username",username);
window.location="Gamepage.html";
}