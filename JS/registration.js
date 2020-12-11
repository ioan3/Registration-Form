var fName = document.getElementById('firstName');
var lName = document.getElementById('lastName');
var mail = document.getElementById('Mail');
var psw = document.getElementById('Password');
var repeatPsw = document.getElementById('repeatPassword');
var pswMessage = document.getElementById('passwordMessage');
var chckBox = document.getElementById('checkBox');
var chckLabel = document.getElementById('checkLabel');

function CheckFirstName() {
    if (!fName.value) {
        fName.classList.add('plWhite');
        fName.style.backgroundColor = '#dc3545';
        fName.style.color = '#495057';
    }
}
function onFirstNameTextChanged() {

    if (fName.value.length < 2) {
        fName.style.backgroundColor = '#dc3545';
        fName.style.color = '#495057';
    }
    else {
        fName.style.backgroundColor = 'white';
        fName.style.color = '#28a745';
    }
}

function CheckLastName() {
    if (!lName.value) {
        lName.classList.add('plWhite');
        lName.style.backgroundColor = '#dc3545';
        lName.style.color = '#495057';
    }
}
function onLastNameTextChanged() {
    if (lName.value.length < 4) {
        lName.style.backgroundColor = '#dc3545';
        lName.style.color = '#495057';
    }
    else {
        lName.style.backgroundColor = 'white';
        lName.style.color = '#28a745';
    }
}

function CheckMail() {
    if (!mail.value || !mail.value.includes('@')) {
        mail.classList.add('plWhite');
        mail.style.backgroundColor = '#dc3545';
        mail.style.color = '#495057';
    }
}
function onMailTextChanged() {
    if (!mail.value.includes('@')) {
        mail.style.backgroundColor = '#dc3545';
        mail.style.color = '#495057';
    }
    else {
        mail.style.backgroundColor = 'white';
        mail.style.color = '#28a745';
    }
}

function CheckPassword() {
    if (!psw.value) {
        psw.classList.add('plWhite');
        psw.style.backgroundColor = '#dc3545';
    }
}
function onPasswordTextChanged() {
    if(!psw.value) {
        psw.classList.add('plWhite');
        psw.style.backgroundColor = '#dc3545';
        pswMessage.style.color = '#dc3545'
        pswMessage.innerHTML = 'ველი არ უნდა იყოს ცარიელი';
    }
    else if (psw.value.length < 6) {
        psw.style.backgroundColor = '#dc3545';
        pswMessage.style.color = '#dc3545';
        pswMessage.innerHTML = 'პაროლი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან';
    }
    else {
        psw.style.backgroundColor = 'white';
        pswMessage.innerHTML = '';
    }
}

function onRepeatPasswordChanged() {
    if(!repeatPsw.value) {
        pswMessage.style.color = '#dc3545'
        pswMessage.innerHTML = 'ველი არ უნდა იყოს ცარიელი';
    }
    else if (repeatPsw.value != psw.value) {
        repeatPsw.classList.add('plWhite');
        repeatPsw.style.backgroundColor = '#dc3545';
        pswMessage.style.color = '#dc3545'
        pswMessage.innerHTML = 'პაროლები არ ემთხვევა ერთმანეთს';
    }
    else {
        repeatPsw.style.backgroundColor = 'white';
        pswMessage.innerHTML = '';
    }
}

function CheckIfChecked() {
    if (chckBox.checked == true) {
        chckLabel.className = 'form-check-label text-success';
    }
    else {
        chckLabel.className = 'form-check-label text-danger';
    }
}

function Register() {
    window.alert('რეგისტრაცია წარმატებით დასრულდა, ვერიფიკაციისთვის ეწვიეთ მეილს.');
}