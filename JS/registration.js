var fName = document.getElementById('firstName');
var lName = document.getElementById('lastName');
var mail = document.getElementById('Mail');
var psw = document.getElementById('Password');
var repeatPsw = document.getElementById('repeatPassword');
var pswMessage = document.getElementById('passwordMessage');
var chckBox = document.getElementById('checkBox');
var chckLabel = document.getElementById('checkLabel');
var EmptyField = document.getElementById('emptyField');

//FIRST NAME-------------------------------------
function CheckFirstName() {
    if (!fName.value) {
        fName.classList.add('plWhite');
        fName.style.backgroundColor = '#dc3545';
        fName.style.color = '#495057';
        return false;
    }
    else {
        return true;
    }
}
function onFirstNameTextChanged() {

    if (fName.value.length < 2) {
        fName.style.backgroundColor = '#dc3545';
        fName.style.color = '#495057';
        return false;
    }
    else {
        fName.style.backgroundColor = 'white';
        fName.style.color = '#28a745';
        return true;
    }
}


//LAST NAME-------------------------------------
function CheckLastName() {
    if (!lName.value) {
        lName.classList.add('plWhite');
        lName.style.backgroundColor = '#dc3545';
        lName.style.color = '#495057';
        return false;
    }
    else {
        return true;
    }
}
function onLastNameTextChanged() {
    if (lName.value.length < 4) {
        lName.style.backgroundColor = '#dc3545';
        lName.style.color = '#495057';
        return false;
    }
    else {
        lName.style.backgroundColor = 'white';
        lName.style.color = '#28a745';
        return true;
    }
}

//EMAIL-------------------------------------
function CheckMail() {
    if (!mail.value || !mail.value.includes('@')) {
        mail.classList.add('plWhite');
        mail.style.backgroundColor = '#dc3545';
        mail.style.color = '#495057';
        return false;
    }
    else {
        return true;
    }
}
function onMailTextChanged() {
    if (!mail.value.includes('@')) {
        mail.style.backgroundColor = '#dc3545';
        mail.style.color = '#495057';
        return false;
    }
    else {
        mail.style.backgroundColor = 'white';
        mail.style.color = '#28a745';
        return true;
    }
}

//PASSWORD-------------------------------------
function CheckPassword() {
    if (!psw.value) {
        psw.classList.add('plWhite');
        psw.style.backgroundColor = '#dc3545';
        return false;
    }
    else {
        return true;
    }
}
function onPasswordTextChanged() {
    if (!psw.value) {
        psw.classList.add('plWhite');
        psw.style.backgroundColor = '#dc3545';
        pswMessage.style.color = '#dc3545'
        pswMessage.innerHTML = 'ველი არ უნდა იყოს ცარიელი';
        return false;
    }
    else if (psw.value.length < 6) {
        psw.style.backgroundColor = '#dc3545';
        pswMessage.style.color = '#dc3545';
        pswMessage.innerHTML = 'პაროლი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან';
        return false;
    }
    else {
        psw.style.backgroundColor = 'white';
        pswMessage.innerHTML = '';
        return true;
    }
}

//REPEAT PASSWORD-------------------------------------
function CheckRepeatPassword() {
    if (!repeatPsw.value) {
        repeatPsw.classList.add('plWhite');
        repeatPsw.style.backgroundColor = '#dc3545';
        return false;
    }
    else {
        return true;
    }
}

function onRepeatPasswordChanged() {
    if (!repeatPsw.value) {
        pswMessage.style.color = '#dc3545'
        pswMessage.innerHTML = 'ველი არ უნდა იყოს ცარიელი';
        return false;
    }
    else if (repeatPsw.value != psw.value) {
        repeatPsw.classList.add('plWhite');
        repeatPsw.style.backgroundColor = '#dc3545';
        pswMessage.style.color = '#dc3545'
        pswMessage.innerHTML = 'პაროლები არ ემთხვევა ერთმანეთს';
        return true;
    }
    else {
        repeatPsw.style.backgroundColor = 'white';
        pswMessage.innerHTML = '';
        return true;
    }
}

//CHECKBOX-------------------------------------
function CheckIfChecked() {
    if (chckBox.checked) {
        chckLabel.className = 'form-check-label text-success';
        return true;
    }
    else {
        chckLabel.className = 'form-check-label text-danger';
        return false;
    }
}


//REGISTRATION-------------------------------------
function Register() {
    var isField =
        CheckFirstName() && onFirstNameTextChanged() &&
        CheckLastName() && onLastNameTextChanged() &&
        CheckMail() && onMailTextChanged() &&
        CheckPassword() && onPasswordTextChanged() &&
        CheckRepeatPassword() && onRepeatPasswordChanged() &&
        CheckIfChecked();

    if (isField) {
        EmptyField.style.color = "#28a745";
        EmptyField.innerHTML = "რეგისტრაცია წარმატებით დასრულდა, ვერიფიკაციისთვის გთხოვთ ეწვიოთ მაილს";
    }
    else {
        EmptyField.style.color = "#dc3545";
        EmptyField.innerHTML = "გთხოვთ შეავსოთ ყველა ველი";
    }
}