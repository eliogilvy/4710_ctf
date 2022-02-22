
function do_something() {
    alert("flag{y0u_f0und_yet_an0th3er_fl4g}");
}
function login() {
    var user = document.getElementById('uname').value;
    var pass = document.getElementById('psw').value;
    if (user === 'admin' && pass === 'password'){
        window.location='../pages/login_success.html'
    }
    else if (user !== 'admin'){
        document.getElementById('error').innerHTML = "Incorrect Username"
    }
    else{
        document.getElementById('error').innerHTML = "Incorrect Password"
    }
}