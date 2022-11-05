
var username = document.querySelector("#username");
var mobileNumber = document.querySelector("#mobileNumber");
var password = document.querySelector("#password");
var cpassword = document.querySelector("#cpassword");
var uerror = document.querySelector("#u-error");
var merror = document.querySelector("#m-error");
var p_error = document.querySelector("#p-error");
var cp_error = document.querySelector("#cp-error");
var form = document.querySelector("#form")

var u_name = /^[A-Za-z]+$/;
var u_num = /^[6-9]{1}[0-9]{9}$/;
var p_pass = /^[a-zA-Z0-9!@#$%^&*]{0,16}$/

//this is for keyup in input as addEventListener

//username
username.addEventListener("keyup", function () {
    if (!username.value.match(u_name)) {
        uerror.innerHTML = '*Numbers not allowed';
        username.classList.add('is-invalid');
        return false;
    } else {
        username.classList.remove('is-invalid')
        username.classList.add('is-valid')
        uerror.innerHTML = '';

    }
    if (username.value.length < 5) {
        username.classList.add('is-invalid');
        uerror.innerHTML = '*Minimum length is 5';
        return false
    } else {
        username.classList.remove('is-invalid')
        username.classList.add('is-valid')
        uerror.innerHTML = '';
    }
})

//Mobile Number
mobileNumber.addEventListener('keyup', function () {
    if (!mobileNumber.value.match(u_num)) {
        merror.innerHTML = '*Enter valid number'
        mobileNumber.classList.add('is-invalid')
        return false
    } else {
        merror.innerHTML = '';
        mobileNumber.classList.remove('is-invalid');
        mobileNumber.classList.add('is-valid')

    }
})

//password
password.addEventListener("keyup", function () {
    if (!password.value.match(p_pass)) {
        p_error.innerHTML = '*Enter your password'
        password.classList.add('is-invalid')
        return false
    } else {
        p_error.innerHTML = ''
        password.classList.remove('is-invalid');
        password.classList.add('is-valid')
    }
    if(password.value.length < 6){
        p_error.innerHTML = '*minimum 6 charaters';
        password.classList.add('is-invalid');
        return false
    }else{
        p_error.innerHTML = '';
        password.classList.remove('is-invalid');

        password.classList.add('is-valid');

    }

})//confirm password
cpassword.addEventListener("keyup", function () {
    if (cpassword.value != password.value) {
        cp_error.innerHTML = "*Password and confirm password must be same"
        cpassword.classList.add("is-invalid");
        return false
    } else {
        cp_error.innerHTML = '';
        cpassword.classList.remove('is-invalid');
        cpassword.classList.add("is-valid")
    }
})

//this is for submittion on submit

function success() {
    //username
    if (username.value == '') {
        uerror.innerHTML = '*Enter your username';
        username.classList.add('is-invalid')
        return false
    }
    if (!username.value.match(u_name)) {

        return false
    }
    if (username.value.length < 5) {
        return false
    }

    //mobile number
    if (mobileNumber.value == '') {
        merror.innerHTML = '*Enter your mobile number';
        mobileNumber.classList.add('is-invalid')
        return false
    }
    if (!mobileNumber.value.match(u_num)) {
        return false
    }

    //password
    if (password.value == '') {
        p_error.innerHTML = '*Enter your password';
        password.classList.add('is-invalid')
        return false
    }
    if (!password.value.match(p_pass)) {
        return false
    }
    if(password.value.length < 6){
        return false
    }
   
    //confirm password
    if (cpassword.value == '') {
        cp_error.innerHTML = '*Re-enter your password';
        cpassword.classList.add('is-invalid')
        return false
    }
    if (cpassword.value != password.value) {
        return false
    }
    
    if (cpassword.value != password.value) {
        cp_error.innerHTML = "*Password and confirm password must be same";
        password.classList.add('is-invalid')
        return false
    }
    
}





