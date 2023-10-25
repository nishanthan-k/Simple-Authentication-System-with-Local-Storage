function saveUserData(event) {
    event.preventDefault();

    console.log("save");
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;
    console.log(username, password);
    let loginData = JSON.parse(localStorage.getItem("userData")) || {};

    // console.log(loginData);
    if (loginData.hasOwnProperty(username)) {
        alert("User already exists");
    } else {
        loginData[username] = password;
        localStorage.setItem("userData", JSON.stringify(loginData));
        alert('Account Created');
        setTimeout(() => {
            // all the below methods of redirecting to another page will work
            window.location.href = './index.html';
            // window.location.replace('./index.html');
            // window.location.assign('./index.html');
        }, 200);
    }
}

function checkUser() {
    let uname = document.getElementById("uname").value;
    let pass = document.getElementById("pass").value;

    let loginData = JSON.parse(localStorage.getItem("userData")) || {};

    if (loginData[uname] === pass) {
        console.log('correct credentials');
       window.location.assign('./successfulLogin.html');
    }
}
