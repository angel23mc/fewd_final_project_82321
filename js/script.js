//Form
const form = document.querySelector("#contact-form");
const errorsList = document.querySelector("#errors");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  // no back-end code
  event.preventDefault();
  let firstName = document.getElementById("first-name").value;
  if (firstName.length < 3) {
    console.log(firstName);
    addError("First name must be at least 2 characters.");
  }
  let lastName = document.querySelector("#last-name").value;
  if (lastName.length < 3) {
    addError("Last name must be at least 2 characters.");
  }
  let phoneNumberValid =
    document.querySelector("#phone-area-code").value.length === 3 &&
    document.querySelector("#phone-prefix").value.length === 3 &&
    document.querySelector("#phone-line-number").value.length === 4;
  if (!phoneNumberValid) {
    addError("Please provide a valid 10 digit number.");
  }
  let areaInterest = document.querySelector("#area-interest");
  if (areaInterest.value === "Select One") {
    addError("Please select an area of interest.");
  }
}

function addError(error) {
  let li = document.createElement("li");
  li.innerText = error;
  errorsList.appendChild(li);
}
