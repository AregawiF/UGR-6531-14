const form = document.getElementById('form');
const firstname = document.getElementById('FirstName');
const lastname = document.getElementById('LastName');
const phonenumber = document.getElementById('Phone');
const email = document.getElementById('Email');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages = []
  if (firstname.value === '' || firstname.value == null) {
    messages.push('Firstname required!');
    firstname.classList.add("error-input");
  }
  if (lastname.value === '' || lastname.value == null) {
    messages.push('lastname required!');
    lastname.classList.add("error-input");
  }
  if (phonenumber.value === '' || phonenumber.value == null) {
    messages.push('Phone number required!');
    phonenumber.classList.add("error-input");
  } else if (phonenumber.value.length < 4 || phonenumber.value.length > 15) {
    messages.push('Enter a valid phone number')
    phonenumber.classList.add("error-input");
  }
  if (email.value.length == 0) {
    messages.push('Email required!');
    email.classList.add("error-input");
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  } else {
    alert("submitted successfully");
    document.getElementById("contact-main").classList.add("submitted");
    document.getElementById("contact-main").innerHTML = document.getElementById("my-contact-info").innerHTML;
  }
});


function openModal(imageNumber) {
  document.getElementById("resume-focused").style.display = "block";
  document.getElementById("resume-focused-image").src = document.getElementById(`resumeImage${imageNumber}`).src;
}

function closeModal() {
  document.getElementById("resume-focused").style.display = "none";
}
