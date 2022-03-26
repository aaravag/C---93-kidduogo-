function addUser(){
    User_1 = document.getElementById("User_Name").value;
    localStorage.setItem("User_Name" , User_1);
    window.location = "kidduoga_home.html";
};