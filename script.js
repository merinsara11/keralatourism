
let email = document.getElementById("email");
let error = document.getElementById("error");


function validemail(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp.test(email.value)){
        error.innerHTML="valid";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="Invalid email";
        error.style.color="red";
        return false;
    }
}

//login page validation
function validate(){
    if(email.value==""||pwd.value==""){
        alert("Fields cannot be empty");
        return false;
    }
    else{
        return true;
    }
}


//phone number validation
let error1 = document.getElementById("error1");
function phonenumber()
{
    let inputtxt=document.getElementById("contactno");
  var pno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(pno))
  {
          return true;
  }
    else
        {

            error1.innerHTML="Invalid Contact No";
            error1.style.color="red";
            return false;
        }
}

//validation of password
function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6}).*", "g");
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = '<span style="color:green">Sg!</span>';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}
