function validateForm() {
  let nameForm = document.forms["myForm"];
  //   console.log(nameForm);
  //   console.dir(nameForm["fname"]);
  //   console.log(nameForm["fname"].value);
  nameValue = nameForm["fname"].value;
  // console.log(nameValue);
  if (nameValue == "") {
    alert("Name must be filled out");
    return false;
  }
}

function formValidation() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is less than 50 or greater than 1
  let text;
  if (x < 50 && x > 1) {
    text = "Input OK";
  } else {
    text = "Input not valid";
  }
  document.getElementById("showNumber").innerHTML = text;
}
