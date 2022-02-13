function isValid() {
    var username = document.getElementById('username').value;
    username = username.replace(/\s/g, "");

    var injection = false;
    temp = username.substring(3, username.length-1);

    if (temp === "true"){
        document.getElementById('answer').innerHTML = "<--flag{sq1-1nj2xti0n-y0u-g0t-1t}-->";
    }else{
        const sides = temp.split("=");

        if(sides[0] === sides[1]){
            injection = true;
            console.log("this");
        }

        if (injection){
            document.getElementById('answer').innerHTML = "<--flag{sq1-1nj2xti0n-y0u-g0t-1t}-->";
        }
    }

}