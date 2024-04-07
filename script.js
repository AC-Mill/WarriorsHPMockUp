"use strict"

//Product switching

let currySwitch = document.getElementById("currySwitch");
let thompsonSwitch = document.getElementById("thompsonSwitch");
let greenSwitch = document.getElementById("greenSwitch");

function switchToCurry(){
    document.getElementById("curry").style.display = "block";
    document.getElementById("thompson").style.display = "none";
    document.getElementById("green").style.display = "none";

    currySwitch.style.borderBottom = "var(--white) solid 3px";
    thompsonSwitch.style.borderBottom = "none";
    greenSwitch.style.borderBottom = "none";
}

function switchToThompson(){
    document.getElementById("curry").style.display = "none";
    document.getElementById("thompson").style.display = "block";
    document.getElementById("green").style.display = "none";

    currySwitch.style.borderBottom = "none";
    thompsonSwitch.style.borderBottom = "var(--white) solid 3px";
    greenSwitch.style.borderBottom = "none";
}

function switchToGreen(){
    document.getElementById("curry").style.display = "none";
    document.getElementById("thompson").style.display = "none";
    document.getElementById("green").style.display = "block";

    currySwitch.style.borderBottom = "none";
    thompsonSwitch.style.borderBottom = "none";
    greenSwitch.style.borderBottom = "var(--white) solid 3px";
}

//Guess Number Game

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessNumber(e){
    e.preventDefault();

    let numInput = document.getElementById("num");

    let num = parseFloat(numInput.value);

    let randomNumber = getRandomNumber(1, 10);

    let p = document.getElementById("gameMessage");

    let randomDisplay = document.getElementById("randomNumber");

    let userNumber = document.getElementById("displayUserNumber");

    if(num === randomNumber){
        p.textContent = "You win! Go Warriors!";
        randomDisplay.textContent = `The number was ${randomNumber}.`;
        userNumber.textContent = `You chose the number ${num}.`;
    } else {
        p.textContent = "You lose, try again!";
        randomDisplay.textContent = `The number was ${randomNumber}.`;
        userNumber.textContent = `You chose the number ${num}.`;
    }
}

//Form Validation

function checkForm() {
  const firstNameError = document.getElementById('firstNameError');
  const lastNameError = document.getElementById('lastNameError');
  const emailError = document.getElementById('emailError');
  const telError = document.getElementById('telError');
  const commentError = document.getElementById('commentError');
  firstNameError.innerHTML = '';
  lastNameError.innerHTML = '';
  emailError.innerHTML = '';
  telError.innerHTML = '';
  commentError.innerHTML = '';

  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const tel = document.getElementById('tel');
  const comments = document.getElementById('comments');

  firstName.classList.remove('error');
  lastName.classList.remove('error');
  email.classList.remove('error');
  tel.classList.remove('error');


  let errorsFound = false;


  if (!firstName.value) {
    errorsFound = true;
    firstName.classList.add('error');
    const firstNameErr = document.createElement("li");
    firstNameErr.textContent = "Missing first name.";
    firstNameError.appendChild(firstNameErr);
  }

  if (!lastName.value) {
    errorsFound = true;
    lastName.classList.add('error');
    const lastNameErr = document.createElement("li");
    lastNameErr.textContent = "Missing last name.";
    lastNameError.appendChild(lastNameErr);
  }

  if (!email.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)) {
    errorsFound = true;
    email.classList.add('error');
    const emailErr = document.createElement("li");
    emailErr.textContent = "Invalid or missing email address.";
    emailError.appendChild(emailErr);
  }

  if(!tel.value || !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(tel.value)){
    errorsFound = true;
    tel.classList.add('error');
    const telErr = document.createElement("li");
    telErr.textContent = "Invalid or missing phone number.";
    telError.appendChild(telErr);  
  }

  if(!comments.value){
    errorsFound = true;
    comments.classList.add('error');
    const commentsErr = document.createElement("li");
    commentsErr.textContent = "Commenting is required.";
    commentError.appendChild(commentsErr);
  }


  if (errorsFound) {
    firstNameError.classList.remove('hide');
    lastNameError.classList.remove('hide');
    emailError.classList.remove('hide');
    telError.classList.remove('hide');
    commentError.classList.remove('hide');
  } else {
    firstNameError.classList.add('hide');
    lastNameError.classList.add('hide');
    emailError.classList.add('hide');
    telError.classList.add('hide');
    commentError.classList.add('hide');
  }
}

let firstNameArray =[]; 
let lastNameArray =[]; 
let emailArray =[]; 
let telArray =[]; 
let commentArray =[]; 

function formArray(){
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const tel = document.getElementById('tel').value;
  const comments = document.getElementById('comments').value;

  firstNameArray.push(firstName);
  lastNameArray.push(lastName);
  emailArray.push(email);
  telArray.push(tel);
  commentArray.push(comments);
}
//Event Handlers 

document.getElementById("submitForm").addEventListener("click", function(event) {
    
  checkForm();
 
  event.preventDefault();

  formArray();
  
  document.getElementById("myForm").reset();
});

currySwitch.addEventListener("click", switchToCurry);
thompsonSwitch.addEventListener("click", switchToThompson);
greenSwitch.addEventListener("click", switchToGreen);

document.getElementById("guesserSubmit").addEventListener("click", guessNumber);

//check the arrays
console.log(firstNameArray);
console.log(lastNameArray);
console.log(emailArray);
console.log(telArray);
console.log(commentArray);