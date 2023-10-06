function login() {
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("pin").value;

    if (user == "pedro" && pass == "1234") {
        window.location= "principal.html";
        
    }
    if(user == "ivan" && pass == "1212"){
    window.location= "ivan.html";
    }
}

