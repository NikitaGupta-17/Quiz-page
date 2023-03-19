function validate() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value
    var temp = 0
    var temp1 = 0
    var temp2 = 0
    var temp3 = 0
    temp = checkusername(username, temp)
    temp1 = checkemail(email, temp1)
    temp2 = checkpassword(password, temp2)
    temp3 = checkpasswordsmatch(password, cpassword, temp3)
    if (temp && temp1 && temp2 && temp3)
        go_to_next()
}

function go_to_next() {
    //$('input').css('display', 'none')
    var a = document.createElement('a');
    var link = document.createTextNode("Click Here for giving test");
    a.appendChild(link);
    a.href = "./index.html";
    a.style.color = "red";
    a.style.textAlign = "center";
    document.body.appendChild(a);

}

function checkusername(username, temp) {
    if (username.length > 7) {
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('failure', 'success')
        document.getElementById('username_error').innerHTML = ''
        temp = 1
    } else {
        document.getElementById('username').classList.add('failure')
        document.getElementById('username_error').innerText = 'username must be 8 letter long'
        temp = 0
    }
    return temp;
}

function checkemail(email, temp1) {
    if (email.length > 8 && email.includes('@gmail')) {
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('failure', 'success')
        document.getElementById('email_error').innerHTML = ''
        temp1 = 1
    } else {
        document.getElementById('email').classList.add('failure')
        document.getElementById('email_error').innerText = 'email must be 8 letter long and must include @gamil'
        temp1 = 0
    }
    return temp1;
}

function checkpassword(password, temp2) {
    if (password.length > 7 && password.includes('.')) {
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('failure', 'success')
        document.getElementById('password_error').innerHTML = ''
        temp2 = 1
    } else {
        document.getElementById('password').classList.add('failure')
        document.getElementById('password_error').innerText = 'password must be 8 letter long and should include .'
        temp2 = 0
    }
    return temp2;
}

function checkpasswordsmatch(password, cpassword, temp3) {
    if (password == cpassword && password != '') {
        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword').classList.replace('failure', 'success')
        document.getElementById('cpassword_error').innerHTML = ''
        temp3 = 1
    } else {
        document.getElementById('cpassword').classList.add('failure')
        document.getElementById('cpassword_error').innerText = 'Password not match'
        temp3 = 0
    }
    return temp3;
}